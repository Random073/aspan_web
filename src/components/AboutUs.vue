<template>
  <div>
    <!-- Mission Section -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-text">
          <h1 class="mission-heading">Наша миссия</h1>
          <p class="mission-description">
            Мы стремимся вдохновлять и развивать знания, делая обучение
            доступным и увлекательным для каждого. Наша цель – создавать
            пространство, где образование превращается в яркое приключение.
          </p>
        </div>
        <div class="mission-image">
          <img src="/assets/mission.png" alt="Mission Image" />
        </div>
      </div>
    </section>

    <!-- History Section -->
    <section class="history-section">
      <div class="container">
        <!-- Left column: Timeline image changes -->
        <transition name="slide-fade" mode="out-in">
          <div class="history-image" :key="'image-' + currentHistoryIndex">
            <img :src="currentHistory.image" alt="History Image" />
          </div>
        </transition>
        <!-- Right column: Timeline text changes with arrows -->
        <div class="history-text">
          <transition name="slide-fade" mode="out-in">
            <div :key="'text-' + currentHistoryIndex">
              <h2 class="history-date">{{ currentHistory.date }}</h2>
              <h3 class="history-subheading">{{ currentHistory.title }}</h3>
              <p class="history-description">
                {{ currentHistory.description }}
              </p>
            </div>
          </transition>
          <div class="arrows">
            <span
              class="arrow"
              @click="prevHistory"
              :class="{ disabled: currentHistoryIndex <= 0 }"
            >
              ↑
            </span>
            <span
              class="arrow"
              @click="nextHistory"
              :class="{ disabled: currentHistoryIndex >= history.length - 1 }"
            >
              ↓
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section (unchanged) -->
    <section class="team-section">
      <div class="container">
        <h2 class="section-heading">Наша команда</h2>
        <!-- Core Members -->
        <div class="team-category">
          <h3 class="category-heading">Основные участники</h3>
          <div class="team-grid">
            <div v-for="member in coreTeam" :key="member.id" class="team-card">
              <img :src="member.photo" :alt="member.name" class="team-photo" />
              <h4 class="team-name">{{ member.name }}</h4>
              <p class="team-role">{{ member.role }}</p>
            </div>
          </div>
        </div>
        <!-- Volunteers -->
        <div class="team-category">
          <h3 class="category-heading">Волонтеры</h3>
          <div class="team-grid">
            <div
              v-for="member in volunteers"
              :key="member.id"
              class="team-card"
            >
              <img :src="member.photo" :alt="member.name" class="team-photo" />
              <h4 class="team-name">{{ member.name }}</h4>
              <p class="team-role">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      // History events, each with an image property
      history: [
        {
          date: "12.2024",
          title: "Грант Тәуелсіздік Ұрпақтары на 3 миллиона тенге",
          description:
            "В декабре 2024 года, команда ASpan выиграла грант размером 3 миллиона тенге.",
          image: "assets/timeline/tauelsizdik.png",
        },
        {
          date: "01.2025",
          title: "2 место на Zhastar Forum",
          description:
            "В январе 2025 года, команда ASpan заняла 2 место на Zhastar Forum.",
          image: "assets/timeline/zhastar.png",
        },
        {
          date: "02.2025",
          title: "2 место на хакатоне RIS Prime",
          description:
            "В феврале 2025 года, команда ASpan заняла 2 место на RIS Prime.",
          image: "assets/timeline/risprime.png",
        },
      ],
      currentHistoryIndex: 0,
      // Core team members
      coreTeam: [
        {
          id: 1,
          name: "Шоманов Асанали",
          role: "CEO",
          photo: "assets/team/asanali.png",
        },
        {
          id: 2,
          name: "Толеев Нурхан",
          role: "CTO",
          photo: "assets/team/nurkhan.png",
        },
        {
          id: 3,
          name: "Медетбаев Саги",
          role: "COO",
          photo: "assets/team/sagi.png",
        },
        {
          id: 4,
          name: "Кан Бен",
          role: "CMO",
          photo: "assets/team/ben.png",
        },
        {
          id: 5,
          name: "Ермек Алимжан",
          role: "Дизайнер",
          photo: "assets/team/alimzhan.png",
        },
        {
          id: 6,
          name: "Исенов Нариман",
          role: "Дизайнер",
          photo: "assets/team/nariman.png",
        },
        {
          id: 7,
          name: "Мендыбай Тимур",
          role: "SMM",
          photo: "assets/team/timur.png",
        },
        {
          id: 8,
          name: "Баймурзина Нургуль",
          role: "SMM",
          photo: "assets/team/nurgul.png",
        },
        {
          id: 9,
          name: "Мирман Исатай",
          role: "Составитель уроков",
          photo: "assets/team/isatay.png",
        },
        {
          id: 10,
          name: "Саркулова Динара",
          role: "Составитель уроков",
          photo: "assets/team/dinara.png",
        },
        {
          id: 11,
          name: "Мухаммеджанова Аружан",
          role: "Составитель уроков",
          photo: "assets/team/aruzhan.png",
        },
        {
          id: 12,
          name: "Муссаева Аяжан",
          role: "Составитель уроков",
          photo: "assets/team/ayazhan.png",
        },
      ],
      // Volunteers
      volunteers: [],
    };
  },
  computed: {
    currentHistory() {
      return this.history[this.currentHistoryIndex];
    },
  },
  methods: {
    nextHistory() {
      if (this.currentHistoryIndex < this.history.length - 1) {
        this.currentHistoryIndex++;
      }
    },
    prevHistory() {
      if (this.currentHistoryIndex > 0) {
        this.currentHistoryIndex--;
      }
    },
  },
};
</script>

