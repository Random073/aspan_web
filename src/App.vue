<template>
   <IslandContainer />
   <Home />
   <Header />
</template>

<script>
import Home from './components/Home.vue';
import IslandContainer from './components/IslandContainer.vue';
import Header from './components/Header.vue';

export default {
   components: {
      Home,
      IslandContainer,
      Header,
   },
};
</script>

<style>
/* Global styles (if needed) */
</style>