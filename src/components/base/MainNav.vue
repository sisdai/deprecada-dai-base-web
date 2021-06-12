<template>
  <nav v-if="hasMainNav" class="main-nav">
    <MainContainer class="flex">
      <div class="main-nav-top">
        <BtnNavMob @click.native="toggleMenu" :class="{'open':isOpenMainNav}" />
      </div>
      <div class="main-nav-menu" :class="{'open':isOpenMainNav}" @click="toggleMenu">
        <a class="main-nav-external-link" href="#" target="_blank" rel="noopener">
          Ir a ENI (nombre)
        </a>
        <router-link class="main-nav-link" to="/">Inicio</router-link>
        <router-link class="main-nav-link" to="/guia-estilos">Guia de estilos</router-link>
        <router-link class="main-nav-link" to="/ayuda">Ayuda</router-link>
      </div>
    </MainContainer>
  </nav>
</template>

<script>
import MainContainer from '@/components/base/MainContainer.vue';
import BtnNavMob from '@/components/base/BtnNavMob.vue';

export default {
  name: 'MainNav',
  components: {
    MainContainer,
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
  box-shadow: 0 0 10px rgba(0,0,0,.7);
}
.main-nav-top {
  background: map-get($color-gob, "verde");
  position: relative;
  margin-right: - ($gap);
  margin-left: - ($gap);
  z-index: 2;
  box-shadow: 0 0 20px rgba(0,0,0,.2);
}
.main-nav-menu {
  background: map-get($color-gob, "verde");
  border-top: 1px solid rgba(255,255,255,.2);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: absolute;
  top: -100vh;
  height: calc(100vh - 100px);
  height: calc((100 * var(--vh)) - 100px);
  width: 100%;
  margin-right: - ($gap);
  margin-left: - ($gap);
  transition: top .3s ease-in-out;
  z-index: 1;
  &.open {
    top: 50px;
  }
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    position: relative;
    flex-direction: row;
    height: auto;
    top: 0px;
    margin-right: - ($gap);
    margin-left: - ($gap);
    &.open {
      top: 0;
    }
    a:first-child {
      margin-left: $gap*.5;
    }
  }
}
.main-nav-external-link {
  font-size: map-get($fuente, "size-notas");
  text-transform: uppercase;
  display: flex;
  padding: $gap*.5;
  white-space: nowrap;
  color: map-get($color-gob, "dorado");
  &:hover {
      background: darken(map-get($color-gob, "verde"), 2%);
      color: map-get($color-gob, "beige");
    }
    &:focus {
      background: map-get($color-gob, "verde-obscuro");
      color: map-get($color-gob, "beige");
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
    // &:first-child {
    //   margin-left: auto;
    // }
    // &:last-child {
    //   margin-right: auto;
    // }
    &:hover {
      background: darken(map-get($color-gob, "verde"), 2%);
      color: map-get($color-gob, "beige");
    }
    &:focus {
      background: map-get($color-gob, "verde-obscuro");
      color: map-get($color-gob, "beige");
    }
  }
}
</style>