<style scoped>
/* Shared container styling */
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

/* Mission Section */
.mission-section {
  background-color: #f5f9ff;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}

.mission-text {
  flex: 1;
  padding-right: 20px;
}

.mission-heading {
  font-size: 36px;
  color: #1261d8;
  margin-bottom: 20px;
}

.mission-description {
  font-size: 18px;
  color: #526ea1;
  line-height: 1.5;
}

.mission-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mission-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

/* History Section */
.history-section {
  background: linear-gradient(160deg, #edf8ff, #d7e6ff);
  padding: 40px 20px;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.history-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.history-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.history-text {
  flex: 1;
  padding-left: 40px; /* extra space between image and text */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* History text details */
.history-date {
  font-size: 32px;
  color: #1261d8;
  margin-bottom: 10px;
}

.history-subheading {
  font-size: 24px;
  color: #1261d8;
  margin-bottom: 15px;
}

.history-description {
  font-size: 18px;
  color: #526ea1;
  line-height: 1.5;
  margin-bottom: 30px;
}

/* Arrows styling: placed on the right side of the text */
.arrows {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;
}

.arrow {
  font-size: 36px;
  color: #1261d8;
  cursor: pointer;
  transition: color 0.3s;
  user-select: none;
}

.arrow:hover:not(.disabled) {
  color: #0f4aa3;
}

.arrow.disabled {
  opacity: 0.5;
  cursor: default;
}

/* Slide-fade Transition (vertical) */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s ease;
}
.slide-fade-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* Team Section */
.team-section {
  background-color: #f7fcff;
  padding: 40px 20px;
}

.section-heading {
  width: 100%;
  font-size: 40px;
  color: #1261d8;
  text-align: left;
  margin-bottom: 30px;
  font-weight: bold;
}

.team-category {
  margin-bottom: 40px;
  width: 100%;
}

.category-heading {
  font-size: 28px;
  color: #2e71d6;
  margin-bottom: 20px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.team-card {
  background: #2263c6;
  padding: 20px;
  border-radius: 30px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.team-photo {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 30px;
  margin-bottom: 10px;
}

.team-name {
  font-size: 20px;
  color: #f4f8ff;
  margin-bottom: 5px;
}

.team-role {
  font-size: 16px;
  color: #e4e8f2;
}

@media (max-width: 768px) {
  /* Mission Section Mobile */
  .mission-section {
    padding: 20px 10px;
    flex-direction: column;
    min-height: auto;
  }
  .container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mission-text {
    padding-right: 0;
    text-align: center;
    margin-bottom: 20px;
  }
  .mission-image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mission-image img {
    max-width: 100%;
    height: auto;
  }

  /* Timeline History Section Mobile */
  .history-section {
    padding: 20px 10px;
    flex-direction: column;
    min-height: auto;
  }
  .history-image {
    width: 100%;
    margin-bottom: 20px;
  }
  .history-text {
    padding-left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .history-date {
    font-size: 28px;
    text-align: center;
  }
  .history-subheading {
    font-size: 20px;
    text-align: center;
  }
  .history-description {
    font-size: 16px;
    text-align: center;
    margin-bottom: 20px;
  }
  .arrows {
    flex-direction: row;
    justify-content: center;
    margin: 0;
    gap: 10px;
  }
  .arrow {
    font-size: 28px;
  }

  /* Team Section Mobile */
  .team-section {
    padding: 20px 10px;
  }
  .section-heading {
    font-size: 28px;
    margin-bottom: 20px;
    text-align: center;
  }
  .team-category {
    margin-bottom: 30px;
    width: 100%;
  }
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
  }
  .team-card {
    padding: 10px;
    text-align: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 30;
  }
  .team-photo {
    margin-bottom: 5px;
  }
  .team-name {
    font-size: 16px;
    margin-bottom: 2px;
  }
  .team-role {
    font-size: 14px;
  }
}
</style>
