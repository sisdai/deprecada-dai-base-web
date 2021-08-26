<template>
  <div>
    <div class="cover">
      <div class="cover-gradient">
        <img
          class="cover-logos a11y-contraste-fondo"
          src="@/assets/img/base/logos-gob-conacyt.svg"
          alt="Gobierno de México y CONACYT"/>
        <h1 class="cover-title a11y-contraste-fondo">Inicio</h1>
        <h2 class="cover-subtitle a11y-contraste-fondo">
          Un capítulo del Ecosistema Nacional Informático de {{obtenerNombreEni}}
          <!-- borrenme --><br>(el subtitulo solo va en capítulos)*
        </h2>
      </div>
    </div>
    <div class="container text m-t-3 m--b-2 a11y-simplificada-block">
      <img src="@/assets/img/base/firma_compuesta.svg" alt="Gobierno de México y CONACYT">
      <h2 class="titular-portada m-t-3-sm m-t-4-md m-x-auto">
        Inicio
        <!-- borrenme --><br>(el titulo en vista simplificada solo va en capítulos)*
      </h2>
      <h2 class="titular-portada sub m-x-auto">
        Un capítulo del Ecosistema Nacional Informático de {{obtenerNombreEni}}
        <!-- borrenme --><br>(el subtitulo solo va en capítulos)*
      </h2>
    </div>
    <div class="container text">
      <h2 class="titular-portada m-t-3-sm m-t-4-md m-b-1-sm m-b-2-md m-x-auto" >
        Ecosistema Nacional Informático de {{obtenerNombreEni}}
        <br>(este titulo solo va en portadas de ENIs)*
      </h2>
      <p class="texto-alto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolor modi molestiae a similique, quae cumque. Rerum vitae,
        animi architecto eligendi quibusdam hic, dolor delectus
        dignissimos doloribus reprehenderit maxime, cupiditate nobis.
      </p>
      <GridLinkCoverImg class="m-t-1 m-t-2-md m-b-4-md">
        <LinkCoverImg
          cover_escritorio="https://picsum.photos/1200/800"
          cover_movil="https://picsum.photos/777/777"
          :url="`${domain}${base_route}capitulo`"
          target="_blank"
          title="LinkCoverImg size full"
          size="full"/>
        <LinkCoverImg
          cover="https://picsum.photos/700/800"
          :url="`${domain}${base_route}otrocapitulo`"
          title="size half-desk"
          size="half-desk"/>
        <LinkCoverImg
          cover="https://picsum.photos/600/800"
          :url="`${domain}${base_route}yotrocapitulo`"
          title="sin degradado no se muestra el titulo"
          size="half-desk"
          :degradado_activo="false"/>
      </GridLinkCoverImg>
    </div>
  </div>
</template>

<script>
import GridLinkCoverImg from '@/components/base/GridLinkCoverImg.vue';
import LinkCoverImg from '@/components/base/LinkCoverImg.vue';

export default {
  name: 'Inicio',
  components: {
    GridLinkCoverImg,
    LinkCoverImg,
  },
  data() {
    return {
      domain: process.env.VUE_APP_ENI_DOMAIN,
      base_route: process.env.VUE_APP_BASE_ROUTE,
    };
  },
  computed: {
    obtenerNombreEni() {
      return this.$store.getters.obtenerNombreEni;
    },
  },
};
</script>
