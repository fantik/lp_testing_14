<template>
  <div>
    <h1>Module A</h1>
    List:
    <ul class="user__list">
      <li
        v-for="item in $store.state.moduleA.list"
        :key="item.id"
        class="user"
      >
        <span>Name: {{ item.name }}</span>
        <span>UserName: {{ item.username }}</span>
        <span>Adress:</span>
        <span>street: {{ item.address.street }}</span>
        <span>suite: {{ item.address.suite }}</span>
        <span>city: {{ item.address.city }}</span>
        <span>zipcode: {{ item.address.zipcode }}</span>
        <a :href="`tel:+${item.phone}`">phone: {{ item.phone }}</a>
        <span>website: {{ item.website }}</span>
        <span>company: {{ item.company.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  data() {
    return {
      users: [],
    };
  },

  created() {
    this.axios = axios;
    this.getUsers();
  },

  methods: {
    async getUsers() {
      await this.axios.get(`${process.env.VUE_APP_API}`)
        .then((response) => {
          this.users = [...response.data];
          this.addUsers();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log('finally');
        });
    },

    addUsers() {
      this.$store.dispatch({
        type: 'getData',
        items: this.users,
      });
    },
  },
};
</script>

<style lang="scss">
.user {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  width: calc(25% - 20px);
  margin-right: 20px;

  @media screen and (max-width: 1024px) {
    width: calc(50% - 20px);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  span {
    margin-bottom: 5px;
  }

  &__list {
    width: calc(100% + 20px);
    margin-left: -10px;
    margin-right: -10px;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 767px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
}
</style>
