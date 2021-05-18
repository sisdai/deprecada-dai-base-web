<template>
  <a class="link-cover-img"
    :class=size
    :href=url
    :target=target
    :rel="target?'noopener noreferrer':false">
    <img class="card-cover" :src=cover alt="">
    <h3 class="card-title titulo">{{title}}</h3>
  </a>
</template>

<script>
export default {
  name: 'LinkCoverImg',
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
    },
    target: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped lang="scss">
.link-cover-img {
  background-color: #505050;
  box-sizing: border-box;
  border-radius: 5px;
  height: 240px;
  flex: 1 0 100%;
  overflow: hidden;
  position: relative;
  padding: 0;
  &:not(:last-child){
    margin-bottom: $gap*.5;
  }
  @media (min-width: map-get($media-queries-limit, "mobile")) {
    &:not(:last-child){
      margin-bottom: 0;
    }
  }
  &:hover {
    .card-cover {
      border-width: 5px;
      opacity: .9;
    }
  }
  &:focus {
    .card-cover {
      border-color: #e8e8e8;
      border-width: 5px;
      opacity: .8;
    }
  }
  .card-cover {
    box-sizing: border-box;
    border: 0 solid #505050;
    border-radius: 5px;
    object-fit: cover;
    object-position: 50% 50%;
    opacity: 1;
    width: 100%;
    transition:
      border-color .27s ease-in-out,
      border-width .27s ease-in-out,
      opacity .3s ease-in-out;
  }
  .card-title {
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.9));
    box-sizing: content-box;
    color: #fff;
    display: flex;
    align-items: flex-end;
    padding: $gap*.35 $gap*.5;
    margin: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9;
    line-height: 1.2;
  }
}
.half {
  max-width: calc(50% - #{$gap*.25});
  &:nth-of-type(odd) {
    margin-right: $gap*.5;
  }
  @media (min-width: map-get($media-queries-limit, "mobile")) {
    max-width: calc(50% - 5px);
    &:nth-of-type(odd) {
      margin-right: 0;
    }
  }
}
.half-desk {
  @media (min-width: map-get($media-queries-limit, "mobile")) {
    max-width: calc(50% - 5px);
  }
}
</style>
