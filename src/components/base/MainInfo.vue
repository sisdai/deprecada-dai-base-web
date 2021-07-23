<template>
  <MainContainer v-if="entornoProyecto !== 'production'">
    <dl class="info-entorno">
      <dt>Versión:</dt>
      <dd>{{versionProyecto}}</dd>
      <dt>Ambiente:</dt>
      <dd>{{entornoProyecto}}</dd>
      <dt>Compilación:</dt>
      <dd>{{actualizacionProyecto}}</dd>
    </dl>
  </MainContainer>
</template>

<script>
import MainContainer from '@/components/base/MainContainer.vue';

export default {
  name: 'MainInfo',
  components: {
    MainContainer,
  },
  computed: {
    versionProyecto() {
      return this.$store.getters.versionProyecto;
    },
    actualizacionProyecto() {
      return this.$store.getters.actualizacionProyecto;
    },
    entornoProyecto() {
      return this.$store.getters.entornoProyecto;
    },
  },
};
</script>

<style scoped lang="scss">
.info-entorno {
  margin-bottom: -30px;
  dt, dd {
    color: #999;
    font-size: 10px;
    line-height: 12px;
    padding: 0;
    margin: 0;
    text-align: left;
  }
  dt {
    text-transform: uppercase;
  }
  dd {
    padding-bottom: 10px;
  }
  @media (min-width: map-get($media-queries-limit, "mobile")) {
    dt, dd {
      display: inline-block;
    }
    dd {
      padding-left: 5px;
      padding-right: 30px;
    }
  }
}
</style>
