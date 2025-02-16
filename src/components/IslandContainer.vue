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

      onMounted(() => {
         initThreeJS();
         createIslands(5);
      });

      function initThreeJS() {
         scene = new THREE.Scene();
         camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
         camera.position.set(0, 0, 5);

         renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
         renderer.setSize(window.innerWidth, window.innerHeight);
         threeContainer.value.appendChild(renderer.domElement);

         // Directional light for sunlight effect
         const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
         sunLight.position.set(3, 5, 5);
         scene.add(sunLight);

         // Soft ambient light
         const ambientLight = new THREE.AmbientLight(0x888888, 0.8);
         scene.add(ambientLight);

         // Additional spotlights to highlight islands
         const spotLight1 = new THREE.SpotLight(0xffffff, 1);
         spotLight1.position.set(-5, 5, 5);
         scene.add(spotLight1);

         const spotLight2 = new THREE.SpotLight(0xffffff, 1);
         spotLight2.position.set(5, 5, 5);
         scene.add(spotLight2);

         // Point lights for subtle lighting
         const pointLight1 = new THREE.PointLight(0xffffff, 1.5, 50);
         pointLight1.position.set(0, 5, 5);
         scene.add(pointLight1);

         const pointLight2 = new THREE.PointLight(0xffffff, 1.5, 50);
         pointLight2.position.set(0, -5, 5);
         scene.add(pointLight2);

         // Move camera deeper as you scroll
         function handleScroll() {
            const scrollY = window.scrollY;
            camera.position.z = 5 + scrollY * 0.001; 
         }
         window.addEventListener('scroll', handleScroll);
         
         window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
         });

         function animate() {
            requestAnimationFrame(animate);
            islands.forEach(island => {
               if (!island.isDragging) {
                  island.mesh.rotation.y += 0.001;
               }
            });
            renderer.render(scene, camera);
         }
         animate();
      }


      function createIslands() {
         const loader = new GLTFLoader();

         // Fixed positions for islands (x, y, z, rotationX, rotationY, rotationZ)
         const positions = [
            { x: -3, y: 1.5, z: 1.5, rotX: Math.PI / 5, rotY: -Math.PI / 10, rotZ: -0.2 },  // Upper-left
            { x: -4.5, y: -1.5, z: 0.2, rotX: Math.PI / 8, rotY: -Math.PI / 15, rotZ: -0.2 }, // Lower-left
            { x: 4, y: 1.8, z: 0.5, rotX: Math.PI / 4.5, rotY: Math.PI / 5,rotZ: 0.1 }, // Upper-right
            { x: 4.5, y: -2, z: 0, rotX: Math.PI / 8, rotY: -Math.PI / 20, rotZ: 0.2 }, // Lower-right
            { x: 0, y: -1.5, z: 1, rotX: Math.PI / 15, rotY: 0, rotZ: 0 },  // Center-bottom
         ];

         positions.forEach(pos => {
            loader.load('/aspan_web/assets/islandTennis.glb', (gltf) => {
               const island = gltf.scene;

               // Set position, scale, and rotation
               island.position.set(pos.x, pos.y, pos.z);
               island.scale.set(0.28, 0.28, 0.28);
               island.rotation.set(pos.rotX, pos.rotY, pos.rotZ);

               scene.add(island);
               islands.push({ mesh: island, isDragging: false });
            }, undefined, (error) => {
               console.error('Error loading model:', error);
            });
         });
      }

      return {
      threeContainer,
      };
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