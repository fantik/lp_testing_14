export default {
  state: {
    list: [],
  },
  getters: {
  },
  mutations: {
    addToList(state, items) {
      // eslint-disable-next-line
      for (let i = 0; i < items.length; i++) {
        state.list.push(items[i]);
      }
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    getData({ commit, state }, users) {
      commit('addToList', users.items);
    },
  },
};
