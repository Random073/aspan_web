<template>
   <footer class="main-footer">
      <div class="social-links">
         <a href="https://www.instagram.com" target="_blank">
            <img src="/assets/instagram-icon.png" alt="Instagram">
         </a>
         <a href="https://www.whatsapp.com" target="_blank">
            <img src="/assets/whatsapp-icon.png" alt="WhatsApp">
         </a>
      </div>

      <ul class="footer-navigation">
         <li><a href="#">Home</a></li>
         <li><a href="#">Services</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Terms</a></li>
         <li><a href="#">Privacy Policy</a></li>
      </ul>
      <p class="footer-credit">ASpan © {{ currentYear }}</p>
   </footer>
</template>

<script>
export default {
   data() {
      return {
         currentYear: new Date().getFullYear()
      };
   }
};
</script>

<style scoped>

.main-footer {
  background: #f8f9fa;
  color: #333;
  padding: 40px 20px;
  text-align: center;
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
}

.footer-navigation li {
   display: inline;
   padding: 0 10px;
}

.footer-navigation a {
   color: inherit;
   text-decoration: none;
   opacity: 0.8;
   transition: opacity 0.3s;
}

.footer-navigation a:hover {
   opacity: 1;
}

.footer-credit {
   margin-top: 15px;
   font-size: 13px;
   color: #aaa;
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