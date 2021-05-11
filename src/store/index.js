import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openMainNav: false,
    openA11yMenu: false,
  },
  getters: {
    isOpenMainNav(state) {
      return state.openMainNav;
    },
    isOpenA11yMenu(state) {
      return state.openA11yMenu;
    },
  },
  mutations: {
    toggleMainNav(state) {
      state.openMainNav = !state.openMainNav;
    },
    toggleA11yMenu(state) {
      state.openA11yMenu = !state.openA11yMenu;
    },
  },
  actions: {
  },
  modules: {
  },
});
