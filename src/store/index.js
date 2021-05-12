import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasMainNav: false,
    openMainNav: false,
    hasA11yMenu: false,
    openA11yMenu: false,
  },
  getters: {
    hasMainNav(state) {
      return state.hasMainNav;
    },
    isOpenMainNav(state) {
      return state.openMainNav;
    },
    hasA11yMenu(state) {
      return state.hasA11yMenu;
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
