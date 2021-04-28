<template>
  <div>
    <h1>Module D</h1>
    <Banner
      :img="banner.img"
      :src-set="banner.srcSet"
    />
    <Card
      :title="card.title"
      :description="card.description"
      :img="card.img"
    />
  </div>
</template>

<script>
import Card from '@/modules/moduleB/components/Card.vue';
import Banner from './components/Banner.vue';

export default {
  components: {
    Banner,
    Card,
  },

  data() {
    return {
      card: {
        title: 'module D card name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: 'https://picsum.photos/400/200',
      },
      banner: {
        img: '/images/desktop.png',
        srcSet: [
          {
            media: '(max-width: 767px)',
            src: '/images/mobile.png',
          },
          {
            media: '(max-width: 1279px)',
            src: '/images/desktop.png',
          },
        ],
      },
    };
  },
};
</script>
<style scoped lang="scss">
.padding {
  background-image: none;
  background-color: #fff;
}
</style>
