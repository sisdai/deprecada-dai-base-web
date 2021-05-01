<template>
  <a class="link-social" :class=icono :href=url target="_blank" rel="noopener">
    <span class="a11y-solo-lectura">{{ spanglish }}</span>
  </a>
</template>

<script>
export default {
  name: 'LinkSocial',
  props: {
    icono: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    spanglish: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.link-social {
  background-size: 100%;
  background-position: center bottom;
  display: inline-block;
  margin-right: 5px;
  height: 20px;
  width: 20px;
  filter: brightness(100);
  &:hover,
  &:focus {
    background: transparent;
    filter: drop-shadow(1px 1px 5px rgba(0,0,0,.5));
  }
  &.facebook {
    background-image: url('../assets/img/fb.svg');
    fill: #fff;
  }
  &.twitter {
    background-image: url('../assets/img/tw.svg');
    fill: #fff;
  }
}
</style>
