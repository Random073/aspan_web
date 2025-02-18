<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { onMounted, ref } from 'vue';

export default {
   setup() {
      const threeContainer = ref(null);
      let scene, camera, renderer;
      let islands = [];
      let currentDragIsland = null;
      const raycaster = new THREE.Raycaster();

      // Adjusted drag parameters for a heavier feel.
      const dragSensitivity = 0.001; // Lower sensitivity for smoother, slower rotation.
      const momentumFactor = 0.2;    // Lower momentum so rotations don't spin too fast.
      const frictionFactor = 0.95;   // Increased friction to "weigh" the rotations.

      onMounted(() => {
         initThreeJS();
         createIslands();
      });

      function initThreeJS() {
         scene = new THREE.Scene();

         // Set up an orthographic camera.
         const aspect = window.innerWidth / window.innerHeight;
         const frustumSize = 10;
         camera = new THREE.OrthographicCamera(
            (-frustumSize * aspect) / 2,
            (frustumSize * aspect) / 2,
            frustumSize / 2,
            (-frustumSize) / 2,
            0.1,
            1000
         );
         camera.position.set(0, 0, 10);
         camera.lookAt(scene.position);

         renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
         renderer.setSize(window.innerWidth, window.innerHeight);
         // Improve the appearance of textures.
         renderer.outputEncoding = THREE.sRGBEncoding;
         renderer.toneMapping = THREE.ACESFilmicToneMapping;
         renderer.toneMappingExposure = 1.2;
         renderer.domElement.style.pointerEvents = 'auto';
         threeContainer.value.appendChild(renderer.domElement);

         // Updated Lighting for brighter, more defined islands.
         const sunLight = new THREE.DirectionalLight(0xffffff, 0.8);
         sunLight.position.set(3, 5, 5);
         scene.add(sunLight);

         const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
         scene.add(ambientLight);

         // Additional lights for extra fill.
         const spotLight1 = new THREE.SpotLight(0xffffff, 1);
         spotLight1.position.set(-5, 5, 5);
         scene.add(spotLight1);

         const spotLight2 = new THREE.SpotLight(0xffffff, 1);
         spotLight2.position.set(5, 5, 5);
         scene.add(spotLight2);

         const pointLight1 = new THREE.PointLight(0xffffff, 1.5, 50);
         pointLight1.position.set(0, 5, 5);
         scene.add(pointLight1);

         const pointLight2 = new THREE.PointLight(0xffffff, 1.5, 50);
         pointLight2.position.set(0, -5, 5);
         scene.add(pointLight2);

         // Scroll zoom: adjust camera zoom based on scroll.
         window.addEventListener('scroll', () => {
            camera.zoom = Math.max(0.3, 1 - window.scrollY * 0.0003);
            camera.updateProjectionMatrix();
         });

         // Resize event.
         window.addEventListener('resize', () => {
            const aspect = window.innerWidth / window.innerHeight;
            camera.left = (-frustumSize * aspect) / 2;
            camera.right = (frustumSize * aspect) / 2;
            camera.top = frustumSize / 2;
            camera.bottom = (-frustumSize) / 2;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
         });

         // --- Drag Interaction Setup ---
         renderer.domElement.addEventListener('pointerdown', onPointerDown);
         renderer.domElement.addEventListener('pointermove', onPointerMove);
         renderer.domElement.addEventListener('pointerup', onPointerUp);
         renderer.domElement.addEventListener('pointerleave', onPointerUp);

         // Helper: Traverse parent chain to find the island.
         function getIslandFromMesh(mesh) {
            let current = mesh;
            while (current) {
               const found = islands.find(obj => obj.mesh === current);
               if (found) return found;
               current = current.parent;
            }
            return null;
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
         }
         // --- End Drag Interaction Setup ---

         function animate() {
            requestAnimationFrame(animate);
            islands.forEach(island => {
               if (!island.isDragging && island.rotationVelocity) {
                  island.mesh.rotation.x += island.rotationVelocity.x || 0;
                  island.mesh.rotation.y += island.rotationVelocity.y || 0;
                  island.rotationVelocity.x *= frictionFactor;
                  island.rotationVelocity.y *= frictionFactor;
                  if (Math.abs(island.rotationVelocity.x) < 0.00001) island.rotationVelocity.x = 0;
                  if (Math.abs(island.rotationVelocity.y) < 0.00001) island.rotationVelocity.y = 0;
               }
            });
            renderer.render(scene, camera);
         }
         animate();
      }

      function createIslands() {
         const loader = new GLTFLoader();
         const positions = [
            { x: -5, y: 1.5, z: 1.5, rotX: Math.PI / 5, rotY: -Math.PI / 10, rotZ: -0.2 },  // Upper-left
            { x: -6.2, y: -3, z: 0.2, rotX: Math.PI / 8, rotY: -Math.PI / 15, rotZ: -0.2 }, // Lower-left
            { x: 6, y: 1.8, z: 0.5, rotX: Math.PI / 4.5, rotY: Math.PI / 5,rotZ: 0.1 }, // Upper-right
            { x: 6.5, y: -2.5, z: 0, rotX: Math.PI / 8, rotY: -Math.PI / 20, rotZ: 0.2 }, // Lower-right
            { x: 0, y: -3, z: 1, rotX: Math.PI / 15, rotY: 0, rotZ: 0 },  // Center-bottom
         ];
         const islandFiles = [
            '/aspan_web/assets/islandTennis.glb',
            '/aspan_web/assets/islandHouse.glb',
            '/aspan_web/assets/islandGarage.glb',
            '/aspan_web/assets/islandFootball.glb',
            '/aspan_web/assets/islandFerrariF40.glb'
         ];

         positions.forEach((pos, index) => {
            loader.load(
               islandFiles[index],
               (gltf) => {
                  const island = gltf.scene;
                  island.position.set(pos.x, pos.y, pos.z);
                  island.scale.set(0.6, 0.6, 0.6);
                  island.rotation.set(pos.rotX, pos.rotY, pos.rotZ);
                  scene.add(island);
                  islands.push({
                  mesh: island,
                  isDragging: false,
                  rotationVelocity: { x: 0, y: 0 },
                  dragStart: null
                  });
               },
               undefined,
               (error) => {
                  console.error('Error loading model:', error);
               }
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
</style>