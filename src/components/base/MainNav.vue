<template>
  <nav v-if="hasMainNav" class="main-nav">
    <div class="main-nav-top">
      <BtnNavMob @click.native="toggleMenu" :class="{'open':isOpenMainNav}" />
    </div>
    <div class="main-nav-menu" :class="{'open':isOpenMainNav}" @click="toggleMenu">
      <router-link class="main-nav-link" to="/">Inicio</router-link>
      <router-link class="main-nav-link" to="/">Menu uno</router-link>
      <router-link class="main-nav-link" to="/">Menu dos</router-link>
      <router-link class="main-nav-link" to="/">Menu tres</router-link>
      <router-link class="main-nav-link" to="/">Menu cuatro</router-link>
    </div>
  </nav>
</template>

<script>
import BtnNavMob from '@/components/base/BtnNavMob.vue';

export default {
  name: 'MainNav',
  components: {
    BtnNavMob,
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMainNav');
    },
  },
  computed: {
    hasMainNav() {
      return this.$store.getters.hasMainNav;
    },
    isOpenMainNav() {
      return this.$store.getters.isOpenMainNav;
    },
  },
};
</script>

<style scoped lang="scss">
.main-nav {
  background: map-get($color-gob, "verde");
  position: relative;
  // position: sticky;
  // top: 50px;
  // z-index: 9998;
}
.main-nav-top {
  background: map-get($color-gob, "verde");
  position: relative;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0,0,0,.2);
}
.main-nav-menu {
  background: map-get($color-gob, "verde");
  border-top: 1px solid rgba(255,255,255,.2);
  box-shadow: 0 0 10px rgba(0,0,0,.7);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: absolute;
  top: -100vh;
  height: calc(100vh - 100px);
  width: 100%;
  transition: top .3s ease-in-out;
  z-index: 1;
  &.open {
    top: 50px;
  }
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    flex-direction: row;
    height: auto;
    top: 0px;
    &.open {
      top: 0;
    }
  }
}
.main-nav-link {
  font-size: map-get($fuente, "size-secundario");
  border-radius: 0;
  color: #fff;
  display: flex;
  padding: $gap*.5;
  white-space: nowrap;
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    display: inline-flex;
    &:first-child {
      margin-left: auto;
    }
    &:last-child {
      margin-right: auto;
    }
    &:hover {
      background: darken(map-get($color-gob, "verde"), 2%);
      color: map-get($color-gob, "beige");
    }
    &:focus {
      background: map-get($color-gob, "verde");
      color: map-get($color-gob, "dorado");
    }
  }
}
</style>
