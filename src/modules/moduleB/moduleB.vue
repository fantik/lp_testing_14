<template>
  <div>
    <h1>Module B</h1>
    <Card
      :img="$store.state.moduleB.card.img"
      :title="$store.state.moduleB.card.title"
      :description="$store.state.moduleB.card.description"
    />
  </div>
</template>

<script>
import Card from './components/Card.vue';

export default {
  components: {
    Card,
  },
};
</script>
