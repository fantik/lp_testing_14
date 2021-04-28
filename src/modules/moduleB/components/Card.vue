<template>
  <div class="card">
    <div class="image">
      <img
        :src="img"
        alt=""
      >
    </div>
    <div class="body">
      <div class="title">
        {{ title }}
      </div>
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
  .card {
    background-color: #20114a;
    color: #fff;
    display: inline-block;
    width: 400px;
    text-align: center;
    margin: 40px;
    border: 1px solid #100432;
    box-shadow: 2px 2px 4px #3f51b5;

    @media screen and (max-width: 767px) {
      width: 100%;
      margin: 0;

      img {
        width: 100%;
      }
    }
  }

  .body {
    padding: 40px;
  }

  .title {
    font-weight: bold;
  }
</style>
