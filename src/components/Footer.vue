<template>
  <footer class="main-footer">
    <div class="social-links">
      <a href="https://www.instagram.com/aspanapp/" target="_blank">
        <img src="/assets/instagram-icon.png" alt="Instagram" />
      </a>
      <a href="https://wa.me/77473889664" target="_blank">
        <img src="/assets/whatsapp-icon.png" alt="WhatsApp" />
      </a>
    </div>

    <ul class="footer-navigation">
      <li><RouterLink to="/" class="footer-element">Главная</RouterLink></li>
      <li>
        <RouterLink to="/about-us" class="footer-element">О нас</RouterLink>
      </li>
      <li>
        <RouterLink to="/terms-of-use" class="footer-element"
          >Условия использования</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/privacy-policy" class="footer-element"
          >Политика конфиденциальности</RouterLink
        >
      </li>
    </ul>
    <p class="footer-credit">ASpan © {{ currentYear }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.main-footer {
  background: #f8f9fa;
  color: #333;
  padding: 40px 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.site-footer {
  padding: 40px 0;
  background-color: #ffffff;
  color: #4b4c4d;
  text-align: center;
}

.social-links {
  margin-bottom: 25px;
}

.social-links a {
  display: inline-block;
  margin: 0 8px;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.social-links a:hover {
  opacity: 1;
}

.social-links img {
  width: 30px;
  height: 30px;
}

.footer-navigation {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
  line-height: 1.6;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.footer-navigation li {
  display: inline;
  padding: 0 10px;
}

.footer-element {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s;
  text-align: center;
}

.footer-element:hover {
  opacity: 1;
}

.footer-credit {
  margin-top: 15px;
  font-size: 13px;
  color: #aaa;
  text-align: center;
}

@media (max-width: 600px) {
  .social-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .social-links img {
    width: 30px;
    height: 30px;
  }

  .footer-navigation {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .footer-navigation li {
    display: block;
    padding: 5px 0;
  }

  .main-footer {
    padding: 30px 15px;
  }
}
</style>
