<template>
  <div>
    <!-- Islands Hero Section -->
    <section class="islands-hero">
      <div class="hero-overlay">
        <div class="text-panel">
          <h1 class="hero-title">Открывайте острова</h1>
          <p class="hero-subtitle">
            Погрузитесь в мир уникальных приключений и открытий
          </p>
        </div>
      </div>
    </section>

    <!-- Gamification Section -->
    <section class="gamification-section">
      <div class="container">
        <!-- Left Column: Earn Coins Info -->
        <div class="info-panel">
          <h2 class="info-heading">Зарабатывайте монеты</h2>
          <p class="info-description">
            Завершайте уроки и получайте монету за каждый завершённый урок. Как
            только вы накопите 5 монет, вы сможете создать остров!
          </p>
          <div class="coin-display">
            <h3>Монеты: {{ coins }}</h3>
          </div>
          <button class="complete-lesson-btn" @click="completeLesson">
            Завершить урок
          </button>
          <button
            v-if="coins >= 5 && !islandSpawned"
            class="spawn-island-btn"
            @click="spawnIsland"
          >
            Вызвать остров
          </button>
        </div>
        <!-- Right Column: 3D Island Panel -->
        <div class="island-panel">
          <div ref="sceneContainer" class="scene-container"></div>
        </div>
      </div>
    </section>
    <section class="features-section">
      <div class="features-grid">
        <div class="topics-image first-order">
          <img src="/assets/features-islands.png" alt="Topics" />
        </div>
        <div class="topics-text second-order">
          <h2 class="classic-heading">Создайте свой мир островов!</h2>
          <p class="classic-description">
            Погрузитесь в атмосферу творчества и настройте каждый остров под
            себя. Добавляйте уникальные элементы, изменяйте ландшафт и
            обустраивайте постройки так, чтобы каждый уголок отражал вашу
            индивидуальность. Позвольте своему воображению разгуляться и
            создайте пространство, в котором каждый остров станет воплощением
            ваших мечтаний и идей.
          </p>
        </div>

        <div class="topics-text third-order">
          <h2 class="classic-heading">Проходите уроки и покупайте острова!</h2>
          <p class="classic-description">
            За прохождение уроков вы получаете виртуальные монеты, которые можно
            использовать для покупки уникальных островов. Каждый остров имеет
            свою стоимость, и вы можете выбирать из множества вариантов — от
            небольших уютных уголков до целых архипелагов. Приобретая новые
            острова, вы расширяете свой виртуальный мир и открываете новые
            возможности для творчества и приключений. Чем больше уроков вы
            проходите, тем больше монет зарабатываете, что позволяет постепенно
            строить и развивать собственное королевство островов.
          </p>
        </div>
        <div class="topics-image fourth-order">
          <img src="/assets/features-islands2.png" alt="Topics" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { onMounted, onUnmounted, ref, markRaw } from "vue";

export default {
  name: "IslandsPage",
  data() {
    return {
      coins: 0,
      islandSpawned: false,
      scene: null,
      camera: null,
      renderer: null,
      animationId: null,
      islandModel: null,
    };
  },
  methods: {
    completeLesson() {
      if (this.coins < 10) {
        this.coins++;
      }
    },
    spawnIsland() {
      if (this.islandSpawned) return;
      this.islandSpawned = true;
      this.$nextTick(() => {
        this.initThreeJS();
        this.loadIsland();
      });
    },
    initThreeJS() {
      const container = this.$refs.sceneContainer;
      // Create a new scene; mark as raw to avoid Vue proxying
      this.scene = markRaw(new THREE.Scene());
      this.scene.background = new THREE.Color(0xf5f9ff);

      const aspect = container.clientWidth / container.clientHeight;
      // Using a perspective camera now (FOV 45°)
      this.camera = markRaw(new THREE.PerspectiveCamera(45, aspect, 0.1, 1000));
      // Position the camera closer
      this.camera.position.set(0, 2, 7);
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));

      this.renderer = markRaw(
        new THREE.WebGLRenderer({ antialias: true, alpha: true }),
      );
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.2;
      container.appendChild(this.renderer.domElement);

      // Add ambient and directional lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      this.scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(3, 5, 5);
      this.scene.add(directionalLight);

      this.animate();
      window.addEventListener("resize", this.onWindowResize);
    },
    animate() {
      this.animationId = requestAnimationFrame(() => this.animate());
      if (this.islandModel) {
        // Slow rotation around Y-axis
        this.islandModel.rotation.y += 0.002;
      }
      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
      const container = this.$refs.sceneContainer;
      const width = container.clientWidth;
      const height = container.clientHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    },
    loadIsland() {
      const loader = new GLTFLoader();
      loader.load(
        "/aspan_web/assets/islandTennis.glb",
        (gltf) => {
          // Mark the loaded island as raw to avoid proxying issues
          const island = markRaw(gltf.scene);
          // Adjust initial rotation so it faces the camera upright.
          // Often models need to be rotated around the X-axis to stand upright.
          island.rotation.set(-Math.PI / -6, 0.5, 0);
          island.position.set(0, -2, -10);
          island.scale.set(1.5, 1.5, 1.5);
          this.islandModel = island;
          this.scene.add(island);
        },
        undefined,
        (error) => {
          console.error("Error loading island model:", error);
        },
      );
    },
  },
  mounted() {
    // Initialization is deferred until the island is spawned.
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
    if (this.animationId) cancelAnimationFrame(this.animationId);
    if (this.renderer) this.renderer.dispose();
  },
};
</script>

