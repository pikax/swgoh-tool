import Vue from 'vue';

import {Component, Watch} from 'vue-property-decorator';
import {mapActions, mapGetters, mapState} from 'vuex';
import {PlatoonComponent} from "../platoon/platoon";

// import * as types from '../../store/mutation_types';


@Component({
  template: require('./toon.vue'),
  computed: {
    ...mapActions(['selectToon', "refresh"]),
    ...mapGetters([
      'alltoons',
      'selectedToon',
      'users',
    ])
  },
})
export class ToonComponent extends Vue {

  onChangeToon = (toon) => {
    this.$store.dispatch('selectToon', toon);
  }


  // mounted() {
  // }

}
