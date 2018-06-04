// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 程序的入口
import Vue from 'vue';
import App from './App';
import router from './router';

// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css';
// 导入自定义样式
import '@/assets/css/index.css';
// 导入axios模块
// import Axios from 'axios';

// 原始的写法 让vue 实例中可以直接拿到axios对象
// Vue.prototype.$http = axios;

// 插件的使用(axios)
import MyAxios from '@/plugins/myaxios';
// Vue.use() 内部调用了MyAxios.install方法
Vue.use(MyAxios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
