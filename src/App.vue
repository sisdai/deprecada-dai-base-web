<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/MainHeader.vue';
import Footer from '@/components/MainFooter.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import '@/scss/app.scss';
</style>
