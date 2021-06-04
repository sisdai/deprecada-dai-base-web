<template>
  <div>
    <div class="cover">
      <div class="cover-gradient">
        <img class="cover-logos" src="@/assets/img/base/logos-gob-conacyt.svg"/>
        <h1 class="cover-title">Inicio</h1>
        <h2 class="cover-subtitle">Un capítulo del Ecosistema Nacional Informático de PRONACE</h2>
      </div>
    </div>
    <div class="container text">
      <h2 class="titular-portada m-t-sm-3 m-t-4-md m-b-sm-1 m-b-2-md m-x-auto" >
        Ecosistema Nacional Informático de
        Tecnología e innovación abierta
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
          url="http://google.com"
          target="_blank"
          title="LinkCoverImg size full"
          size="full"/>
        <LinkCoverImg
          cover="https://picsum.photos/900/800"
          url="guia-estilos"
          title="size half"
          size="half" />
        <LinkCoverImg
          cover="https://picsum.photos/800/800"
          url="guia-estilos"
          title="titulo oculto"
          :titulo_visible="false"
          size="half" />
        <LinkCoverImg
          cover="https://picsum.photos/700/800"
          url="guia-estilos"
          title="texto oculto sin degradado"
          :titulo_visible="false"
          :degradado_activo="false"
          size="half-desk"/>
        <LinkCoverImg
          cover="https://picsum.photos/600/800"
          url="ayuda"
          title="size half-desk degradado_activo false"
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
  name: 'GuiaEstilos',
  components: {
    GridLinkCoverImg,
    LinkCoverImg,
  },
};
</script>
