import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
// import * as getters from './getters'
import * as toons from './modules/toons';
import * as users from './modules/users';
import {platoon} from './modules/platoons';
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'


Vue.use(Vuex);


const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  // getters,
  modules: {
    toons,
    platoon,
    users,

    // products
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
});
