<template>
  <div class="portada">
      <div class="titulo-portada">
        <h1 class="titulo titular-alto">{{title}}</h1>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CoverImg',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.portada {
  background: #123;
  background-image:url(https://picsum.photos/1200/800);
  background-size: cover;
  background-position: center;
  color: #fff;
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.titulo-portada {
  background: linear-gradient(rgba(#000,0), rgba(#000,.8) 90%);
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  .titulo {
    padding-top: 50px;
    max-width: 700px;
  }
}
</style>
