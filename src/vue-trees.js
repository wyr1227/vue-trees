import Trees from './components/index.vue';

var VueTrees = {
  install(Vue, options) {
    Vue.component('vueTrees', Trees)
  }
};

export default VueTrees;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTrees)
}
