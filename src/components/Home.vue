<template>
  <IslandContainer />
  <section class="blue-screen"></section>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Строй знания<br />Остров за Островом</h1>
      <p class="hero-subtitle">Проходи микроуроки в игровом формате</p>
      <button class="cta-button" @click="scrollToWidgets">
        Начни свой путь
      </button>
    </div>
  </section>

  <section class="problem-section">
    <div class="problem-container">
      <div class="problem-statement">
        <h2 class="classic-heading-centred">Нехватка обучения</h2>
        <p class="classic-description-centred">
          На сегодняшний день в стране не хватает 270,000 учебных мест и 5 тысяч
          учителей. В интернете нет полезнах и доступных материалов для изучения
          различных тем на казахском и русском языках.
        </p>
      </div>
      <div class="solution-statement">
        <h2 class="classic-heading-centred">Но есть ASpan</h2>
        <p class="classic-description-centred">
          ASpan это - приложение, которое предоставляет качественные материалы в
          интересном игровом формате. Наши микро-уроки были специально
          составленные учениками и учителями НИШа для максимально легкого и
          быстрого усвоения информации.
        </p>
      </div>
      <div class="problem-statement-image">
        <img
          src="/assets/problem-map.png"
          alt="Not enough schools in Kazakhstan"
        />
      </div>
      <div class="solution-statement-image">
        <img
          src="/assets/aspan-screen-gallery.png"
          alt="Gallery of panels of ASpan app"
        />
      </div>
    </div>
  </section>

  <section id="widgets-section" class="widgets-section">
    <div class="widget-container">
      <div class="widget square">
        <img src="/assets/lessons-square.png" alt="Уроки" />
      </div>
      <div class="widget square">
        <img src="/assets/quiz-square.png" alt="Квиз" />
      </div>
      <div class="widget square">
        <img src="/assets/categories-square.png" alt="Острова" />
      </div>
      <div class="widget rectangle-h">
        <img src="/assets/review-rectangleh.png" alt="Обзор" />
      </div>
      <div class="widget rectangle-v">
        <img src="/assets/hearts-rectanglev.png" alt="Сердца" />
      </div>
      <div class="widget square">
        <img src="/assets/streak-square.png" alt="Стрик" />
      </div>
      <div class="widget square">
        <img src="/assets/islands-square.png" alt="Длительность" />
      </div>
    </div>
  </section>

  <section class="features-section">
    <div class="features-grid">
      <div class="topics-image first-order">
        <img src="/assets/features-topics.png" alt="Topics" />
      </div>
      <div class="topics-text second-order">
        <h2 class="classic-heading">Куча различных тем</h2>
        <p class="classic-description">
          В нашем приложении представлено множество разнообразных тем, чтобы
          удовлетворить любые интересы пользователей. Здесь вы найдёте материалы
          о ЗОЖ, финансах, космосе, истории, биологии и искусстве. Каждая тема
          разработана с учётом современных тенденций и потребностей, чтобы вы
          могли получить актуальную и полезную информацию. Мы уверены, что
          каждый найдёт что-то интересное и полезное для себя.
        </p>
      </div>

      <div class="topics-text third-order">
        <h2 class="classic-heading">Уроки на каждую тему</h2>
        <p class="classic-description">
          На каждую тему у нас есть масса уроков, которые помогут разобраться во
          всём от начала до конца. Все уроки понятные и логичные, так что даже
          если ты только начинаешь, всё получится!
        </p>
      </div>
      <div class="topics-image fourth-order">
        <img src="/assets/features-lessons.png" alt="Topics" />
      </div>

      <div class="topics-image fifth-order">
        <img src="/assets/features-quiz.png" alt="Topics" />
      </div>
      <div class="topics-text sixth-order">
        <h2 class="classic-heading">Викторины на каждый урок</h2>
        <p class="classic-description">
          К каждому уроку у нас есть викторины и всякие интерактивные штуки,
          чтобы учёба была не скучной. Наши тесты и игры помогут проверить,
          насколько ты понял материал, и сделать процесс обучения реально
          интересным. Это отличный способ учиться, играя и узнавая новое!
        </p>
      </div>

      <div class="topics-text seventh-order">
        <h2 class="classic-heading">Зарабатывай и строй</h2>
        <p class="classic-description">
          В нашем приложении ты зарабатываешь валюту, проходя уроки и выполняя
          задания. Эти деньги можно тратить на покупку островов и других крутых
          бонусов, что делает обучение ещё более увлекательным и мотивирующим.
        </p>
      </div>
      <div class="topics-image eighth-order">
        <img src="/assets/features-islands.png" alt="Topics" />
      </div>
    </div>
  </section>
