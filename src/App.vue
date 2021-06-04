<template>
  <div id="app" :class="[scrollingNav ? 'scrollingNav': 'normalNav']">
    <Header class="header" :class="{'show':showNav}" />
    <MainNav class="navigation" :class="{'show':showNav}" />
    <router-view class="view" />
    <A11yMenu />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/base/MainHeader.vue';
import MainNav from '@/components/base/MainNav.vue';
import A11yMenu from '@/components/base/A11yMenu.vue';
import Footer from '@/components/base/MainFooter.vue';

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
      scrollingNav: true,
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
  updated() {
    console.log(this.$route.name);
    if (this.$route.name === 'Inicio') {
      this.scrollingNav = true;
    } else {
      this.scrollingNav = false;
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style lang="scss">
@import '@/scss/app.scss';
.scrollingNav {
  .header {
    position: fixed;
    top: -50px;
    width: 100%;
    z-index: 9999;
    transition: top .2s ease-in-out;
    &.show {
      top: 0;
    }
  }
  .navigation {
    position: fixed;
    top: -50px;
    z-index: 9998;
    width: 100%;
    transition: top .2s ease-in-out;
    &.show {
      top: 50px;
    }
  }
}
.normalNav {
  .header {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 9999;
    transition: top .2s ease-in-out;
    &.show {
      top: 0;
    }
  }
  .navigation {
    position: fixed;
    top: 50px;
    z-index: 9998;
    width: 100%;
    transition: top .2s ease-in-out;
    &.show {
      top: 50px;
    }
  }
  .view {
    padding-top: 50px;
  }
}
</style>
