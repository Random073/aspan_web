<template>
   <section class="blue-screen"></section>
   <section class="hero">
      <h1 class="hero-title">Build Knowledge<br>Island by Island</h1>
      <p class="hero-subtitle">Microlearning meets creative gamification</p>
      <button class="cta-button">Start Your Journey</button>
   </section>

   <section class="problem-section">
      <div class="problem-container">
         <div class="problem-statement">
            <h2 class="classic-heading-centred">Lack of education</h2>
            <p class="classic-description-centred">There is lack of education, genuinely.</p>
         </div>
         <div class="solution-statement">
            <h2 class="classic-heading-centred">Enter ASpan</h2>
            <p class="classic-description-centred">You ain't seen nothing yet...</p>
         </div>
         <div class="problem-statement-image">
            <img src="/assets/problem-map.png" alt="Not enough schools in Kazakhstan">
         </div>
         <div class="solution-statement-image">
            <img src="/assets/aspan-screen-gallery.png" alt="Gallery of panels of ASpan app">
         </div>
      </div>
   </section>

   <section class="widgets-section">
      <div class="widget-container">
         <div class="widget square"></div>
         <div class="widget square"></div>
         <div class="widget square"></div>
         <div class="widget rectangle-h"></div>
         <div class="widget rectangle-v"></div>
         <div class="widget square"></div>
         <div class="widget square"></div>
      </div>
   </section>

   <section class="features-section">
      <div class="features-grid">
         <div class="topics-image first-order">
            <img src="/assets/features-screen.png" alt="Topics">
         </div>
         <div class="topics-text second-order">
            <h2 class="classic-heading">Hundreds of Topics</h2>
            <p class="classic-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facere incidunt, repellat dolorem nobis sapiente velit! Officiis culpa, maiores ipsa, dolore eligendi reiciendis praesentium nam ex excepturi minima vel quidem!</p>
         </div>

         <div class="topics-text third-order">
            <h2 class="classic-heading">Hundreds of Topics</h2>
            <p class="classic-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facere incidunt, repellat dolorem nobis sapiente velit! Officiis culpa, maiores ipsa, dolore eligendi reiciendis praesentium nam ex excepturi minima vel quidem!</p>
         </div>
         <div class="topics-image fourth-order">
            <img src="/assets/features-screen.png" alt="Topics">
         </div>

         <div class="topics-image fifth-order">
            <img src="/assets/features-screen.png" alt="Topics">
         </div>
         <div class="topics-text sixth-order">
            <h2 class="classic-heading">Hundreds of Topics</h2>
            <p class="classic-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facere incidunt, repellat dolorem nobis sapiente velit! Officiis culpa, maiores ipsa, dolore eligendi reiciendis praesentium nam ex excepturi minima vel quidem!</p>
         </div>

         <div class="topics-text seventh-order ">
            <h2 class="classic-heading">Hundreds of Topics</h2>
            <p class="classic-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facere incidunt, repellat dolorem nobis sapiente velit! Officiis culpa, maiores ipsa, dolore eligendi reiciendis praesentium nam ex excepturi minima vel quidem!</p>
         </div>
         <div class="topics-image eighth-order">
            <img src="/assets/features-screen.png" alt="Topics">
         </div>
      </div>
   </section>
</template>

<script>
export default {

};
</script>

<style scoped>

/* Islands */

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
}

.classic-heading-centred {
   font-size: 2.5rem;
   font-family: Helvetica, sans-serif;
   font-weight: bold;
   color: #1261D8;
   margin-bottom: 1rem;
   text-align: center;
}

.classic-description-centred {
   font-size: 1.2rem;
   color: #333;
   text-align: center;
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
   background: rgb(0,36,125);
   background: linear-gradient(1600deg, rgba(0,36,125,1) 0%, rgba(25,98,216,1) 26%, rgba(64,152,255,1) 94%); 
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
   padding: 2vw;
   border-radius: 20px;
   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.one {
   grid-column: 2;
   grid-row: 1;
}

.two {
   grid-column: 2;
   grid-row: 2;
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
   color: #1261D8;
   margin-bottom: 1rem;
}

.classic-description {
   font-size: 1.2rem;
   color: #333;
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

   .first-order {order: 1;}
   .second-order {order: 2;}
   .third-order {order: 4;}
   .fourth-order {order: 3;}
   .fifth-order {order: 5;}
   .sixth-order {order: 6;}
   .seventh-order {order: 8;}
   .eighth-order {order: 7;}
   
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