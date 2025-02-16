<template>
   <header class="hero">
      <h1 class="hero-title">Build Knowledge<br>Island by Island</h1>
      <p class="hero-subtitle">Microlearning meets creative gamification</p>
      <button class="cta-button">Start Your Journey</button>
   </header>

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

.hero {
   position: relative;
   padding: 8rem 2rem;
   text-align: center;
   z-index: 1;
   height: 100vh;
   background: #1261D8;
}

.hero-title {
   font-size: 3.5rem;
   margin-bottom: 1.5rem;
   color: #ffffff;
   z-index: 3;
}

.hero-subtitle {
   font-size: 1.5rem;
   margin-bottom: 3rem;
   opacity: 0.9;
   color: #ffffff;
   z-index: 3;
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
   z-index: 3;
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

</style>