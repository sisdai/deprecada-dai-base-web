<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style scoped lang="scss">
.container {
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - #{ $gap * 2 });
  max-width: map-get($width, "max-view");
}
</style>
