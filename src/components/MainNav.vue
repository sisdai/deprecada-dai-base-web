<template>
  <div>
    <nav id="nav-mobile">
      <link-gob url="https://www.gob.mx/" parent="pn-mx">
        <img src="../assets/img/gobmx.svg" alt="Gobierno de México." width="124px" height="36px">
      </link-gob>
      <button id="nav-button" :class="{'show':hasMenu, 'open':isOpenMainNav}" @click="toggleMenu">
        <span class="nav-icon"></span>
      </button>
    </nav>
    <nav id="nav-main" :class="{'show':hasMenu, 'open':isOpenMainNav}" @click="toggleMenu">
      <router-link class="nm-link" to="/">Inicio1</router-link>
      <router-link class="nm-link" to="/">Inicio2</router-link>
      <router-link class="nm-link" to="/">Inicio3</router-link>
      <router-link class="nm-link" to="/">Inicio4</router-link>
      <router-link class="nm-link" to="/">Inicio1</router-link>
      <router-link class="nm-link" to="/">Inicio2</router-link>
      <router-link class="nm-link" to="/">Inicio3</router-link>
      <router-link class="nm-link" to="/">Inicio4</router-link>
      <router-link class="nm-link" to="/">Inicio1</router-link>
      <router-link class="nm-link" to="/">Inicio2</router-link>
      <router-link class="nm-link" to="/">Inicio3</router-link>
      <router-link class="nm-link" to="/">Inicio4</router-link>
      <router-link class="nm-link" to="/">Inicio1</router-link>
      <router-link class="nm-link" to="/">Inicio2</router-link>
      <router-link class="nm-link" to="/">Inicio3</router-link>
      <router-link class="nm-link" to="/">Inicio4</router-link>
    </nav>
  </div>
</template>

<script>
import LinkGob from '@/components/LinkGob.vue';

export default {
  name: 'MainNav',
  components: {
    LinkGob,
  },
  data() {
    return {
      hasMenu: true,
    };
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMainNav');
    },
  },
  computed: {
    isOpenMainNav() {
      return this.$store.getters.isOpenMainNav;
    },
  },
};
</script>

<style scoped lang="scss">
#nav-mobile {
  background: map-get($color-gob, "verde-obscuro");
  display: flex;
  justify-content: space-between;
  .nav-flex {
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    display: none;
  }
}
#nav-button {
  background: transparent;
  padding: 0 $gap;
  position: relative;
  display: none;
  &.show {
    display: inline-flex;
  }
  &.show.open {
    .nav-icon {
      width: 0;
      &::after {
        transform: translate3d(0,-5px,0) rotate(-135deg);
      }
      &::before {
        transform: translate3d(0,5px,0) rotate(135deg);
      }
    }
  }
  .nav-icon {
    width: 20px;
    height: 1px;
    display: block;
    background: #FFF;
    transition: all .3s ease-in-out;
    position: absolute;
    top: 30px;
    left: 20px;
    &::after,
    &::before {
      content: "";
      width: 20px;
      height: 1px;
      display: block;
      background: #FFF;
      position: absolute;
      transition: all .3s ease-in-out;
    }
    &::after {
      top: 5px;
    }
    &::before {
      top: -5px;
    }
  }
}
#nav-main {
  display: none;
  height: 0;
  &.show {
    background: map-get($color-gob, "verde-obscuro");
    display: block;
    height: 100vh;
    position: relative;
    overflow-y: scroll;
    right: -100vw;
    transition: right .2s ease-in-out;
  }
  &.show.open {
    right: 0;
  }
  .nm-link {
    border-radius: 0;
    color: #fff;
    display: block;
    padding: $gap*.5;
    word-break: normal;
  }
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    scrollbar-width: thin;
    &.show,
    &.show.open {
      background: map-get($color-gob, "verde");
      display: flex;
      height: auto;
      right: 0;
      flex-wrap: nowrap;
    }
    .nm-link {
      display: inline-flex;
      padding: $gap*.5 $gap;
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
}
</style>
