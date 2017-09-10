import Vue, {ComputedOptions, PropOptions} from 'vue';

import {Component, Prop, Watch} from 'vue-property-decorator';
import {Computed, mapActions, mapGetters, mapState} from 'vuex';

@Component({
  template: require('./platoon_list.vue'),
  computed: {
    ...mapActions(['refresh']),
    ...mapGetters([
      'platoons',
      "users"
    ]),
  },
})
export class PlatoonListComponent extends Vue {
  stars: number=2;

}


Vue.component('platoon-list', PlatoonListComponent);
