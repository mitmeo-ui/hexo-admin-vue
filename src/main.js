// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import router from './router';
import store from './store';

import http from './services/http';
import elementUI from './services/element-ui';

Vue.config.productionTip = false;
Vue.use(elementUI);

Vue.use(http);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
