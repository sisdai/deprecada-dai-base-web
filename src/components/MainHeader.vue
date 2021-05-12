<template>
  <header class="header-mx">
    <MainContainer class="flex">
      <nav class="nav-gob-top flex">
        <link-gob url="https://www.gob.mx/" class="logo-gob">
          <img src="../assets/img/gobmx.svg" alt="Gobierno de México." width="124px" height="36px">
        </link-gob>
        <BtnNavMob @click.native="toggleMenu" :class="{'open':isOpenMenu}" />
      </nav>
      <nav class="nav-gob" :class="{'open':isOpenMenu}">
        <link-gob url="https://mivacuna.salud.gob.mx/index.php" parent="ph-mx">Registro para vacunación</link-gob>
        <link-gob url="https://coronavirus.gob.mx/" parent="ph-mx">Información sobre COVID-19</link-gob>
        <link-gob url="https://www.gob.mx/tramites" parent="ph-mx">Tramites</link-gob>
        <link-gob url="https://www.gob.mx/" parent="ph-mx">Gobierno</link-gob>
      </nav>
    </MainContainer>
  </header>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue';
import LinkGob from '@/components/LinkGob.vue';
import BtnNavMob from '@/components/BtnNavMob.vue';

export default {
  name: 'MainHeader',
  components: {
    MainContainer,
    LinkGob,
    BtnNavMob,
  },
  data() {
    return {
      isOpenMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      console.log(this.isOpenMenu);
      this.isOpenMenu = !this.isOpenMenu;
    },
  },
};
</script>

<style scoped lang="scss">
.header-mx {
  background: map-get($color-gob, "verde-obscuro");
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-gob-top {
    background: map-get($color-gob, "verde-obscuro");
    margin-right: - ($gap);
    margin-left: - ($gap);
    flex: 1;
    position: relative;
    z-index: 2;
  }
  .logo-gob {
    padding: $gap*.25;
  }
  .nav-gob {
    border-top: 1px solid map-get($color-gob, "dorado");
    box-shadow: 0 0 10px rgba(0,0,0,.7);
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    left: 0;
    top: -160px;
    padding-top: $gap*.25;
    padding-bottom: $gap*.25;
    background: map-get($color-gob, "verde-obscuro");
    z-index: 1;
    transition: top .3s ease-in-out;
    .link-gob {
      padding: $gap*.25 $gap;
    }
    &.open {
      top: 51px;
    }
  }
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    .nav-gob-top {
      margin-right: 0;
    }
    .logo-gob {
      padding: $gap*.25 $gap;
    }
    .nav-gob {
      box-shadow: none;
      border: none;
      flex-direction: row;
      position: relative;
      top: 0;
      .link-gob {
        padding: $gap*.25 0;
        margin-left: $gap*.5;
      }
    }
  }
}
</style>
