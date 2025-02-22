<template>
   <section class="blue-screen"></section>
   <section class="hero">
      <h1 class="hero-title">Build Knowledge<br>Island by Island</h1>
      <p class="hero-subtitle">Microlearning meets creative gamification</p>
      <button class="cta-button">Start Your Journey</button>
   </section>

   <section class="features">
      <div class="feature-card">
         <h3>Earn Tokens</h3>
         <p>Complete lessons to collect credits and expand your island</p>
      </div>
      <div class="feature-card">
         <h3>Micro Lessons</h3>
         <p>Bite-sized courses in finance, tech, history and more</p>
      </div>
      <div class="feature-card">
         <h3>Build Islands</h3>
         <p>Use your earned credits to build new islands</p>
      </div>
   </section>
</template>

<script>
export default {

};
</script>

<style scoped>

.blue-screen {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   z-index: -1;
   background: #2b79ed;
}

.hero {
   position: relative;
   padding: 8rem 2rem;
   text-align: center;
   z-index: 1;
   height: 100vh;
   background: transparent;
}

.hero-title {
   font-size: 3.5rem;
   margin-bottom: 1.5rem;
   color: #ffffff;
}

.hero-subtitle {
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
   color: #1261D8;
   cursor: pointer;
   transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
   transform: scale(1.05) translateY(-3px);
   box-shadow: 0 10px 20px rgba(78, 205, 196, 0.3);
}

.features {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;
   padding: 4rem 2rem;
   position: relative;
   z-index: 1;
   background-color: white;
}

.feature-card {
   background: rgba(255, 255, 255, 0.9);
   padding: 2rem;
   border-radius: 20px;
   border: 1px solid #ddd;
   transition: transform 0.3s ease;
}

.feature-card:hover {
   transform: translateY(-10px);
}

@media (max-width: 768px) and (hover: none) and (pointer: coarse) {
   .hero {
      padding: calc(80px + env(safe-area-inset-top)) 2rem 2rem;
      min-height: calc(100vh - env(safe-area-inset-top));
   }

   .hero-title {
      font-size: 2.25rem;
      line-height: 1.2;
   }

   .hero-subtitle {
      font-size: 1.1rem;
      margin-bottom: 2.5rem;
   }

   .cta-button {
      width: 100%;
      max-width: 280px;
      padding: 1.1rem;
      font-size: 1.1rem;
   }

   .features {
      grid-template-columns: 1fr;
      padding: 3rem 1rem;
   }

   .feature-card {
      margin: 0 0.5rem;
      padding: 1.5rem;
   }
}

/* iOS-specific tweaks */
@supports (-webkit-touch-callout: none) {
   .hero {
      padding-top: calc(80px + constant(safe-area-inset-top));
      padding-top: calc(80px + env(safe-area-inset-top));
   }
   
   .cta-button {
      -webkit-tap-highlight-color: transparent;
   }
}

/* Preserve desktop hover states */
@media (hover: hover) {
   .cta-button:hover {
      transform: scale(1.05) translateY(-3px);
      box-shadow: 0 10px 20px rgba(78, 205, 196, 0.3);
   }
   
   .feature-card:hover {
      transform: translateY(-10px);
   }
}

</style>