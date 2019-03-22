import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma';
import 'babel-polyfill';

import App from '../App';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
