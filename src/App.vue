<template>
  <div id="app">
    <Header />
    <MainNav id="navbar-position" />
    <router-view id="view-position" />
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
};
</script>

<style lang="scss">
@import '@/scss/app.scss';

#navbar-position {
  position: fixed;
  top: 0;
  height: 66px;
  width: 100%;
  z-index: 9999;
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    position: sticky;
    top: 0px;
    z-index: 9999;
  }
}
#view-position {
  margin-top: 65px;
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    margin-top: 0;
  }
}
</style>
