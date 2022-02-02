<template>
  <div class="main-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MainContainerTxt',
};
</script>

<style scoped lang="scss">
.main-container {
  padding: 0;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 60px);
  max-width: 1400px;

  @media (max-width: map-get($media-queries-limit, "tablet")) {
    
    margin-left: 0;
    margin-right: 0;
    width: 100%;
      
    }
}
</style>
