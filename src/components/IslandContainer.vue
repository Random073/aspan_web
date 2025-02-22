<template>
   <div ref="threeContainer" class="three-container"></div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { onMounted, ref, onUnmounted } from 'vue';

export default {
   setup() {
      const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      const isMobile = ref(
         (window.innerWidth <= 768 || isIOS) && isTouchDevice
      );

      const checkMobile = () => {
         isMobile.value = (window.innerWidth <= 768 || isIOS) && isTouchDevice;
         // Update Three.js camera on resize
         if (camera) {
            const aspect = window.innerWidth / window.innerHeight;
            const frustumSize = isMobile.value ? 14 : 11;
            camera.left = (-frustumSize * aspect) / 2;
            camera.right = (frustumSize * aspect) / 2;
            camera.top = frustumSize / 2;
            camera.bottom = -frustumSize / 2;
            camera.updateProjectionMatrix();
         }
      };

      const threeContainer = ref(null);
      const dragSensitivity = 0.001;
      const momentumFactor = 0.2;
      const frictionFactor = 0.95;
      let scene, camera, renderer;
      let islands = [];
      let currentDragIsland = null;
      const raycaster = new THREE.Raycaster();

      const autoRotationSpeed = 0.0003;
      const autoRotationVariation = 0.0005;

      onMounted(() => {
         initThreeJS();
         createIslands();
         window.addEventListener('resize', checkMobile);
         window.addEventListener('orientationchange', checkMobile);
      });

      onUnmounted(() => {
         window.removeEventListener('resize', checkMobile);
         window.removeEventListener('orientationchange', checkMobile);
      });

      function initThreeJS() {
         scene = new THREE.Scene();

         const aspect = window.innerWidth / window.innerHeight;
         const frustumSize = isMobile.value ? 14 : 11;
         camera = new THREE.OrthographicCamera(
            (-frustumSize * aspect) / 2,
            (frustumSize * aspect) / 2,
            frustumSize / 2,
            (-frustumSize) / 2,
            0.1,
            1000
         );
         camera.position.set(0, 0, 11);
         camera.lookAt(scene.position);

         const initialZoom = isMobile.value ? 0.6 : 0.8;
         camera.zoom = initialZoom;
         camera.updateProjectionMatrix();

         renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
         renderer.setSize(window.innerWidth, window.innerHeight);
         renderer.outputEncoding = THREE.SRGBColorSpace;
         renderer.toneMapping = THREE.ACESFilmicToneMapping;
         renderer.toneMappingExposure = 1.2;
         renderer.domElement.style.pointerEvents = 'none';
         threeContainer.value.appendChild(renderer.domElement);

         const sunLight = new THREE.DirectionalLight(0xffffff, 0.8);
         sunLight.position.set(3, 5, 5);
         scene.add(sunLight);

         scene.add(new THREE.AmbientLight(0xffffff, 0.6));

         if (!isMobile.value) {
            renderer.domElement.addEventListener('pointerdown', onPointerDown);
            renderer.domElement.addEventListener('pointermove', onPointerMove);
            renderer.domElement.addEventListener('pointerup', onPointerUp);
            renderer.domElement.addEventListener('pointerleave', onPointerUp);
            window.addEventListener('mousemove', onMouseMove);
         }

         window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const zoomFactor = 0.0003;
            const minZoom = isMobile.value ? 0.4 : 0.3;
            const maxZoom = initialZoom;
            const smoothZoom = initialZoom - scrollY * zoomFactor * 0.5;
            const newZoom = Math.max(minZoom, Math.min(maxZoom, smoothZoom));
            camera.zoom = newZoom;
            camera.updateProjectionMatrix();
         });

         window.addEventListener('resize', () => {
            const aspect = window.innerWidth / window.innerHeight;
            camera.left = (-frustumSize * aspect) / 2;
            camera.right = (frustumSize * aspect) / 2;
            camera.top = frustumSize / 2;
            camera.bottom = (-frustumSize) / 2;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
         });

         // Hover detection
         window.addEventListener('mousemove', onMouseMove);

         renderer.domElement.addEventListener('pointerdown', onPointerDown);
         renderer.domElement.addEventListener('pointermove', onPointerMove);
         renderer.domElement.addEventListener('pointerup', onPointerUp);
         renderer.domElement.addEventListener('pointerleave', onPointerUp);

         function getIslandFromMesh(mesh) {
            let current = mesh;
            while (current) {
               const found = islands.find(obj => obj.mesh === current);
               if (found) return found;
               current = current.parent;
            }
            return null;
         }

         function onMouseMove(event) {
            if (currentDragIsland) {
               renderer.domElement.style.pointerEvents = 'auto';
               return;
            }

            const rect = renderer.domElement.getBoundingClientRect();
            const mouse = new THREE.Vector2(
               ((event.clientX - rect.left) / rect.width) * 2 - 1,
               -((event.clientY - rect.top) / rect.height) * 2 + 1
            );
            raycaster.setFromCamera(mouse, camera);
            const clickableMeshes = [];
            islands.forEach(obj => {
               obj.mesh.traverse(child => {
                  if (child.isMesh) clickableMeshes.push(child);
               });
            });
            const intersects = raycaster.intersectObjects(clickableMeshes, true);
            renderer.domElement.style.pointerEvents = intersects.length > 0 ? 'auto' : 'none';
         }

         function onPointerDown(event) {
            const rect = renderer.domElement.getBoundingClientRect();
            const mouse = new THREE.Vector2(
               ((event.clientX - rect.left) / rect.width) * 2 - 1,
               -((event.clientY - rect.top) / rect.height) * 2 + 1
            );
            raycaster.setFromCamera(mouse, camera);
            const clickableMeshes = [];
            islands.forEach(obj => {
               obj.mesh.traverse(child => {
                  if (child.isMesh) clickableMeshes.push(child);
               });
            });
            const intersects = raycaster.intersectObjects(clickableMeshes, true);
            if (intersects.length > 0) {
               const islandObj = getIslandFromMesh(intersects[0].object);
               if (islandObj) {
                  islandObj.isDragging = true;
                  currentDragIsland = islandObj;
                  islandObj.dragStart = {
                  pointerX: event.clientX,
                  pointerY: event.clientY,
                  rotationX: islandObj.mesh.rotation.x,
                  rotationY: islandObj.mesh.rotation.y,
                  time: performance.now()
                  };
               }
            }
         }

         function onPointerMove(event) {
            if (currentDragIsland && currentDragIsland.isDragging && currentDragIsland.dragStart) {
               const deltaX = event.clientX - currentDragIsland.dragStart.pointerX;
               const deltaY = event.clientY - currentDragIsland.dragStart.pointerY;
               const newRotationY = currentDragIsland.dragStart.rotationY + deltaX * dragSensitivity;
               const newRotationX = currentDragIsland.dragStart.rotationX + deltaY * dragSensitivity;
               const currentTime = performance.now();
               const deltaTime = (currentTime - currentDragIsland.dragStart.time) || 16;
               const newVelocityX = (deltaY * dragSensitivity) / (deltaTime / 1000) * momentumFactor;
               const newVelocityY = (deltaX * dragSensitivity) / (deltaTime / 1000) * momentumFactor;
               currentDragIsland.rotationVelocity = { x: newVelocityX, y: newVelocityY };
               currentDragIsland.dragStart.pointerX = event.clientX;
               currentDragIsland.dragStart.pointerY = event.clientY;
               currentDragIsland.dragStart.rotationX = currentDragIsland.mesh.rotation.x;
               currentDragIsland.dragStart.rotationY = currentDragIsland.mesh.rotation.y;
               currentDragIsland.dragStart.time = currentTime;
               currentDragIsland.mesh.rotation.x = newRotationX;
               currentDragIsland.mesh.rotation.y = newRotationY;
            }
         }

         function onPointerUp() {
            if (currentDragIsland) {
               currentDragIsland.isDragging = false;
               currentDragIsland.dragStart = null;
               currentDragIsland = null;
            }
            window.dispatchEvent(new Event('mousemove'));
         }

         function animate() {
            requestAnimationFrame(animate);
            islands.forEach(island => {
               island.mesh.rotation.y += island.autoRotationSpeed;
               if (!isMobile.value && !island.isDragging && island.rotationVelocity) {
                  island.mesh.rotation.x += island.rotationVelocity.x;
                  island.mesh.rotation.y += island.rotationVelocity.y;
                  island.rotationVelocity.x *= frictionFactor;
                  island.rotationVelocity.y *= frictionFactor;
               }
            });
            renderer.render(scene, camera);
         }
         animate();
      }

      function createIslands() {
         const loader = new GLTFLoader();
         let positions, islandFiles, scale;

         if (isMobile.value) {
            positions = [
               { x: -2.5, y: 4, z: 1.5, rotX: Math.PI/5, rotY: -Math.PI/10, rotZ: -0.2 },
               { x: -2.3, y: -4, z: 0, rotX: Math.PI/10, rotY: -Math.PI/12, rotZ: -0.3 },
               { x: 3.5, y: 0.5, z: 0.5, rotX: Math.PI/4.5, rotY: Math.PI/5, rotZ: 0.1 }
            ];
            islandFiles = [
               '/aspan_web/assets/islandTennis.glb',
               '/aspan_web/assets/islandFerrariF40.glb',
               '/aspan_web/assets/islandFootball.glb'
            ];
            scale = 0.75;
         } else {
            positions = [
               { x: -7.5, y: 2, z: 1.5, rotX: Math.PI/5, rotY: -Math.PI/10, rotZ: -0.2 },
               { x: -7.2, y: -3.5, z: 0.2, rotX: Math.PI/8, rotY: -Math.PI/15, rotZ: -0.2 },
               { x: 7.5, y: 1.8, z: 0.5, rotX: Math.PI/4.5, rotY: Math.PI/5, rotZ: 0.1 },
               { x: 7.5, y: -3.2, z: 0, rotX: Math.PI/8, rotY: -Math.PI/20, rotZ: 0.2 },
               { x: 0, y: -3.3, z: 1, rotX: Math.PI/15, rotY: 0, rotZ: 0 },
            ];
            islandFiles = [
               '/aspan_web/assets/islandTennis.glb',
               '/aspan_web/assets/islandHouse.glb',
               '/aspan_web/assets/islandGarage.glb',
               '/aspan_web/assets/islandFootball.glb',
               '/aspan_web/assets/islandFerrariF40.glb'
            ];
            scale = 0.8;
         }

         positions.forEach((pos, index) => {
            loader.load(
               islandFiles[index],
               (gltf) => {
                  const island = gltf.scene;
                  island.position.set(pos.x, pos.y, pos.z);
                  island.scale.set(scale, scale, scale);
                  island.rotation.set(pos.rotX, pos.rotY, pos.rotZ);
                  scene.add(island);
                  islands.push({
                     mesh: island,
                     isDragging: false,
                     rotationVelocity: { x: 0, y: 0 },
                     dragStart: null,
                     autoRotationSpeed: autoRotationSpeed + (Math.random() * autoRotationVariation)
                  });
               },
               undefined,
               (error) => console.error('Error loading model:', error)
            );
         });
      }
      return { threeContainer };
   },
};
</script>
 
<style scoped>
.three-container {
   position: absolute;
   width: 100%;
   height: 100vh;
   top: 0;
   left: 0;
   z-index: 2;
   pointer-events: none;
}

@media (max-width: 768px) {
   .three-container {
      z-index: 0;
      opacity: 0.9;
   }
}
</style>