<template>
  <div class="pie-componente-libreria">
    <a href="https://conacyt.mx/" target="_blank">
      <img :src="require('@/assets/img/base/logo-conacyt-azul-simple.svg')" alt="Conacyt">
    </a>
  </div>
</template>

<script>
export default {
  name: 'PieComponenteLibreria',  
};
</script>

<style scoped lang="scss">
.pie-componente-libreria {
  width: 100%;
  background-color: #F7F7F7;
  height: 40px;
  padding: 0 25px;
  border-radius: 0 0 10px 10px;
  a {
    background-color: transparent;
    opacity: .5;
    margin: 0;
    &:hover,
    &:focus {
      opacity: 1;
      background-color: transparent;
    }
    img {
      width: 102px;
    }
  }
}
</style>
