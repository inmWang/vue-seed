// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import store from './vuex/store';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuex);

// 读取componetns下的vue文件并自动注册全局组件
const requireComponent = require.context('./components', false, /\.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName.replace(/^\.\//, '').replace(/\.vue/, '');
  Vue.component(componentName, componentConfig.default || componentConfig)
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
