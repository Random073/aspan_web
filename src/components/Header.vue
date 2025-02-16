<template>
   <header class="header">
      <div class="container">
         <h1 class="logo">ASpan</h1>

         <nav class="nav">
            <div class="nav-item">
               <button class="nav-button">Home</button>
               <div class="dropdown">
                  <a href="#" class="dropdown-item">Microlessons</a>
                  <a href="#" class="dropdown-item">Islands</a>
               </div>
            </div>
            <a href="#" class="nav-link">Volunteer</a>
            <a href="#" class="nav-link">Hackathon</a>
            <a href="#" class="nav-link">About Us</a>
         </nav>

         <button class="mobile-menu-button" @click="toggleMobileMenu">☰</button>
      </div>

      <div v-if="mobileMenuOpen" class="mobile-menu">
         <a href="#" class="mobile-menu-item">Home</a>
         <a href="#" class="mobile-menu-item">Microlessons</a>
         <a href="#" class="mobile-menu-item">Islands</a>
         <a href="#" class="mobile-menu-item">Volunteer</a>
         <a href="#" class="mobile-menu-item">Hackathon</a>
         <a href="#" class="mobile-menu-item">Our Team</a>
         <a href="#" class="mobile-menu-item">About Project</a>
      </div>
   </header>
</template>

<script>
import { ref } from 'vue';

export default {
   setup() {
      const mobileMenuOpen = ref(false);
      const toggleMobileMenu = () => {
         mobileMenuOpen.value = !mobileMenuOpen.value;
      };
      return {
         mobileMenuOpen,
         toggleMobileMenu
      };
   }
};
</script>

<style scoped>
.header {
   width: 100%;
   background: white;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   position: fixed;
   top: 0;
   left: 0;
   z-index: 50;
}

.container {
   max-width: 3000px;
   margin: 0 auto;
   padding: 0 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 80px;
}

.logo {
   font-size: 24px;
   font-weight: bold;
   color: #4064c6;
}

.nav {
   display: flex;
   align-items: center;
   gap: 20px;
   margin-right: 10;
}

.nav-link, .nav-button {
   font-weight: 600;
   color: #4064c6;
   text-decoration: none;
   padding: 10px;
   cursor: pointer;
   background: none;
   border: none;
}

.nav-button:hover, .nav-link:hover {
   color: #2563EB;
}

.nav-item {
   position: relative;
}

.dropdown {
   display: none;
   position: absolute;
   background: white;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   border-radius: 8px;
   width: 180px;
   margin-top: 8px;
}

.nav-item:hover .dropdown {
   display: block;
}

.dropdown-item {
   display: block;
   padding: 12px;
   color: #1E3A8A;
   text-decoration: none;
}

.dropdown-item:hover {
   background: #EFF6FF;
}

.mobile-menu-button {
   display: none;
   background: none;
   border: none;
   font-size: 24px;
   color: #1E3A8A;
   cursor: pointer;
}

.mobile-menu {
   display: none;
   background: white;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.mobile-menu-item {
   display: block;
   padding: 16px;
   color: #1E3A8A;
   text-decoration: none;
}

.mobile-menu-item:hover {
   background: #EFF6FF;
}

@media (max-width: 768px) {
   .nav {
      display: none;
   }
   .mobile-menu-button {
      display: block;
   }
   .mobile-menu {
      display: block;
   }
}
</style>
