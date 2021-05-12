<template>
  <div id="app">
    <Header id="navbar-position" :class="{'show':showNav}" />
    <router-view />
    <A11yMenu />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/MainHeader.vue';
import A11yMenu from '@/components/A11yMenu.vue';
import Footer from '@/components/MainFooter.vue';

export default {
  name: 'App',
  components: {
    Header,
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
#navbar-position {
  position: fixed;
  top: -50px;
  width: 100%;
  z-index: 9999;
  transition: top .2s ease-in-out;
  &.show {
    top: 0;
  }
}
</style>
