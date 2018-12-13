import Vue from 'vue';
import Router from 'vue-router';
const Index = r => require.ensure([], () => r(require('../pages/index/Index')), 'Index');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
});
