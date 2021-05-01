<template>
  <div class="container"><slot /></div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style scoped lang="scss">
.container {
  margin-left: $gap;
  margin-right: $gap;
  @media (min-width: $breakpoint-tablet) {
    margin-left: auto;
    margin-right: auto;
    max-width: $max-width;
  }
}
</style>
