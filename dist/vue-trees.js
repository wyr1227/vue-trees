(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['vue-trees'] = factory());
}(this, (function () { 'use strict';

function __$$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".wyr-trees ul,.wyr-trees li {\r\n  list-style-type:none;\r\n  text-align:left;\r\n}\r\n\r\n.wyr-trees .tree-open {\r\n  line-height: 13px;\r\n}\r\n\r\n.wyr-trees .tree-open:after {\r\n  content: \"\\2013\";\r\n  font-style: normal;\r\n}\r\n\r\n.wyr-trees .tree-close:after {\r\n  content: \"+\";\r\n  font-style: normal;\r\n}\r\n\r\n.wyr-trees .tree-open,\r\n.wyr-trees .tree-close {\r\n  display: inline-block;\r\n  width:14px;\r\n  height:14px;\r\n  text-align: center;\r\n  line-height: 13px;\r\n  border: 1px solid #888888;\r\n  border-radius: 2px;\r\n  background: #FFFFFF;\r\n}\r\n\r\n.wyr-trees .tree-open:after {\r\n  content: \"\\2013\";\r\n  font-style: normal;\r\n}\r\n\r\n.wyr-trees .tree-open {\r\n  line-height: 13px;\r\n}\r\n\r\n.wyr-trees .box-halfchecked {\r\n  background-color: #888888;\r\n}\r\n.wyr-trees .box-halfchecked:after {\r\n  content:\"\\2713\";\r\n  display:block;\r\n  position:absolute;\r\n  z-index:1;\r\n  width:100%;\r\n  text-align:center;\r\n  color: #FFFFFF;\r\n}\r\n.wyr-trees .inputCheck.wyr-trees:after {\r\n  content:\"\\2713\";\r\n  display:block;\r\n  position:absolute;\r\n  z-index:1;\r\n  width:100%;\r\n  text-align:center;\r\n}\r\n.wyr-trees .check{\r\n  display:block;\r\n  position:absolute;\r\n  font-size:14px;\r\n  width:16px;\r\n  height:16px;\r\n  left:-5px;\r\n  top:-4px;\r\n  border:1px solid #000000;\r\n  opacity:0;\r\n  cursor:pointer;\r\n  -ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\r\n  filter:alpha(opacity=0);\r\n  z-index:2;\r\n}\r\n.wyr-trees .chkDisabled {\r\n  background-color: #F5F5F5;\r\n  opacity: 1;\r\n  cursor: not-allowed;\r\n  }\r\n\r\n  .wyr-trees li span:hover {\r\n    background-color: #dddddde3\r\n  }\r\n  .wyr-trees ul,.wyr-trees li {\r\n    list-style-type:none;\r\n    text-align:left;\r\n  }\r\n  .wyr-trees li {\r\n    margin: 0;\r\n    padding: 5px 5px 5px 15px;\r\n    position: relative;\r\n    list-style: none;\r\n  }\r\n  .wyr-trees li:after,\r\n  .wyr-trees li:before {\r\n    content: '';\r\n    left: -8px;\r\n    position: absolute;\r\n    right: auto;\r\n    border-width: 1px\r\n  }\r\n  .wyr-trees li:before {\r\n    border-left: 1px dashed #999;\r\n    bottom: 50px;\r\n    height: 100%;\r\n    top: -8px;\r\n    width: 1px;\r\n  }\r\n  .wyr-trees li:after {\r\n    border-top: 1px dashed #999;\r\n    height: 20px;\r\n    top: 17px;\r\n    width: 28px\r\n  }\r\n  .wyr-trees li:last-child::before {\r\n    height: 26px\r\n  }\r\n  .wyr-trees>li.first-node:before {\r\n    top: 17px;\r\n  }\r\n  .wyr-trees>li.first-node.only-node::before {\r\n    border-left: none;\r\n  }\r\n  .wyr-trees > ul {\r\n    padding-left: 0\r\n  }\r\n  .wyr-trees ul {\r\n    padding-left: 17px;\r\n    padding-top: 10px;\r\n  }\r\n  .wyr-trees li.leaf {\r\n    padding-left: 15px;\r\n  }\r\n  .wyr-trees li.leaf:after {\r\n    content: '';\r\n    left: -7px;\r\n    position: absolute;\r\n    right: auto;\r\n    border-width: 1px;\r\n    border-top: 1px dashed #999;\r\n    height: 20px;\r\n    top: 17px;\r\n    width: 25px;\r\n  }\r\n  .wyr-trees .tree-node-el {\r\n    background-color: #FFFFFF;\r\n    padding-left: 2px;\r\n    position: relative;\r\n    z-index: 3;\r\n  }\r\n  .wyr-trees .node-title {\r\n    padding: 3px 3px;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    margin: 0 2px;\r\n  }\r\n  .wyr-trees>li.first-node:before {\r\n    top: 17px;\r\n  }\r\n  .wyr-trees>li.first-node.only-node::before {\r\n    border-left: none;\r\n  }\r\n  .wyr-trees>li.first-node.only-node::before {\r\n    border-left: none;\r\n  }\r\n  .wyr-trees>li.only-node:after {\r\n    border-top: none;\r\n  }";
__$$styleInject(css);

function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

function setDragNode(guid, node) {
  window['treeDrag'] = {};
  console.log(node);
  window['treeDrag'][guid] = node;
}

function getDragNode(guid) {
  return window['treeDrag'][guid];
}

function hasInGenerations(root, node) {
  if (root.hasOwnProperty('children') && root.children) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = root.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var rn = _step.value;

        if (rn === node) return true;
        if (rn.children) return hasInGenerations(rn, node);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return false;
  }
}

var utils = {
  methods: {
    guid: guid,
    setDragNode: setDragNode,
    getDragNode: getDragNode,
    hasInGenerations: hasInGenerations
  }
};

var Trees = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { staticClass: "wyr-trees" }, _vm._l(_vm.data, function (item, index) {
      return _c('li', { class: { 'leaf': _vm.haveLeave(item), 'first-node': !_vm.parent && index === 0, 'only-node': !_vm.parent && _vm.data.length === 1 }, on: { "drop": function drop($event) {
            _vm.drop(item, $event);
          }, "dragover": function dragover($event) {
            _vm.dragover($event);
          } } }, [_c('div', { staticClass: "tree-node-el", attrs: { "draggable": _vm.draggable }, on: { "dragstart": function dragstart($event) {
            _vm.drag(item, $event);
          } } }, [_c('span', { class: item.expanded ? 'tree-open' : 'tree-close' }), _vm._v(" "), _vm.canCheck && !item.nocheck ? _c('span', { class: [item.checked ? item.halfcheck ? 'box-halfchecked' : 'box-checked' : 'box-unchecked', 'inputCheck'] }, [_vm.multiple ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: item.checked, expression: "item.checked" }], class: ['check', item.chkDisabled ? 'chkDisabled' : ''], attrs: { "disabled": item.chkDisabled, "type": "checkbox" }, domProps: { "checked": Array.isArray(item.checked) ? _vm._i(item.checked, null) > -1 : item.checked }, on: { "change": function change($event) {
            var $$a = item.checked,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
              var $$v = null,
                  $$i = _vm._i($$a, $$v);if ($$el.checked) {
                $$i < 0 && (item.checked = $$a.concat([$$v]));
              } else {
                $$i > -1 && (item.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.$set(item, "checked", $$c);
            }
          } } }) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('span', { staticClass: "node-title" }, [_vm._v(_vm._s(item.title))])]), _vm._v(" "), !_vm.haveLeave(item) ? _c('Trees', { attrs: { "data": item.children, "parent": item, "canCheck": _vm.canCheck } }) : _vm._e()], 1);
    }));
  }, staticRenderFns: [],
  name: 'Trees',
  mixins: [utils],
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    parent: {
      type: Object,
      default: function _default() {
        return null;
      }
    },
    line: {
      type: Boolean,
      default: true
    },
    control: {
      type: Boolean,
      default: true
    },
    canCheck: {
      type: Boolean,
      default: true
    },
    draggable: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      msg: 'abc'
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$on('parentChecked', function (node, checked) {
      _this.$set(node, 'checked', checked);
      if (!node.parent) return false;
      var someBortherNodeChecked = node.parent.children.some(function (node) {
        return node.checked;
      });
      var allBortherNodeChecked = node.parent.children.every(function (node) {
        return node.checked;
      });
      if (_this.halfcheck) {
        // all / some / none
        allBortherNodeChecked ? _this.$set(node.parent, 'halfcheck', false) : someBortherNodeChecked ? _this.$set(node.parent, 'halfcheck', true) : _this.$set(node.parent, 'halfcheck', false);
        if (!checked && someBortherNodeChecked) {
          _this.$set(node.parent, 'halfcheck', true);
          return false;
        }
        _this.$emit('parentChecked', node.parent, checked);
      } else {
        if (checked && allBortherNodeChecked) _this.$emit('parentChecked', node.parent, checked);
        if (!checked) _this.$emit('parentChecked', node.parent, checked);
      }
    });
    this.initHandle();
  },

  watch: {
    data: function data() {
      this.initHandle();
    }
  },
  methods: {
    guid: function guid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    },
    haveLeave: function haveLeave(node) {
      console.log(!(node && node.children && node.children.length));
      return !(node.children && node.children.length) && node.parent;
    },
    drag: function drag(node, ev) {
      var guid = this.guid();
      this.setDragNode(guid, node);
      ev.dataTransfer.setData('guid', guid);
    },
    dragover: function dragover(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    },
    drop: function drop(node, ev) {
      ev.preventDefault();
      ev.stopPropagation();
      var guid = ev.dataTransfer.getData('guid');
      var drag = this.getDragNode(guid);
      // if drag node's parent is enter node or root node
      if (drag.parent === node || drag.parent === null) return false;
      // drag from parent node to child node
      if (this.hasInGenerations(drag, node)) return false;
      var dragHost = drag.parent.children;
      if (node.children && node.children.indexOf(drag) === -1) {
        node.children.push(drag);
        dragHost.splice(dragHost.indexOf(drag), 1);
      } else {
        this.$set(node, 'children', [drag]);
        dragHost.splice(dragHost.indexOf(drag), 1);
      }
      this.$set(node, 'expanded', this.dragAfterExpanded);
      this.$emit('drag-node-end', { dragNode: drag, targetNode: node });
    },
    setDragNode: function setDragNode(guid, node) {
      window['treeDrag'] = {};
      window['treeDrag'][guid] = node;
    },
    initHandle: function initHandle() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var node = _step.value;

          this.$set(node, 'parent', this.parent);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
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
