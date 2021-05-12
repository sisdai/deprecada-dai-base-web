<template>
  <header class="header-mx">
    <MainContainer class="header-flex">
      <nav>
        <link-gob url="https://www.gob.mx/" parent="ph-mx">
          <img src="../assets/img/gobmx.svg" alt="Gobierno de México." width="124px" height="36px">
        </link-gob>
      </nav>
      <nav>
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

export default {
  name: 'MainHeader',
  components: {
    MainContainer,
    LinkGob,
  },
};
</script>

<style scoped lang="scss">
.header-mx {
  display: none;
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    background: map-get($color-gob, "verde-obscuro");
    display: block;
    position: relative;
    z-index: 9999;
    .header-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
