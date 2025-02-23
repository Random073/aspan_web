<template>
   <header class="header">
      <div class="container">
         <a href="#" class="logo">ASpan</a>
         <nav class="nav">
            <a href="#" class="nav-link">Microlessons</a>
            <a href="#" class="nav-link">Islands</a>
            <a href="#" class="nav-link">Volunteer</a>
            <a href="#" class="nav-link">Hackathon</a>
            <a href="#" class="nav-link">About Us</a>
         </nav>
         <button class="mobile-menu-button" @click="toggleMobileMenu">☰</button>
      </div>

      <transition name="mobile-menu">
         <div v-if="mobileMenuOpen" class="mobile-menu">
            <button class="close-button" @click="toggleMobileMenu">×</button>
            <div class="mobile-menu-content">
               <a href="#" class="mobile-menu-item">Microlessons</a>
               <a href="#" class="mobile-menu-item">Islands</a>
               <a href="#" class="mobile-menu-item">Volunteer</a>
               <a href="#" class="mobile-menu-item">Hackathon</a>
               <a href="#" class="mobile-menu-item">About Us</a>
            </div>
         </div>
      </transition>
   </header>
</template>

<script>
import { ref, watch, onMounted, onUnmounted } from 'vue';

export default {
   setup() {
      const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      
      const mobileMenuOpen = ref(false);
      const isMobile = ref(
        (window.innerWidth <= 768 || isIOS) && isTouchDevice
      );

      const checkMobile = () => {
        isMobile.value = (window.innerWidth <= 768 || isIOS) && isTouchDevice;
      };

      onMounted(() => {
        window.addEventListener('resize', checkMobile);
        window.addEventListener('orientationchange', checkMobile);
      });

      onUnmounted(() => {
        window.removeEventListener('resize', checkMobile);
        window.removeEventListener('orientationchange', checkMobile);
      });

      const toggleMobileMenu = () => {
         mobileMenuOpen.value = !mobileMenuOpen.value;
      };

      watch(mobileMenuOpen, (newVal) => {
         if (newVal) {
            document.body.classList.add('no-scroll');
         } else {
            document.body.classList.remove('no-scroll');
         }
      });

      return { mobileMenuOpen, toggleMobileMenu };
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
   pointer-events: all;
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
   color: #5889f1;
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
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background: white;
   z-index: 1000;
   display: flex;
   flex-direction: column;
   align-items: left;
   padding: 2rem;
}

.close-button {
   align-self: flex-end;
   background: none;
   border: none;
   font-size: 2.5rem;
   color: #4064c6;
   cursor: pointer;
   margin-bottom: 2rem;
}

.mobile-menu-content {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;
   flex: 1;
   justify-content: top;
}

.mobile-menu-item {
   font-size: 2rem;
   font-weight: bold;
   color: #334c91;
   text-decoration: none;
   transition: color 0.3s ease;
}

.mobile-menu-item:hover {
   color: #5889f1;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
   transition: opacity 0.3s, transform 0.3s;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
   opacity: 0;
   transform: translateY(-20px);
}
@supports (-webkit-touch-callout: none) {
  .header {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
  }
  
  .mobile-menu {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}

@media (max-width: 768px), (hover: none) and (pointer: coarse) {
  .nav {
    display: none;
  }
  .mobile-menu-button {
    display: block;
  }
}
</style>