<template>
  <header class="header-mx">
    <MainContainer class="flex">
      <nav class="flex full">
        <link-gob url="https://www.gob.mx/" class="logo-gob">
          <img src="../assets/img/gobmx.svg" alt="Gobierno de México." width="124px" height="36px">
        </link-gob>
        <BtnNavMob @click.native="toggleMenu" :class="{'open':isOpenMenu}" />
      </nav>
      <nav class="nav-gob">
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
  .full {
    margin-right: - ($gap);
    margin-left: - ($gap);
    flex: 1;
  }
  .logo-gob {
    padding: $gap*.25;
  }
  .nav-gob {
    display: none;
  }
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    .full {
      margin-right: 0;
    }
    .logo-gob {
      padding: $gap*.25 $gap;
    }
    .nav-gob {
      display: flex;
    }
  }
  // position classes
  &.stick-top {
    position: sticky;
    top: -1px;
    z-index: 9999;
  }
}
</style>
