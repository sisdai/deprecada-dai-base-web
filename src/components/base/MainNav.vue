<template>
  <nav v-if="hasMainNav" class="main-nav">
    <MainContainer class="flex">
      <div class="main-nav-top">
        <div class="main-nav-current">
          Seccion: {{currentRouteName}}
        </div>
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

        <div class="main-nav-menu-seccion">
          <a class="main-nav-external-link" :href="domain" target="_blank" rel="noopener">
            Ir a ENI {{obtenerNombreEni}}
          </a>
          <div class="main-nav-submenu">
            <span class="main-nav-link">Submenu</span>
            <div class="submenu">
              <router-link class="main-nav-link nowrap" to="/guia-estilos">Link en el submenu</router-link>
              <router-link class="main-nav-link" to="/guia-estilos">Otro link con un texto larguisimo para probar que se pueda ir a varias lineas</router-link>
            </div>
          </div>
        </div>
        
        <div class="main-nav-menu-seccion">
          <router-link class="main-nav-link" to="/" exact>Inicio</router-link>
          <router-link class="main-nav-link" to="/guia-estilos">Guia de estilos</router-link>

          <div class="main-nav-submenu">
            <span class="main-nav-link">Submenu</span>
            <div class="submenu">
              <router-link class="main-nav-link nowrap" to="/ayuda">Link en el submenu</router-link>
              <router-link class="main-nav-link" to="/ayuda">Otro link con un texto larguisimo para probar que se pueda ir a varias lineas</router-link>
            </div>
          </div>

          <router-link class="main-nav-link" to="/ayuda">Ayuda</router-link>
        </div>
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
    currentRouteName() {
      return this.$route.name;
    }
  },
};
</script>

<style scoped lang="scss">
.main-nav {
  background: map-get($color-nav, "fondo");
  box-shadow: 0 0 5px rgba(0,0,0,.5);
}
.main-nav-top {
  background: map-get($color-nav, "fondo");
  box-shadow: 0 0 40px rgba(0,0,0,.2);
  position: relative;
  margin-right: $gap * -1;
  margin-left: $gap * -1;
  z-index: 3;
  display: flex;
  align-items: center;
}
.main-nav-current {
  flex: 1;
  font-size: map-get($fuente, "size-secundario");
  color: map-get($color-nav, "texto");
  padding-left: $gap * .5;
  padding-right: $gap * .5;
}
.main-nav-menu {
  background: map-get($color-nav, "fondo");
  border-top: 1px solid map-get($color-nav, "borde");
  overflow-y: auto;
  position: absolute;
  top: -100vh;
  height: calc((100 * var(--vh)) - 50px);
  width: 100%;
  margin-right: $gap * -1;
  margin-left: $gap * -1;
  transition: top .3s ease-in-out;
  z-index: 2;
  &.open {
    top: 50px;
  }
}
.submenu {
  .main-nav-external-link,
  .main-nav-link {
    padding-left: $gap * 1.5;
  }
}
.main-nav-external-link {
  font-size: map-get($fuente, "size-notas");
  color: map-get($color-nav, "texto");
  text-transform: uppercase;
  display: block;
  padding: $gap*.5;
  font-weight: bold;
}
.main-nav-link {
  font-size: map-get($fuente, "size-secundario");
  color: map-get($color-nav, "texto");
  display: block;
  padding: $gap*.5;
}
.main-nav-external-link,
.main-nav-link {
  border-radius: 0;
  display: block;
  padding: $gap*.5;
  line-height: 20px;
  &.router-link-active,
  &:active,
  &:focus,
  &:hover {
    background: map-get($color-nav, "fondo-hover");
    color: map-get($color-nav, "texto-hover");
  }
}

@media (min-width: map-get($media-queries-limit, "navegacion")) {
  .main-nav-menu {
    border-top: none;
    position: relative;
    overflow: inherit;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: inherit;
    top: 0;
    width: calc(100% + $gap);
    margin-left: $gap * -.5;
    margin-right: $gap * -.5;
    &.open {
      top: 0;
    }
    .main-nav-menu-seccion {
      display: flex;
    }
  }
  .main-nav-external-link,
  .main-nav-link {
    display: inline-block;
    white-space: nowrap;
  }
  .main-nav-top {
    display: none;
  }
  .main-nav-submenu {
    position: relative;
    .submenu {
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0,0,0,.5);
      overflow: hidden;
      margin: -5px 0 0;
      opacity: 0;
      position: absolute;
      pointer-events: none;
      transition: all .27s ease-in-out;
      .main-nav-external-link,
      .main-nav-link {
        background: map-get($color-nav, "fondo");
        color: map-get($color-nav, "texco");
        padding: $gap*.5;
        display: block;
        white-space: inherit;
        .nowrap,
        &.nowrap {
          white-space: nowrap;
        }
        &:active,
        &:focus,
        &:hover {
          background: map-get($color-nav, "fondo-hover");
          color: map-get($color-nav, "texco-hover");
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
