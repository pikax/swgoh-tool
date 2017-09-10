import {ActionTree, GetterTree, MutationTree, StoreOptions} from 'vuex';
import * as types from '../mutation_types';
import {getGuildUsers} from "../../api/user_toons";


interface IUserToon {
  toon: string,
  name: string,
  level: string,
  gear: string;
  stars: string,
  zeta: string,
  percent: string,
}


interface IUser {
  name: string;
  toons: IUserToon[],
}


interface IState {

  users: IUser[],

  request_status: string,

}

const state: IState = {
  users: [],

  request_status: '',
};


const getters: GetterTree<IState, IState> = {
  userCount: (state) => state.users.length,
  users: (state) => state.users
};


const actions: ActionTree<IState, IState> = {
  refresh: async ({commit, state}, {guild}) => {
    try {
      commit(types.USER_REFRESH_REQUEST);
      const users = await getGuildUsers(guild);
      commit(types.USER_REFRESH, {users});
      return users;
    } catch (e) {
      commit(types.USER_REFRESH_FAILED, e);
      return false
    }
  }
};

const mutations: MutationTree<IState> = {
  [types.USER_REFRESH_REQUEST]: async (state, {}) => {
    state.request_status = "Requesting";
  },
  [types.USER_REFRESH]: async (state, {users}) => {
    state.users = users;
    state.request_status = 'Success';
  },
  [types.USER_REFRESH_FAILED]: async (state, e) => {
      state.request_status = e.toString();
  },


};

export {
  state,
  getters,
  actions,
  mutations,
};
