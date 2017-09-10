import Vuex from 'vuex';

import * as types from './mutation_types';


const actions: Vuex.ActionTree<any, any> = {

  getToonInfo: async ({commit, state}, toon) => {
    commit(types.UPDATE_TOON_INFO, {toon});
  },

  selectToon: async ({commit, dispatch, state}, toon) => {
    const info = await dispatch('getInfo', {toon});
    commit(types.SELECT_TOON, info);
    return info;
  }


};


export default actions;



