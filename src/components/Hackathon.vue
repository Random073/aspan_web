<template>
  <div class="hackathon-page">
    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="container">
        <h1 class="hackathon-title">AU Project Competition 2025</h1>
        <p class="hackathon-slogan">
          Хакатон который развивает реальный навыки
        </p>
      </div>
    </section>

    <!-- What You'll Do Section -->
    <section class="what-youll-do">
      <div class="container">
        <div class="left-content">
          <h2>Что ты будешь строить?</h2>
          <p>
            В этом проектном соревновании ваша задача — предложить инновационную
            идею в одной из трёх категорий: стартапы, социальные проекты или
            STEM-решения. Участникам необходимо подробно описать концепцию:
            сформировать дорожную карту развития, обосновать практическую
            реализуемость и представить поэтапный план внедрения. Прототипing не
            является обязательным, но его наличие существенно повысит шансы на
            победу — он продемонстрирует вашу идею в действии и покажет глубину
            проработки. Удачи и вдохновения!
          </p>
        </div>
        <div class="right-content">
          <div class="task-panels">
            <div class="task-panel">Веб-разработка</div>
            <div class="task-panel">Мобильные приложения</div>
            <div class="task-panel">ИИ решения</div>
            <div class="task-panel">STEM проекты</div>
            <div class="task-panel">Стартапы</div>
            <div class="task-panel">Разработка игр</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prize Banner -->
    <section class="prize-banner">
      <div class="container">
        <h2 class="total-prize">₸700,000</h2>
        <div class="prize-breakdown">
          <p>1-ое место: ₸250,000</p>
          <p>2-ое место: ₸150,000</p>
          <p>3-ое место: ₸100,000</p>
          <p>
            <strong>Всем участникам 10% скидка на курсы от STEP Academy</strong>
          </p>
        </div>
      </div>
    </section>

    <!-- Eligibility Section -->
    <section class="eligibility">
      <div class="container">
        <div class="left-content">
          <h2>Кто может участвовать?</h2>
          <p>
            Мы приглашаем участвовать на хактоне всех школьников от 14 до 19
            лет, кто хотят получить опыт в разработке проектов, которые решают
            реальные проблемы. Собирайся в командах до 5 человек и
            регистрируйся!
          </p>
          <a
            class="register-btn"
            href="https://docs.google.com/forms/u/1/d/1mxc61UXPUslJnmxHmAihULQrqG60XyZHUz9Sa9QWI0E"
            target="_blank"
            rel="noopener"
          >
            Регистрация
          </a>
        </div>
        <div class="right-content">
          <img
            src="/assets/mission.png"
            alt="Hackathon Participants"
            class="eligibility-image"
          />
        </div>
      </div>
    </section>

    <!-- Sponsors Section -->
    <section class="sponsors">
      <div class="container">
        <h2>Наши спонсоры</h2>
        <div class="sponsors-grid">
          <div class="sponsor-card">
            <img src="/assets/stepacademy.jpg" alt="Sponsor 1" />
          </div>
          <div class="sponsor-card">
            <img src="/assets/impact.jpg" alt="Sponsor 2" />
          </div>
          <div class="sponsor-card">
            <img src="/assets/ministryofculture.jpg" alt="Sponsor 3" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Hackathon",
};
</script>

<style scoped>
.hackathon-page {
  font-family: "Inter", sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Banner */
.hero-banner {
  background: linear-gradient(135deg, #1a73e8, #0d47a1);
  color: white;
  padding: 200px 0;
  text-align: center;
}

.hackathon-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.hackathon-slogan {
  font-size: 1.5rem;
  opacity: 0.9;
}

/* What You'll Do Section */
.what-youll-do {
  padding: 80px 0;
}

.what-youll-do .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.left-content h2 {
  font-size: 2.5rem;
  color: #1a73e8;
  margin-bottom: 20px;
}

.left-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
}

.task-panels {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.task-panel {
  background: #f5f9ff;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a73e8;
  transition: transform 0.3s ease;
}

.task-panel:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(26, 115, 232, 0.1);
}

/* Prize Banner */
.prize-banner {
  background: linear-gradient(135deg, #0d47a1, #1a73e8);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.total-prize {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.prize-breakdown {
  font-size: 1.2rem;
  opacity: 0.9;
}

.prize-breakdown p {
  margin: 10px 0;
}

/* Eligibility Section */
.eligibility {
  padding: 80px 0;
  background: #f5f9ff;
}

.eligibility .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.eligibility h2 {
  font-size: 2.5rem;
  color: #1a73e8;
  margin-bottom: 20px;
}

.eligibility p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 30px;
}

.register-btn {
  background: #1a73e8;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.register-btn:hover {
  background: #0d47a1;
}

.eligibility-image {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Sponsors Section */
.sponsors {
  padding: 80px 0;
}

.sponsors h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #1a73e8;
  margin-bottom: 40px;
}

.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.sponsor-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sponsor-card img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .what-youll-do .container,
  .eligibility .container {
    grid-template-columns: 1fr;
  }

  .task-panels {
    grid-template-columns: 1fr;
  }

  .sponsors-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hackathon-title {
    font-size: 3rem;
  }
}
</style>
