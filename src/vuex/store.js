import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    userId: null
  },
  getters,
  mutations,
  actions
});

export default store;
