import getData from './util';
import Vue from 'vue';
import App from './App.vue';
import './style/common.scss';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.component('my-component', {
    template: '<img :src="url" />',
    data() {
      return {
        url: require('./img/logo.png')
      }
    }
  })

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.message = data;
    }
  },
  created() {
    this.fetchData();
  }
});

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
  })


