<template>
  <div class="wrapper">
    <img
      src="https://via.placeholder.com/70x40"
      alt=""
    >
    <nav
      class="nav-menu"
    >
      <router-link
        v-for="l in links"
        :key="l.to"
        class="link"
        :to="l.to"
        exact
      >
        {{ l.name }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          to: '/',
          name: 'Home',
        },
        {
          to: '/moduleA',
          name: 'moduleA',
        },
        {
          to: '/moduleB',
          name: 'moduleB',
        },
        {
          to: '/moduleC',
          name: 'moduleC',
        },
        {
          to: '/moduleD',
          name: 'moduleD',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  border-top: 6px solid #ff6f00;
  background-color: #100432;
  padding: 30px 20px;
  box-shadow: 0 2px 4px #3f51b5;
  border-bottom: 1px solid #100432;
  display: flex;
  align-items: center;
}

img {
  margin-right: 20px;
}

.link {
  color: white;
  text-decoration: none;
  opacity: .7;
  transition: opacity .3s;
  margin: 0 10px;

  @media screen and (max-width: 767px) {
    margin-bottom: 5px;
  }

  &:hover, &.router-link-active {
    opacity: 1;
  }
}

.nav-menu {
  display: flex;
  flex-wrap: wrap;
}
</style>
