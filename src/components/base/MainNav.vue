<template>
  <nav v-if="hasMainNav" class="main-nav">
    <MainContainer class="flex">
      <div class="main-nav-top">
        <BtnNavMob
          @click.native="toggleMenu"
          :class="{'open':isOpenMainNav}"
          aria-expanded="false"
          aria-controls="navegacion-principal"/>
      </div>
      <div
        aria-label="Navegación principal"
        id="navegacion-principal"
        class="main-nav-menu"
        :class="{'open':isOpenMainNav}"
        @click="toggleMenu">
        <a class="main-nav-external-link" :href="domain" target="_blank" rel="noopener">
          Ir a ENI {{obtenerNombreEni}}
        </a>
        <router-link class="main-nav-link" to="/">Inicio</router-link>
        <router-link class="main-nav-link" to="/guia-estilos">Guia de estilos</router-link>

        <div class="main-nav-submenu">
          <span class="main-nav-link">Elemento con submenu</span>
          <div class="submenu">
            <router-link class="main-nav-link" to="/ayuda">Link en el submenu</router-link>
            <router-link class="main-nav-link" to="/ayuda">Otro link con un texto larguisimo para probar que se pueda ir a varias lineas</router-link>
          </div>
        </div>

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
  data() {
    return {
      domain: process.env.VUE_APP_ENI_DOMAIN,
    };
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
    obtenerNombreEni() {
      return this.$store.getters.obtenerNombreEni;
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
  box-shadow: 0 0 40px rgba(0,0,0,.2);
  position: relative;
  margin-right: $gap * -1;
  margin-left: $gap * -1;
  z-index: 2;
}
.main-nav-menu {
  background: map-get($color-gob, "verde");
  overflow-y: auto;
  position: absolute;
  top: -100vh;
  height: calc((100 * var(--vh)) - 100px);
  width: 100%;
  margin-right: $gap * -1;
  margin-left: $gap * -1;
  transition: top .3s ease-in-out;
  z-index: 1;
  &.open {
    top: 50px;
  }
}
.submenu {
  background: map-get($color-gob, "verde-claro");
  border-radius: 5px;
  margin: 0 $gap*.5 $gap*.5;
}
.main-nav-external-link {
  font-size: map-get($fuente, "size-notas");
  color: map-get($color-gob, "dorado");
  text-transform: uppercase;
  display: block;
  padding: $gap*.5;
}
.main-nav-link {
  font-size: map-get($fuente, "size-secundario");
  color: #fff;
  display: block;
  padding: $gap*.5;
}
.main-nav-external-link,
.main-nav-link {
  border-radius: 0;
  display: block;
  padding: $gap*.5;
  line-height: 20px;
  &:active,
  &:focus,
  &:hover {
    background: darken(map-get($color-gob, "verde"), 2%);
    color: map-get($color-gob, "beige");
  }
}

@media (min-width: map-get($media-queries-limit, "navegacion")) {
  .main-nav-menu {
    position: relative;
    overflow: inherit;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: inherit;
    top: 0;
    margin-right: $gap * -.5;
    margin-left: $gap * -.5;
    &.open {
      top: 0;
    }
  }
  .main-nav-external-link,
  .main-nav-link {
    display: inline-block;
    white-space: nowrap;
  }
  
  .main-nav-submenu {
    position: relative;
    .submenu {
      margin: -5px 0 0;
      opacity: 0;
      position: absolute;
      pointer-events: none;
      transition: all .27s ease-in-out;
      .main-nav-external-link,
      .main-nav-link {
        background: transparent;
        border-bottom: 1px solid transparent;
        margin: 0 $gap*.5;
        padding-left: 0;
        padding-right: 0;
        display: block;
        white-space: inherit;
        &:active,
        &:focus,
        &:hover {
          background: transparent;
          border-bottom: 1px solid map-get($color-gob, "beige");
          color: map-get($color-gob, "beige");
        }
      }
    }
    &:hover,
    &:focus,
    &:focus-within,
    &:active {
      .submenu {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
}
</style>
