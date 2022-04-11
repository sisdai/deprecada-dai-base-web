<template>
    <div class="pie-componente-libreria">
        <a href="https://conacyt.mx/" target="_blank">
            <img :src="require('@/assets/img/base/logo-conacyt-azul-simple.svg')" alt="logo-conacyt">
        </a>
    </div>
</template>

<script>

export default {
  name: 'PieComponenteLibreria',
  
};
</script>

<style scoped lang="scss">
div.pie-componente-libreria{
    widows: 100%;
    background-color: #F7F7F7;
    height: 40px;
    padding: 0 25px;
    display: flex;
    border-radius: 0 0 10px 10px  ;
    a{
        opacity:0.5;
        &:hover{
            opacity: 1;
            background-color: transparent;
        }
        margin: auto 0;
        img{
            width: 102px;
        }

    }
}
</style>
