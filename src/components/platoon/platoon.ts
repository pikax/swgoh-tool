import Vue, {ComputedOptions, PropOptions} from 'vue';

import {Component, Prop, Watch} from 'vue-property-decorator';
import {Computed, mapActions, mapGetters, mapState} from 'vuex';
import {ADD_TOON_PLATTON, ASSIGN_USER_TOON_TO_PLATOON} from "../../store/mutation_types";

// import * as types from '../../store/mutation_types';
//
// const opt: PropOptions = {
//   type: String,
//   required: true,
//   validator(v){
//     debugger;
//     return true;
//   }
// }

@Component({
  template: require('./platoon.vue'),
  computed: {
    ...mapActions(['selectToon', "refresh"]),
    ...mapGetters([
      'platoons',
      "alltoons",
      "users",
    ]),

    platoon(){
      const v: PlatoonComponent = this as any;
      return this.$store.getters.platoons[v.platoonId-1];
      },
    toons(){
      return (<any>this).platoon.toons;
    },
    length(){
      return (<any>this).toons.length;
    },
    filledCount(){
      return (<any>this).toons.filter(x=>!!x.user).length;
    },
    user(){
      const v: PlatoonComponent = this as any;
      const u = (<any>this).users.find(x=>x.name === v.selectedUser);
      return u;
    },
    userUsedToons(){
      const v: PlatoonComponent = this as any;
      const t = (this as any).toons;

      return t.filter(x=>x.user === v.selectedUser);
    },
    validToons(){
      const v: PlatoonComponent = this as any;
      const u = (this as any).user;
      return u && u.toons.filter(x=>x.stars >= v.stars);
    }
  },
})
export class PlatoonComponent extends Vue {
  @Prop( {type: Number,
          required: true,
          validator: (v)=> v>0 && v<7})
  platoonId: number;

  @Prop()
  stars: number;

  selectedUser:string = "";
  selectedToon = {};



  add(){
    // this.$store.dispatch('assignUserToon', {user:(<any>this.$data).selectedUser, toon: (<any>this.$data).selectedToon});

    const data= (<any>this.$data);
    const user= data.selectedUser;
    const toon= data.selectedToon.toon;
    const platoonId= this.platoonId;


    this.$store.commit(ASSIGN_USER_TOON_TO_PLATOON, {toon, platoonId, user});
  }


  addToon(){
    const data= (<any>this.$data);
    const toon= data.selectedToon.toon;
    const stars= this.stars;
    const platoonId= this.platoonId;

    this.$store.commit(ADD_TOON_PLATTON, {toon, platoonId, stars});

  }

}


Vue.component('platoon', PlatoonComponent);
