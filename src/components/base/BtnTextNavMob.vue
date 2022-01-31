<template>
<div>
  <button class="btn-nav-mob" type="button">
    <span class="a11y-solo-lectura">Menú</span>
    <span class="btn-icon"></span>
  </button>
    <span class="menu-text">Menú</span>

</div>
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
  height: 30px;
  width: 50px;
  padding: 0px 8px;
  .btn-icon {
    width: 20px;
    height: 1px;
    display: block;
    background: #FFF;
    transition: all .3s ease-in-out;
    position: absolute;
    &::after,
    &::before {
      content: "";
      width: 20px;
      height: 1px;
      display: block;
      background: #FFF;
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

  .menu-text {
    margin-top: -20px;
    font-size: 12px;
    padding: 0 8px;
    color: white;

  @media (min-width: map-get($media-queries-limit, "navegacion")) {
    display: none;
    
  }
  }
</style>
