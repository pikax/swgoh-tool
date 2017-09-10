import Vuex, {ActionTree, GetterTree, MutationTree, Store} from 'vuex';
import * as types from '../mutation_types';
import * as api from '../../api/toons';

interface IState {
  infoToons: { [id: string]: any; };
  toons: Set<string>;

  selectedToon: any;

  info_status: string;
}

const toons = new Set(['darth-maul', 'savage-opress', 'darth-nihilus', 'r2-d2', 'emperor-palpatine', 'darth-vader', 'stormtrooper-han', 'wedge-antilles', 'lando-calrissian', 'qui-gon-jinn', 'royal-guard', 'ct-7567-rex', 'rey', 'biggs-darklighter', 'count-dooku', 'han-solo', 'tie-fighter-pilot', 'luminara-unduli', 'grand-moff-tarkin', 'teebo', 'hera-syndulla', 'dathcha', 'boba-fett', 'captain-phasma', 'ig-88', 'princess-leia', 'ezra-bridger', 'admiral-ackbar', 'darth-sidious', 'ewok-elder', 'chief-chirpa', 'hk-47', 'asajj-ventress', 'kanan-jarrus', 'jedi-knight-anakin', 'grand-master-yoda', 'sabine-wren', 'garazeb-zeb-orrelios', 'jawa-engineer', 'ewok-scout', 'chief-nebit', 'k-2so', 'ct-5555-fives', 'ig-86-sentinel-droid', 'finn', 'sun-fac', 'mace-windu', 'chirrut-imwe', 'dengar', 'ahsoka-tano', 'baze-malbus', 'luke-skywalker-farmboy', 'poe-dameron', 'first-order-tie-pilot', 'jawa-scavenger', 'jawa', 'shoretrooper', 'death-trooper', 'wicket', 'chopper', 'barriss-offee', 'b2-super-battle-droid', 'hoth-rebel-scout', 'resistance-pilot', 'jyn-erso', 'obi-wan-kenobi-old-ben', 'resistance-trooper', 'hoth-rebel-soldier', 'captain-han-solo', 'kylo-ren', 'director-krennic', 'clone-wars-chewbacca', 'jedi-consular', 'first-order-officer', 'ahsoka-tano-fulcrum', 'talia', 'first-order-stormtrooper', 'cc-2224-cody', 'pao', 'cassian-andor', 'snowtrooper', 'clone-sergeant-phase-i', 'geonosian-soldier', 'tusken-raider', 'bistan', 'ima-gun-di', 'scarif-rebel-pathfinder', 'ct-21-0408-echo', 'magmatrooper', 'jedi-knight-guardian', 'bodhi-rook', 'tusken-shaman', 'eeth-koth', 'aayla-secura', 'coruscant-underworld-police', 'nute-gunray', 'general-grievous', 'poggle-the-lesser', 'nightsister-initiate', 'stormtrooper', 'sith-assassin', 'ig-100-magnaguard', 'cad-bane', 'sith-trooper', 'ugnaught', 'old-daka', 'greedo', 'plo-koon', 'lobot', 'general-veers', 'kit-fisto', 'zam-wesell', 'gar-saxon', 'paploo', 'imperial-super-commando', 'logray', 'gamorrean-guard', 'mob-enforcer', 'nightsister-acolyte', 'commander-luke-skywalker', 'general-kenobi', 'geonosian-spy', 'grand-admiral-thrawn', 'hermit-yoda', 'rebel-officer-leia-organa', 'urorrurrr', 'veteran-smuggler-chewbacca', 'veteran-smuggler-han-solo']);

const state: IState = {
  infoToons: {},
  toons,

  selectedToon: null,
  info_status: null,
};


const getters: GetterTree<IState, IState> = {
  toonCount: (state) => state.toons.size,
  alltoons: (state) => Array.from(state.toons),
  selectedToon: (state) => state.selectedToon,
};


const actions: ActionTree<IState, IState> = {
  getInfo: async ({commit, state}, {toon}) => {
    if (!state.toons.has(toon)) {
      commit(types.INVALID_TOON, {toon});
      return false;
    }

    let info = state.infoToons[toon];
    if (!info) {
      commit(types.TOON_INFO_REQUESTED, {toon});
      try {
        info = await api.getInfo(toon);
        commit(types.UPDATE_TOON_INFO, {toon: info});
      }
      catch (ex) {
        commit(types.INVALID_TOON, {toon});
        console.error(ex);
        return false;
      }
    }
    return info;
  }
};

const mutations: MutationTree<IState> = {
  [types.INVALID_TOON]: (state, {toon}) => {
    state.info_status = 'invalid toon: ' + toon;
  },

  [types.TOON_INFO_REQUESTED]: (state, {toon}) => {
    state.info_status = 'requesting';
  },

  [types.GET_TOON_INFO]: (state, {toon}) => {
    state.selectedToon = state[toon];
  },

  [types.UPDATE_TOON_INFO]: (state, {toon, info}) => {
    state.infoToons[toon] = info;
  },
  [types.SELECT_TOON]: (state, toon) => {
    state.selectedToon = toon;
  }

};


export {
  state,
  getters,
  actions,
  mutations,
};
