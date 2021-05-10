import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openMainNav: false,
  },
  getters: {
    isOpenMainNav(state) {
      return state.openMainNav;
    },
  },
  mutations: {
    toggleMainNav(state) {
      state.openMainNav = !state.openMainNav;
    },
  },
  actions: {
  },
  modules: {
  },
});
