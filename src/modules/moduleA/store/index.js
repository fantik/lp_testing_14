export default {
  state: {
    list: [],
  },
  getters: {
  },
  mutations: {
    addToList(state, item) {
      state.list.push(item);
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    getData({ commit }) {

      // commit('addToList', item);
    },
  },
};
