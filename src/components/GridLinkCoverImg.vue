<template>
  <div class="grid-link-cover-img">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GridLinkCoverImg',
};
</script>

<style scoped lang="scss">
.grid-link-cover-img {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  width: calc(100% - #{$gap*2});
  max-width: map-get($width, "max-text");
  margin-left: auto;
  margin-right: auto;
  @media (min-width: map-get($media-queries-limit, "mobile")) {
    gap: 10px;
  }
}
</style>
