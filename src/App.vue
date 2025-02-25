<template>
   <IslandContainer />
   <Home />
   <Header />
   <Footer />
</template>

<script>
import Home from './components/Home.vue';
import IslandContainer from './components/IslandContainer.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'

export default {
   components: {
      Home,
      IslandContainer,
      Header,
      Footer,
   },
};
</script>

<style>
/* Global styles (if needed) */
</style>