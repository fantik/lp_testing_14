<template>
  <div :class="['page', setPageTheme]">
    <navigation />

    <div class="padding">
      <slot />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Navigation,
  },

  computed: {
    setPageTheme() {
      return this.$route.path === '/moduleD' ? 'page_white' : '';
    },
  },
};
</script>

<style scoped lang="scss">
.padding {
  padding: 10px;
}

.page {
  background-image: radial-gradient(circle at 97% 5%, #d7ab6d,
    #743e9b 13%, #3d2066 26%, #100432 42%);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: #100432;
  color: white;

  &_white {
    background-image: none;
    background-color: #fff;
    color: #000;
  }
}
</style>
