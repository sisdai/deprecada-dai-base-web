<template>
  <button class="btn-nav-mob" type="button">
    <span class="btn-icon"></span>
    <span class="btn-text">Menu</span>
    <span class="btn-txt-cerrar">Cerrar</span>
  </button>
</template>

<script>
export default {
  name: 'BtnTxtNavMob',
};
</script>

<style scoped lang="scss">
.btn-nav-mob {
  background: transparent;
  border-radius: 0;
  display: flex;
  margin: 0;
  position: relative;
  height: 50px;
  width: 50px;
  .btn-txt-cerrar {
    display: none;
  }
  .btn-text {
    font-size: 10px;
    position: absolute;
    top: 30px;
    text-transform: uppercase;
  
  }
    &:focus {
      color: #FFF;
    }
  .btn-txt-cerrar {
    font-size: 10px;
    position: absolute;
    top: 30px;
    text-transform: uppercase;
  
  }
    &:focus {
      color: #FFF;
    }
  .btn-icon {
    width: 20px;
    height: 1px;
    display: block;
    background: #FFF;
    transition: all .3s ease-in-out;
    position: absolute;
    top: 17px;
    &::after,
    &::before {
      content: "";
      height: 1px;
      display: block;
      background: #FFF;
      position: absolute;
      transition: all .3s ease-in-out;
    }
    &::after {
      width: 20px;
      top: 5px;
    }
    &::before {
      width: 20px;
      top: -5px;
    }
  }
  &.no-text {
    .btn-text {
      display: none;
    }
    .btn-icon {
      top: 25px;
    }
  }
  &.open {
  .btn-text {
    display: none;
  }
  .btn-txt-cerrar {
    display: block;
  }
    .btn-icon {
      width: 0;
      &::after {    
        width: 30px;
        transform: translate3d(-15px,-5px,0) rotate(-135deg);
      }
      &::before { 
        width: 30px;  
        transform: translate3d(-15px,5px,0) rotate(135deg);
      }
    }
  }
  &:hover {
    background: transparent;
  }
  &:focus {
    background: map-get($color-gob, "dorado");
  }
  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    display: none;
  }
}
</style>
