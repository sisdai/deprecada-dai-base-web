<template>
  <div id="app">
    <Header :class="{'main':!hasMainNav, 'show':showNav}" />
    <MainNav id="navbar-position" :class="{'show':showNav}" />
    <router-view id="view-position" :class="{'margin-nav':showNav}" />
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
  computed: {
    hasMainNav() {
      return this.$store.getters.hasMainNav;
    },
    hasA11yMenu() {
      return this.$store.getters.hasA11yMenu;
    },
  },
  methods: {
    onScroll() {
      if (this.$route.name === 'Inicio') {
        if (window.pageYOffset < window.innerHeight) {
          this.showNav = false;
        } else {
          this.showNav = true;
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
#header-mx {
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    &.main {
      position: fixed;
      left: 0;
      right: 0;
      top: -66px;
      transition: top .2s ease-in-out;
    }
    &.main.show {
      top: 0;
    }
  }
}
#navbar-position {
  position: fixed;
  top: -66px;
  height: 66px;
  width: 100%;
  z-index: 9999;
  transition: top .2s ease-in-out;
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    position: sticky;
    top: 0;
    height: auto;
    z-index: 9999;
  }
  &.show {
    top: 0;
  }
}
#view-position {
  &.margin-nav {
    margin-top: 65px;
    @media (min-width: map-get($media-queries-limit, "navegacion")) {
      margin-top: 0;
    }
  }
}

</style>
