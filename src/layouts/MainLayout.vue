<template>
  <div class="page">
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
};
</script>

<style scoped>
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
}
</style>