<style scoped>
/* Shared Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* Islands Hero Section */
.islands-hero {
  position: relative;
  width: 100%;
  height: 80vh;
  background: #2b79ed url("/assets/islands-display.png") center center / cover
    no-repeat;
  background-size: 200%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-weight: bold;
}
.hero-overlay {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 20px;
}
.text-panel {
  padding: 20px 30px;
  background: #fff;
  border-radius: 8px;
  text-align: center;
}
.hero-title {
  font-size: 48px;
  margin-bottom: 10px;
  color: #1261d8;
}
.hero-subtitle {
  font-size: 24px;
  color: #1261d8;
}

/* Gamification Section */
.gamification-section {
  background-color: #f5f9ff;
  padding: 40px 20px;
}
.info-panel {
  flex: 1;
  text-align: left;
  padding-right: 20px;
}
.info-heading {
  font-size: 32px;
  color: #1261d8;
  margin-bottom: 10px;
  font-weight: bold;
}
.info-description {
  font-size: 18px;
  color: #526ea1;
  margin-bottom: 20px;
}
.coin-display h3 {
  font-size: 28px;
  color: #1261d8;
  margin-bottom: 20px;
  font-weight: bold;
}
.complete-lesson-btn,
.spawn-island-btn {
  background-color: #1261d8;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-right: 10px;
}
.complete-lesson-btn:hover,
.spawn-island-btn:hover {
  background-color: #0f4aa3;
}

/* Island Panel (Right Column) */
.island-panel {
  flex: 1;
  background-color: #f5f9ff;
  /* Remove slant to keep it centered */
}
.scene-container {
  width: 100%;
  height: 50vh;
  background: transparent;
  overflow: hidden;
}

/* Features */

.features-section {
  display: flex;
  justify-content: center;
  padding: 4rem 0;
  background: #ffffff;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  width: 90%;
}

.topics-image {
  width: 340px;
}

.topics-image img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-left: 40%;
}

.topics-text {
  padding: 1rem;
}

.classic-heading {
  font-size: 2.5rem;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  color: #1261d8;
  margin: 1.5rem auto;
  padding: 0 1rem;
}

.classic-description {
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Mobile Styles */
@media (max-width: 768px) {
  /* Stack container elements vertically */
  .container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
  }

  /* Hero Section: Slightly reduce height and font sizes */
  .islands-hero {
    height: 60vh;
    background-size: 350%; /* further zoom in if needed */
  }
  .hero-title {
    font-size: 36px;
  }
  .hero-subtitle {
    font-size: 18px;
  }
  .text-panel {
    padding: 15px 20px;
  }

  /* Gamification Section adjustments */
  .gamification-section {
    padding: 20px 10px;
  }
  .info-panel {
    text-align: center;
    padding-right: 0;
    margin-bottom: 20px;
  }
  .info-heading {
    font-size: 28px;
  }
  .info-description {
    font-size: 16px;
  }
  .coin-display h3 {
    font-size: 24px;
  }
  .complete-lesson-btn,
  .spawn-island-btn {
    font-size: 16px;
    padding: 10px 20px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  /* Island Panel adjustments */
  .island-panel {
    width: 100%;
    margin-top: 20px;
    /* Remove any transforms on mobile */
    transform: none;
  }
  .scene-container {
    width: 100%;
    height: 300px;
  }
  /* Features Section */
  .features-grid {
    display: flex;
    flex-direction: column;
  }

  .first-order {
    order: 1;
  }
  .second-order {
    order: 2;
  }
  .third-order {
    order: 4;
  }
  .fourth-order {
    order: 3;
  }
  .topics-image {
    width: 100%;
  }

  .topics-image img {
    margin-left: 0;
    padding-right: 2%;
  }

  .topics-text {
    padding: 0;
  }
}
</style>
