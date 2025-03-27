<template>
  <div class="learning-paths-container">
    <!-- Main heading and subtitle -->
    <h1 class="main-heading">Микроуроки</h1>
    <p class="main-subtitle">Выберите свой путь к знаниям</p>

    <!-- Космос Section -->
    <section class="path-section">
      <!-- Section header -->
      <div class="path-header">
        <div class="path-header-icon">
          <img :src="getImageUrl('space-icon.png')" alt="Space Icon" />
        </div>
        <div class="path-header-text">
          <h2 class="path-title">Космос</h2>
          <p class="path-subtitle">Изучайте тайны вселенной</p>
        </div>
      </div>
      <!-- Grey rectangular smooth area for lesson boxes -->
      <div class="path-items-container">
        <div class="path-items">
          <div
            v-for="(lesson, index) in spaceLessons"
            :key="index"
            class="path-item"
          >
            <img
              :src="getImageUrl(lesson.icon)"
              :alt="lesson.title"
              class="item-icon"
            />
            <p class="item-title">{{ lesson.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Налоги Section -->
    <section class="path-section">
      <div class="path-header">
        <div class="path-header-icon">
          <img :src="getImageUrl('finances-icon.png')" alt="Taxes Icon" />
        </div>
        <div class="path-header-text">
          <h2 class="path-title">Налоги</h2>
          <p class="path-subtitle">Откройте мир финансовых отношений</p>
        </div>
      </div>
      <div class="path-items-container">
        <div class="path-items">
          <div
            v-for="(lesson, index) in taxesLessons"
            :key="index"
            class="path-item"
          >
            <img
              :src="getImageUrl(lesson.icon)"
              :alt="lesson.title"
              class="item-icon"
            />
            <p class="item-title">{{ lesson.title }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LearningPaths",
  data() {
    return {
      // Lessons for "Космос"
      spaceLessons: [
        {
          title: "Солнечная система",
          icon: "solar-system.png",
        },
        {
          title: "Первые люди в космосе",
          icon: "first-people.png",
        },
        {
          title: "Марс",
          icon: "mars.png",
        },
      ],
      // Lessons for "Налоги"
      taxesLessons: [
        {
          title: "Зачем нам нужны налоги?",
          icon: "why-need-taxes.png",
        },
      ],
    };
  },
  methods: {
    getImageUrl(imageName) {
      return import.meta.env.BASE_URL + "assets/" + imageName;
    },
  },
};
</script>

<style scoped>
/* Container for the entire page */
.learning-paths-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  font-family: Arial, sans-serif;
  color: #333;
}

/* Main heading and subtitle */
.main-heading {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
}

.main-subtitle {
  font-size: 18px;
  margin-bottom: 40px;
  color: #666;
}

/* Each learning path section */
.path-section {
  margin-bottom: 40px;
}

/* Section header: icon and text */
.path-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.path-header-icon img {
  width: auto;
  max-width: 60px;
  height: 100px;
  object-fit: contain;
  margin-right: 16px;
}

.path-header-text {
  display: flex;
  flex-direction: column;
}

.path-title {
  font-size: 24px;
  margin: 0;
}

.path-subtitle {
  font-size: 16px;
  margin: 4px 0 0;
  color: #666;
}

/* Grey rectangular smooth area container */
.path-items-container {
  background-color: #f0f0f0;
  border-radius: 15px;
  padding: 20px;
  overflow-x: auto;
}

/* Horizontal scroll container for items */
.path-items {
  display: flex;
  gap: 16px;
}

/* Individual lesson/topic box */
.path-item {
  min-width: 200px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  flex-shrink: 0;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Image now fills the entire width of the box,
   a fixed height is used to crop the image, and object-fit ensures it covers the space */
.item-icon {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

/* Title of the lesson */
.item-title {
  font-size: 14px;
  font-weight: 600;
  color: #444;
  margin: 10px 0;
  padding: 0 5px;
}

@media (max-width: 768px) {
  .learning-paths-container {
    padding: 20px 20px;
  }

  /* Main headings */
  .main-heading {
    font-size: 24px;
    margin-bottom: 6px;
  }

  .main-subtitle {
    font-size: 16px;
    margin-bottom: 30px;
  }

  /* Section header adjustments */
  .path-header-icon img {
    max-width: 50px;
    height: 80px; /* Increased height for vertical images */
    object-fit: contain;
  }

  .path-title {
    font-size: 20px;
  }

  .path-subtitle {
    font-size: 14px;
  }

  /* Lessons container */
  .path-items-container {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 0; /* Remove rounded corners */
  }

  /* Lesson boxes */
  .path-item {
    max-width: 160px; /* Slightly smaller box */
    padding: 15px 10px;
  }

  .item-icon {
    height: 120px; /* Adjust image height */
    object-fit: cover;
  }

  .item-title {
    font-size: 15px;
    max-width: 160px;
    margin: 8px 0;
    white-space: normal;
    word-break: break-word;
  }
}
</style>
