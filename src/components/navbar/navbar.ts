import Vue from 'vue';

import {Component, Watch} from 'vue-property-decorator';
import {Link} from './link';
import {Logger} from '../../util/log';

@Component({
  template: require('./navbar.vue'),
})
export class NavbarComponent extends Vue {

  protected logger: Logger;

  inverted: boolean = true; // default value

  object: { default: string } = {default: 'Default object property!'}; // objects as default values don't need to be wrapped into functions

  links: Link[] = [
    new Link('Home', '/'),
    new Link('About', '/about'),
    new Link('List', '/list'),
    new Link('Toons', '/toons'),
    new Link('Platoons', '/platoons')
  ];

  @Watch('$route.path')
  pathChanged() {
    this.logger.info('Changed current path to: ' + this.$route.path);
  }

  mounted() {
    if (!this.logger) this.logger = new Logger();
    this.$nextTick(() => this.logger.info(this.object.default));
  }
  //
  // get count() {
  //   return this.$store.state.count;
  // }
  //
  //
  // increment() {
  //   this.$store.commit('increment');
  // }
  //
  // decrement() {
  //   this.$store.commit('decrement');
  // }
  //
  // delayedIncrement = () => this.$store.dispatch('increment');

  //
  // methods = {
  //   ...mapMutations([
  //                     'increment', // map `this.increment()` to `this.$store.commit('increment')`
  //
  //                     // `mapMutations` also supports payloads:
  //                     'incrementBy' // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
  //                   ]),
  //   ...mapMutations({
  //                     add: 'increment' // map `this.add()` to `this.$store.commit('increment')`
  //                   })
  // }
}
