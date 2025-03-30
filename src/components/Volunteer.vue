<template>
  <div>
    <!-- Volunteer Description Section -->
    <section class="volunteer-description-section">
      <div class="container">
        <div class="description-text">
          <h1>Стать волонтером</h1>
          <p>
            Мы всегда рады новым участникам! Если вы дизайнер, создатель уроков,
            специалист по SMM, программист или занимаетесь чем-то другим –
            присоединяйтесь к нам. Волонтеры работают под руководством наших
            ключевых участников и помогают создавать качественный контент и
            развивать приложение.
          </p>
        </div>
      </div>
    </section>

    <!-- Volunteer Form Section -->
    <section class="volunteer-form-section">
      <div class="container">
        <div class="volunteer-info">
          <h2>Присоединяйтесь к нам в ASpan!</h2>
          <p>
            Мы всегда рады новым волонтёрам, которые помогут нам сделать
            обучение ещё лучше. Если вы хотите внести свой вклад в развитие
            ASpan – заполните форму и станьте частью нашей дружной команды!
          </p>
        </div>
        <div class="form-container">
          <!-- Paste your Google Form iframe link here -->
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeQggJDlukXPuDo2jCwwgSavfEgSIPCmeTnLvE0ldWwLKmvjA/viewform?embedded=true"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            >Загрузка…</iframe
          >
        </div>
      </div>
    </section>

    <!-- Donation Section -->
    <section class="volunteer-donation-section">
      <div class="container donation-container">
        <div class="donation-image">
          <img src="/assets/credit-card.png" alt="Credit Card" />
        </div>
        <div class="donation-text">
          <h2>Поддержите нас финансово</h2>
          <p>
            Любая финансовая помощь очень важна для нас! Ваше пожертвование
            поможет создавать больше качественного контента и поддерживать
            работу приложения. Мы будем признательны за вашу поддержку!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "VolunteerPage",
};
</script>

<style scoped>
/* Shared container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Volunteer Description Section */
.volunteer-description-section {
  background-color: #f5f9ff; /* neutral light bluish */
  padding: 40px 20px;
  text-align: center;
}
.description-text h1 {
  font-size: 36px;
  font-weight: bold;
  color: #1261d8;
  margin-bottom: 20px;
}
.description-text p {
  font-size: 18px;
  color: #526ea1;
  line-height: 1.5;
}

/* Volunteer Form Section */
.volunteer-form-section {
  background-color: #ffffff;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-container {
  width: 100%;
  max-width: 800px;
  height: 600px; /* adjust as needed */
}
.form-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Volunteer Donation Section */
.volunteer-donation-section {
  background: linear-gradient(160deg, #e0efff, #f0faff);
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.donation-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.donation-image {
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.donation-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}
.donation-text {
  flex: 1;
  padding: 20px;
}
.donation-text h2 {
  font-size: 32px;
  color: #1261d8;
  margin-bottom: 20px;
}
.donation-text p {
  font-size: 18px;
  color: #526ea1;
  line-height: 1.5;
}

.volunteer-form-section {
  background-color: #ffffff;
  padding: 40px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.volunteer-info {
  flex: 2;
  min-width: 300px;
  padding: 20px;
}

.volunteer-info h2 {
  font-size: 32px;
  color: #1261d8;
  margin-bottom: 10px;
  font-weight: bold;
}

.volunteer-info p {
  font-size: 18px;
  color: #526ea1;
  line-height: 1.5;
}

.form-container {
  flex: 3;
  min-width: 300px;
  padding: 20px;
  max-height: 600px; /* Limit height if desired */
  overflow-y: auto; /* Enable vertical scrolling */
}

.form-container iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .volunteer-description-section {
    padding: 20px 10px;
  }
  .description-text h1 {
    font-size: 28px;
  }
  .description-text p {
    font-size: 16px;
  }
  .volunteer-form-section {
    padding: 20px 10px;
  }
  .volunteer-donation-section {
    padding: 20px 10px;
  }
  .donation-container {
    flex-direction: column;
  }
  .donation-text {
    padding: 20px 0;
    text-align: center;
  }
}
</style>
