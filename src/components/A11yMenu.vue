<template>
  <div class="a11y-container" :class="{'show':hasA11yMenu}">
    <button class="a11y-toggle" :class="{'open':isOpenA11yMenu}" @click="toggleA11yMenu">
      <img alt="Herramientas de Accesibilidad" src="../assets/img/a11y-icono.png">
    </button>
    <div class="a11y-menu" :class="{'open':isOpenA11yMenu}" @click="toggleA11yMenu">
      <p class="a11y-title">Herramientas de accesibilidad</p>
      <button class="a11y-opt" type="button">
        <span class="icon"><img src="../assets/img/a11y-contraste.png" alt=""></span>
        <span class="text">Alto contraste</span>
      </button>
      <button class="a11y-opt" type="button">
        <span class="icon"><img src="../assets/img/a11y-texto.png" alt=""></span>
        <span class="text">Crecer texto</span>
      </button>
      <button class="a11y-opt" type="button">
        <span class="icon"><img src="../assets/img/a11y-texturas.png" alt=""></span>
        <span class="text">Texturas en visualizaciones</span>
      </button>
      <button class="a11y-opt" type="button">
        <span class="icon"><img src="../assets/img/a11y-simplificada.png" alt=""></span>
        <span class="text">Vista simplificada</span>
      </button>
      <button class="a11y-opt" type="button">
        <span class="icon"><img src="../assets/img/a11y-enlaces.png" alt=""></span>
        <span class="text">Enlaces subrayados</span>
      </button>
      <button class="a11y-opt" type="button">
        <span class="icon"><img src="../assets/img/a11y-restablecer.png" alt=""></span>
        <span class="text">Restablecer</span>
      </button>
      <router-link class="a11y-opt" to="/ayuda">
        <span class="icon"><img src="../assets/img/a11y-ayuda.png" alt=""></span>
        <span class="text">Ayuda</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'A11yMenu',
  computed: {
    hasA11yMenu() {
      return this.$store.getters.hasA11yMenu;
    },
    isOpenA11yMenu() {
      return this.$store.getters.isOpenA11yMenu;
    },
  },
  methods: {
    toggleA11yMenu() {
      this.$store.commit('toggleA11yMenu');
    },
  },
};
</script>

<style scoped lang="scss">
.a11y-container {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999;
  display: none;
  &.show {
    display: block;
  }
}
.a11y-toggle {
  background: transparent;
  display: block;
  height: 50px;
  width: 50px;
  margin: $gap*.5;
  padding: 0;
  @media (min-width: map-get($media-queries-limit, "mobile")) {
    margin: $gap;
  }
  &.open {
    margin: -25px;
    @media (min-width: map-get($media-queries-limit, "mobile")) {
      margin: -25px;
    }
  }
}
.a11y-menu {
  background: #eee;
  overflow: hidden;
  max-height: 0;
  width: 0;
  transition: width .27s ease-in, max-height .2s ease-in .1s;
  &.open {
    width: 290px;
    max-height: 500px;
  }
  .a11y-title {
    font-size: map-get($fuente, "size-alto");
    border-bottom: 1px solid #141414;
    padding: 5px 0;
    width: 210px;
    margin: 0 40px 10px;
    text-align: left;
  }
  .a11y-opt {
    font-size: map-get($fuente, "size-primario");
    background: transparent;
    color: #141414;
    align-items: center;
    padding: 5px 40px;
    margin: 0;
    text-align: left;
    .icon {
      display: block;
      width: 70px;
    }
    .text {
      display: block;
      width: 140px;
    }
  }
}
</style>
