<template>
   <Header />
   <main>
      <RouterView />
   </main>
   <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
   components: {
      Header,
      Footer,
   },
};
</script>

<style>
/* Global styles */
main {
  padding-top: 80px; /* Adjust for fixed header */
}
</style>