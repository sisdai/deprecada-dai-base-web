import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasMainNav: true,
    openMainNav: false,
    openGobNav: false,
    hasA11yMenu: true,
    openA11yMenu: false,
  },
  getters: {
    hasMainNav(state) {
      return state.hasMainNav;
    },
    isOpenMainNav(state) {
      return state.openMainNav;
    },
    isOpenGobNav(state) {
      return state.openGobNav;
    },
    hasA11yMenu(state) {
      return state.hasA11yMenu;
    },
    isOpenA11yMenu(state) {
      return state.openA11yMenu;
    },
  },
  mutations: {
    openMainNav(state) {
      state.openMainNav = true;
    },
    closeMainNav(state) {
      state.openMainNav = false;
    },
    toggleMainNav(state) {
      state.openMainNav = !state.openMainNav;
    },
    openGobNav(state) {
      state.openGobNav = true;
    },
    closeGobNav(state) {
      state.openGobNav = false;
    },
    toggleGobNav(state) {
      state.openGobNav = !state.openGobNav;
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
