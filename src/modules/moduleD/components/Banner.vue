<template>
  <div class="banner">
    <picture class="banner__picture">
      <source
        v-for="(picture, index) in srcSet"
        :key="index"
        :media="picture.media"
        :srcset="picture.src"
      >
      <img
        class="banner__img"
        :src="img"
        alt="banner-image"
      >
    </picture>
  </div>
</template>

<script>
export default {
  name: 'Banner',

  props: {
    img: {
      type: String,
      default: '',
    },
    srcSet: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.banner {
  width: 100%;
  margin-bottom: 20px;

  &__img {
    width: 100%;
  }
}
</style>
