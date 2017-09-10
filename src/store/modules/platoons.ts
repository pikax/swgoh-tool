import {ActionTree, GetterTree, MutationTree, StoreOptions} from 'vuex';
import * as types from '../mutation_types';
import {state} from "./toons";


interface IPlatoonToon {
  name: string;
  stars: number;

  user: string;
}

interface IPlatoon {
  name: string;
  toons: IPlatoonToon[];

  filled: boolean;

  canBeFilled: boolean;
}

interface IPlatoonState {
  platoons: { [id: string]: IPlatoon; };

  filled: boolean;
}


export const platoon = new class implements StoreOptions<IPlatoonState> {
  state = {
    platoons: {
      platoon1: {id: 1, name: '1', toons: [], filled: true, canBeFilled: false},
      platoon2: {id: 2, name: '2', toons: [], filled: true, canBeFilled: false},
      platoon3: {id: 3, name: '3', toons: [], filled: true, canBeFilled: false},
      platoon4: {id: 4, name: '4', toons: [], filled: true, canBeFilled: false},
      platoon5: {id: 5, name: '5', toons: [], filled: true, canBeFilled: false},
      platoon6: {id: 6, name: '6', toons: [], filled: true, canBeFilled: false},
    },
    filled: false,
  };

  actions: ActionTree<IPlatoonState, IPlatoonState> ={

  };

  getters: GetterTree<IPlatoonState, IPlatoonState>= {
    platoons:(state)=>{
      return Object.keys(state.platoons)
        .map(x=>state.platoons[x])
        // .reduce((x,c)=> x[c.name] = c, {});
    }
  };


  mutations: MutationTree<IPlatoonState> = {
    [types.ASSIGN_USER_TOON_TO_PLATOON]: (state, {toon, platoonId, user}) => {
      const platoon: IPlatoon = state.platoons['platoon'+platoonId];
      const pToon = platoon.toons.find(x => x.name === toon && !x.user);

      if (pToon) {
        pToon.user = user;
      }

      platoon.filled = platoon.toons.filter(x => x.user).length === platoon.toons.length;
    },

    [types.REMOVE_USER_TOON_FROM_PLATOON]: (state, {user, toon, platoonId}) => {
      const platoon: IPlatoon = state.platoons['platoon'+platoonId];
      const pToon = platoon.toons.find(x => x.name === toon && x.user === user);

      pToon.user = null;

      platoon.filled = false;
    },
    [types.ADD_TOON_PLATTON]: (state, {toon, platoonId, stars}) => {
      const platoon = state.platoons['platoon'+platoonId];

      platoon.toons.push({
        user: null,
        name: toon,
        stars: stars,
      });
    },
    [types.REMOVE_TOON_PLATTON]: (state, {toon, platoonName})=>{
      const platoon = state.platoons['platoon'+platoonName];

      // platoon.toons.slice()
      console.error('implement me');
    }

  };


};

