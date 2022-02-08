<template>
  <button class="btn-nav-mob" type="button">
    <span class="a11y-solo-lectura">Menú</span>
    <span class="btn-icon"></span>
    <span class="btn-text"></span>
  </button>
</template>

<script>
export default {
  name: 'BtnNavMob',
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
  .btn-text {
    color: map-get($color-nav, "texto");
    font-size: map-get($fuente, "size-boton");
    position: relative;
    bottom: -12px;
     &::after {
       content: 'Menú'
     }
  }
  .btn-icon {
    width: 20px;
    height: 1px;
    display: block;
    background: map-get($color-nav, "texto");
    transition: all .3s ease-in-out;
    position: absolute;
    top: 18px;
    &::after,
    &::before {
      content: "";
      width: 20px;
      height: 1px;
      display: block;
      background: map-get($color-nav, "texto");
      position: absolute;
      transition: all .3s ease-in-out;
    }
    &::after {
      top: 5px;
    }
    &::before {
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
    .btn-icon {
      width: 0;
      &::after {
        transform: translate3d(-10px,-5px,0) rotate(-135deg);
      }
      &::before {
        transform: translate3d(-10px,5px,0) rotate(135deg);
      }
    }
    .btn-text {
      &::after {
        content: 'Cerrar'
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
