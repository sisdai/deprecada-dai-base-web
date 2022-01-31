<template>
  <div class="main-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MainContainer',
};
</script>

<style scoped lang="scss">
.main-container {
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  max-width: map-get($width, "max-main");
}
</style>
