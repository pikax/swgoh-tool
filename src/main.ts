import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import './sass/main.scss';

import {AppComponent, HomeComponent,PlatoonListComponent} from './components';
import {AboutComponent} from './components';
import {ListComponent} from './components';
import {NavbarComponent} from './components';
import {ToonComponent} from './components';

import store from './store';

import './components';


// register the plugin
Vue.use(VueRouter);




let router = new VueRouter({
  routes: [
    {path: '/', component: HomeComponent},
    {path: '/about', component: AboutComponent},
    {path: '/list', component: ListComponent},
    {path: '/toons', component: ToonComponent},
    {path: '/platoons', component: PlatoonListComponent},
  ]
});



new Vue({
  el: '#app-main',
  router: router,
  components: {
    'navbar': NavbarComponent,
    'app': AppComponent,
  },

  store,
});


