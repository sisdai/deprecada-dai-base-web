<template>
  <div id="app">
    <Header id="header" :class="{'show':showNav}" />
    <MainNav id="navigation" :class="{'show':showNav}" />
    <router-view />
    <A11yMenu />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/MainHeader.vue';
import MainNav from '@/components/MainNav.vue';
import A11yMenu from '@/components/A11yMenu.vue';
import Footer from '@/components/MainFooter.vue';

export default {
  name: 'App',
  components: {
    Header,
    MainNav,
    A11yMenu,
    Footer,
  },
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    onScroll() {
      if (window.pageYOffset < window.innerHeight) {
        this.showNav = false;
        if (this.$store.getters.isOpenGobNav) {
          this.$store.commit('closeGobNav');
        }
        if (this.$store.getters.isOpenMainNav) {
          this.$store.commit('closeMainNav');
        }
      } else {
        this.showNav = true;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style lang="scss">
@import '@/scss/app.scss';
#header {
  position: fixed;
  top: -50px;
  width: 100%;
  z-index: 9999;
  transition: top .2s ease-in-out;
  &.show {
    top: 0;
  }
}
#navigation {
  position: fixed;
  top: -50px;
  z-index: 9998;
  width: 100%;
  transition: top .2s ease-in-out;
  &.show {
    top: 50px;
  }
}
</style>