</template>

<script>
import IslandContainer from "./IslandContainer.vue";

export default {
  components: {
    IslandContainer,
  },
  methods: {
    scrollToWidgets() {
      const section = document.getElementById("widgets-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
/* Islands */
@font-face {
  font-family: "SF Pro Display";
  src: url("/assets/fonts/SFProDisplay-Bold.otf") format("opentype");
  font-weight: bold;
  font-style: normal;
}

.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100dvh; /* Use dynamic viewport height */
  padding: 2rem;
  text-align: center;
  z-index: 1;
  background: transparent;
  font-family:
    "SF Pro Display",
    -apple-system,
    BlinkMacSystemFont,
    "Helvetica Neue",
    Helvetica,
    Arial,
    sans-serif;
  font-weight: bold;
}

.hero-content {
  margin-bottom: 20vh;
  margin-top: 2vh;
  transform: translateY(-10%);
  width: 100%;
}

.blue-screen {
  position: fixed; /* Change from absolute to fixed */
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  z-index: -1;
  background: #2b79ed;
}

.hero-title {
  display: flex;
  justify-content: center;
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
  margin-left: 0;
  text-align: center;
}

.hero-subtitle {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  color: #ffffff;
}

.cta-button {
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #ffffff;
  border: none;
  border-radius: 30px;
  color: #1261d8;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.05) translateY(-3px);
  box-shadow: 0 10px 20px rgba(78, 205, 196, 0.3);
}

/* Problem */

.problem-section {
  display: flex;
  justify-content: center;
  padding: 4rem 0;
  background-color: #f6faff;
}

.problem-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(5vw, auto);
  gap: 4rem;
  width: 90%;
  max-width: 1200px;
  height: 100%;
  align-items: start;
  justify-items: center;
}

.problem-statement,
.solution-statement {
  width: 100%;
  max-width: 100%;
  max-width: 600px;
  padding: 0;
}

.classic-heading-centred {
  font-size: 2.5rem;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  color: #1261d8;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
  margin: auto;
}

.classic-description-centred {
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  margin-top: 15px;
}

.problem-statement-image,
.solution-statement-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.problem-statement-image img,
.solution-statement-image img {
  width: 100%;
  height: auto;
  max-width: 800px;
  object-fit: cover;
  border-radius: 10px;
}

/* Widgets */

.widgets-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  background: rgb(0, 36, 125);
  background: linear-gradient(
    1600deg,
    rgb(22, 58, 150) 0%,
    rgb(75, 137, 237) 26%,
    rgb(93, 150, 216) 94%
  );
}

.widget-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(10vw, auto);
  gap: 2rem;
  width: 90%;
  max-width: 1200px;
}

.widget {
  background: #ffffff;
  /* padding: 0.5vw; */
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.widget img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  object-position: center;
}

.square {
  aspect-ratio: 1 / 1;
}

.rectangle-h {
  aspect-ratio: 2 / 1;
  grid-column: span 2;
  width: 100%;
}

.rectangle-v {
  aspect-ratio: 1 / 2;
  grid-row: span 2;
  width: 100%;
  height: 100%;
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

@media (max-width: 768px) {
  /* Problem Section */
  .problem-container {
    display: flex;
    flex-direction: column;
  }

  .problem-statement {
    order: 1;
  }

  .problem-statement-image {
    order: 2;
  }

  .solution-statement {
    order: 3;
  }

  .solution-statement-image {
    order: 4;
  }

  /* Widgets Section */
  .widget-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .widget {
    width: 90%;
    max-width: 400px;
  }

  .square {
    height: auto;
    aspect-ratio: 1 / 1;
  }

  .rectangle-h {
    height: auto;
    aspect-ratio: 2 / 1;
  }

  .rectangle-v {
    height: auto;
    aspect-ratio: 1 / 2;
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
  .fifth-order {
    order: 5;
  }
  .sixth-order {
    order: 6;
  }
  .seventh-order {
    order: 8;
  }
  .eighth-order {
    order: 7;
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
