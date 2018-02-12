(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['vue-trees'] = factory());
}(this, (function () { 'use strict';

var Trees = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._t("default")], 2);
  }, staticRenderFns: [], _scopeId: 'data-v-6efe4612',
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      msg: 'abc'
    };
  }
};

var VueTrees = {
    install: function install(Vue, options) {
        Vue.component('vueTrees', Trees);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueTrees);
}

return VueTrees;

})));
