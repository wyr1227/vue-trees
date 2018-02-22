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

var css = ".wyr-trees-dfault ul,.wyr-trees-dfault li {\r\n  list-style-type:none;\r\n  text-align:left;\r\n}\r\n\r\n.wyr-trees-dfault .tree-open {\r\n  line-height: 13px;\r\n}\r\n\r\n.wyr-trees-dfault .tree-open:after {\r\n  content: \"\\2013\";\r\n  font-style: normal;\r\n}\r\n\r\n.wyr-trees-dfault .tree-close:after {\r\n  content: \"+\";\r\n  font-style: normal;\r\n}\r\n\r\n.wyr-trees-dfault .tree-open,\r\n.wyr-trees-dfault .tree-close {\r\n  display: inline-block;\r\n  width:14px;\r\n  height:14px;\r\n  text-align: center;\r\n  line-height: 13px;\r\n  border: 1px solid #888888;\r\n  border-radius: 2px;\r\n  background: #FFFFFF;\r\n}\r\n\r\n.wyr-trees-dfault .tree-open:after {\r\n  content: \"\\2013\";\r\n  font-style: normal;\r\n}\r\n.wyr-trees-dfault .tree-add {\r\n  padding: 5px 10px;\r\n  background-color: #00FF99;\r\n  color: white;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n.wyr-trees-dfault .tree-del {\r\n  padding: 5px 10px;\r\n  background-color: #990033;\r\n  color: white;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n.wyr-trees-dfault .tree-exit {\r\n  padding: 5px 10px;\r\n  background-color: #CCFF66;\r\n  color: white;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n.wyr-trees-dfault .tree-open {\r\n  line-height: 13px;\r\n}\r\n\r\n.wyr-trees-dfault .box-halfchecked {\r\n  background-color: #888888;\r\n}\r\n.wyr-trees-dfault .box-halfchecked:after {\r\n  content:\"\\2713\";\r\n  display:block;\r\n  position:absolute;\r\n  z-index:1;\r\n  width:100%;\r\n  text-align:center;\r\n  color: #FFFFFF;\r\n}\r\n.wyr-trees-dfault .inputCheck.wyr-trees-dfault:after {\r\n  content:\"\\2713\";\r\n  display:block;\r\n  position:absolute;\r\n  z-index:1;\r\n  width:100%;\r\n  text-align:center;\r\n}\r\n.wyr-trees-dfault .check{\r\n  display:block;\r\n  position:absolute;\r\n  font-size:14px;\r\n  width:16px;\r\n  height:16px;\r\n  left:-5px;\r\n  top:-4px;\r\n  border:1px solid #000000;\r\n  opacity:0;\r\n  cursor:pointer;\r\n  -ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\r\n  filter:alpha(opacity=0);\r\n  z-index:2;\r\n}\r\n.wyr-trees-dfault .chkDisabled {\r\n  background-color: #F5F5F5;\r\n  opacity: 1;\r\n  cursor: not-allowed;\r\n  }\r\n\r\n  .wyr-trees-dfault li span:hover {\r\n    background-color: #dddddde3\r\n  }\r\n  .wyr-trees-dfault ul,.wyr-trees-dfault li {\r\n    list-style-type:none;\r\n    text-align:left;\r\n  }\r\n  .wyr-trees-dfault li {\r\n    margin: 0;\r\n    padding: 5px 5px 5px 15px;\r\n    position: relative;\r\n    list-style: none;\r\n  }\r\n  .wyr-trees-dfault li:after,\r\n  .wyr-trees-dfault li:before {\r\n    content: '';\r\n    left: -8px;\r\n    position: absolute;\r\n    right: auto;\r\n    border-width: 1px\r\n  }\r\n  .wyr-trees-dfault li:before {\r\n    border-left: 1px dashed #999;\r\n    bottom: 50px;\r\n    height: 100%;\r\n    top: -8px;\r\n    width: 1px;\r\n  }\r\n  .wyr-trees-dfault li:after {\r\n    border-top: 1px dashed #999;\r\n    height: 20px;\r\n    top: 17px;\r\n    width: 28px\r\n  }\r\n  .wyr-trees-dfault li:last-child::before {\r\n    height: 26px\r\n  }\r\n  .wyr-trees-dfault>li.first-node:before {\r\n    top: 17px;\r\n  }\r\n  .wyr-trees-dfault>li.first-node.only-node::before {\r\n    border-left: none;\r\n  }\r\n  .wyr-trees-dfault > ul {\r\n    padding-left: 0\r\n  }\r\n  .wyr-trees-dfault {\r\n    padding-left: 17px;\r\n    padding-top: 10px;\r\n  }\r\n  .wyr-trees-dfault li.leaf {\r\n    padding-left: 15px;\r\n  }\r\n  .wyr-trees-dfault li.leaf:after {\r\n    content: '';\r\n    left: -7px;\r\n    position: absolute;\r\n    right: auto;\r\n    border-width: 1px;\r\n    border-top: 1px dashed #999;\r\n    height: 20px;\r\n    top: 17px;\r\n    width: 25px;\r\n  }\r\n  .wyr-trees-dfault .tree-node-el {\r\n    background-color: #FFFFFF;\r\n    padding-left: 2px;\r\n    position: relative;\r\n    z-index: 3;\r\n  }\r\n  .wyr-trees-dfault .node-title {\r\n    padding: 3px 3px;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    margin: 0 2px;\r\n  }\r\n  .wyr-trees-dfault>li.first-node:before {\r\n    top: 17px;\r\n  }\r\n  .wyr-trees-dfault>li.first-node.only-node::before {\r\n    border-left: none;\r\n  }\r\n  .wyr-trees-dfault>li.first-node.only-node::before {\r\n    border-left: none;\r\n  }\r\n  .wyr-trees-dfault>li.only-node:after {\r\n    border-top: none;\r\n  }\r\n\r\n  .wyr-trees-dfault .inputCheck {\r\n    display:inline-block;\r\n    position:relative;\r\n    width:14px;\r\n    height:14px;\r\n    border:1px solid #888888;\r\n    border-radius:2px;\r\n    top:4px;\r\n    text-align:center;\r\n    font-size:14px;\r\n    line-height:14px;\r\n  }\r\n  .wyr-trees-dfault .inputCheck.notAllNodes:before {\r\n    content:\"\\2713\";\r\n    display:block;\r\n    position:absolute;\r\n    width:100%;\r\n    height:100%;\r\n    background-color:#888888;\r\n    z-index:1;\r\n    color:#ffffff;\r\n  }\r\n  .wyr-trees-dfault .inputCheck.box-checked:after {\r\n    content:\"\\2713\";\r\n    display:block;\r\n    position:absolute;\r\n    z-index:1;\r\n    width:100%;\r\n    text-align:center;\r\n  }";
__$$styleInject(css);

var css$2 = ".wyr-trees-fold {\r\n  padding-left: 0px;\r\n  padding-top: 0px;\r\n}\r\n.wyr-trees-fold ul,.wyr-trees-fold li {\r\n  list-style-type:none;\r\n  text-align:left;\r\n}\r\n.wyr-trees-fold .tree-node-el {\r\n  background-color: white;\r\n  padding: 10px 2px;\r\n  /* border-top: 1px solid #ebeef5; */\r\n  border-bottom: 1px solid #ebeef5;\r\n}\r\n.wyr-trees-fold .tree-arrow-right {\r\n  display: inline-block;   \r\n  border-right: 3px solid; border-bottom: 3px solid;  \r\n  width: 8px; height: 8px;  \r\n  transform: rotate(-45deg);\r\n  transition: transform .3s;\r\n}\r\n.wyr-trees-fold .tree-arrow-down {\r\n  display: inline-block;   \r\n  border-right: 3px solid; border-bottom: 3px solid;  \r\n  width: 8px; height: 8px;  \r\n  transform: rotate(45deg);\r\n  transition: transform .3s;\r\n}\r\n.wyr-trees-fold .tree-down {\r\n  height: 100%;\r\n  padding: 0 20px;\r\n  float: right;\r\n}\r\n\r\n/* .wyr-trees-fold  .node-title {\r\n  padding-left: 10px;\r\n} */";
__$$styleInject(css$2);

var elTransition = '0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out';

function beforeEnter(el) {
  el.style.transition = elTransition;
  if (!el.dataset) el.dataset = {};

  el.dataset.oldPaddingTop = el.style.paddingTop;
  el.dataset.oldPaddingBottom = el.style.paddingBottom;

  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
}
function enter(el) {
  el.dataset.oldOverflow = el.style.overflow;
  if (el.scrollHeight !== 0) {
    el.style.height = el.scrollHeight + 'px';
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  } else {
    el.style.height = '';
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  }

  el.style.overflow = 'hidden';
}
function afterEnter(el) {
  el.style.transition = '';
  el.style.height = '';
  el.style.overflow = el.dataset.oldOverflow;
}

function beforeLeave(el) {
  if (!el.dataset) el.dataset = {};
  el.dataset.oldPaddingTop = el.style.paddingTop;
  el.dataset.oldPaddingBottom = el.style.paddingBottom;
  el.dataset.oldOverflow = el.style.overflow;

  el.style.height = el.scrollHeight + 'px';
  el.style.overflow = 'hidden';
}

function leave(el) {
  if (el.scrollHeight !== 0) {
    el.style.transition = elTransition;
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
  }
}

function afterLeave(el) {
  el.style.transition = '';
  el.style.height = '';
  el.style.overflow = el.dataset.oldOverflow;
  el.style.paddingTop = el.dataset.oldPaddingTop;
  el.style.paddingBottom = el.dataset.oldPaddingBottom;
}

var transition = {
  methods: {
    beforeEnter: beforeEnter,
    enter: enter,
    afterEnter: afterEnter,
    beforeLeave: beforeLeave,
    leave: leave,
    afterLeave: afterLeave
  }
};

var Trees = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm.type === 'fold' ? _c('ul', { staticClass: "wyr-trees-fold" }, _vm._l(_vm.data, function (item, index) {
      return _c('li', { class: { 'leaf': _vm.haveLeaf(item), 'first-node': !_vm.parent && index === 0, 'only-node': !_vm.parent && _vm.data.length === 1 }, on: { "drop": function drop($event) {
            _vm.drop(item, $event);
          }, "dragover": function dragover($event) {
            _vm.dragover($event);
          } } }, [_c('div', { staticClass: "tree-node-el", style: { 'background-color': _vm.bgColor, 'color': _vm.fontColor }, attrs: { "draggable": _vm.draggable }, on: { "dragstart": function dragstart($event) {
            _vm.drag(item, $event);
          } } }, [_c('span', { staticClass: "tree-down", on: { "click": function click($event) {
            _vm.expandTree(item, $event);
          } } }, [_c('span', { ref: "arrow", refInFor: true, class: item.children && item.children.length > 0 ? item.expanded ? 'tree-arrow-down' : 'tree-arrow-right' : '' })]), _vm._v(" "), !_vm.control ? _c('span', { staticClass: "node-title", style: { 'padding-left': _vm.times * 17 + 'px' } }, [_vm._v(_vm._s(item.title))]) : _vm._e(), _vm._v(" "), _vm.control ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: item.title, expression: "item.title" }], staticClass: "node-title", style: { 'margin-left': _vm.times * 17 + 'px' }, attrs: { "type": "text" }, domProps: { "value": item.title }, on: { "input": function input($event) {
            if ($event.target.composing) {
              return;
            }_vm.$set(item, "title", $event.target.value);
          } } }) : _vm._e(), _vm._v(" "), _vm.control ? _c('span', [_c('span', { staticClass: "tree-add", on: { "click": function click($event) {
            _vm.addNode(item);
          } } }, [_vm._v("Add")]), _vm._v(" "), _c('span', { staticClass: "tree-del", on: { "click": function click($event) {
            _vm.delNode(item);
          } } }, [_vm._v("Del")])]) : _vm._e()]), _vm._v(" "), _c('transition', { on: { "before-enter": _vm.beforeEnter, "enter": _vm.enter, "after-enter": _vm.afterEnter, "before-leave": _vm.beforeLeave, "leave": _vm.leave, "after-leave": _vm.afterLeave } }, [!_vm.haveLeaf(item) ? _c('Trees', { directives: [{ name: "show", rawName: "v-show", value: item.expanded, expression: "item.expanded" }], attrs: { "times": _vm.times + 1, "fontColor": _vm.fontColor, "bgColor": _vm.bgColor, "type": _vm.type, "data": item.children, "parent": item, "canCheck": _vm.canCheck, "draggable": _vm.draggable, "control": _vm.control } }) : _vm._e()], 1)], 1);
    })) : _vm._e(), _vm._v(" "), _vm.type === 'default' ? _c('ul', { staticClass: "wyr-trees-dfault" }, _vm._l(_vm.data, function (item, index) {
      return _c('li', { class: { 'leaf': _vm.haveLeaf(item), 'first-node': !_vm.parent && index === 0, 'only-node': !_vm.parent && _vm.data.length === 1 }, on: { "drop": function drop($event) {
            _vm.drop(item, $event);
          }, "dragover": function dragover($event) {
            _vm.dragover($event);
          } } }, [_c('div', { staticClass: "tree-node-el", style: { 'background-color': _vm.bgColor, 'color': _vm.fontColor }, attrs: { "draggable": _vm.draggable }, on: { "dragstart": function dragstart($event) {
            _vm.drag(item, $event);
          } } }, [!!item.children && item.children && item.children.length > 0 ? _c('span', { class: item.expanded ? 'tree-open' : 'tree-close', on: { "click": function click($event) {
            _vm.expandTree(item);
          } } }) : _vm._e(), _vm._v(" "), _vm.canCheck && !item.nocheck ? _c('span', { class: [item.checked ? 'box-checked' : 'box-unchecked', 'inputCheck'] }, [_vm.canCheck ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: item.checked, expression: "item.checked" }], class: ['check', item.banCheck ? 'chkDisabled' : ''], attrs: { "disabled": item.banCheck, "type": "checkbox" }, domProps: { "checked": Array.isArray(item.checked) ? _vm._i(item.checked, null) > -1 : item.checked }, on: { "change": function change($event) {
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
          } } }) : _vm._e()]) : _vm._e(), _vm._v(" "), !_vm.control ? _c('span', { staticClass: "node-title", on: { "click": function click($event) {
            _vm.nodeCheck(item, _vm.check);
          } } }, [_vm._v(_vm._s(item.title))]) : _vm._e(), _vm._v(" "), _vm.control ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: item.title, expression: "item.title" }], staticClass: "node-title", attrs: { "type": "text" }, domProps: { "value": item.title }, on: { "input": function input($event) {
            if ($event.target.composing) {
              return;
            }_vm.$set(item, "title", $event.target.value);
          } } }) : _vm._e(), _vm._v(" "), _vm.control ? _c('span', [_c('span', { staticClass: "tree-add", on: { "click": function click($event) {
            _vm.addNode(item);
          } } }, [_vm._v("Add")]), _vm._v(" "), _c('span', { staticClass: "tree-del", on: { "click": function click($event) {
            _vm.delNode(item);
          } } }, [_vm._v("Del")])]) : _vm._e()]), _vm._v(" "), _c('transition', { on: { "before-enter": _vm.beforeEnter, "enter": _vm.enter, "after-enter": _vm.afterEnter, "before-leave": _vm.beforeLeave, "leave": _vm.leave, "after-leave": _vm.afterLeave } }, [!_vm.haveLeaf(item) ? _c('Trees', { directives: [{ name: "show", rawName: "v-show", value: item.expanded, expression: "item.expanded" }], attrs: { "type": _vm.type, "fontColor": _vm.fontColor, "bgColor": _vm.bgColor, "data": item.children, "parent": item, "canCheck": _vm.canCheck, "draggable": _vm.draggable, "control": _vm.control } }) : _vm._e()], 1)], 1);
    })) : _vm._e()]);
  }, staticRenderFns: [],
  name: 'Trees',
  mixins: [transition],
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
      default: false
    },
    canCheck: {
      type: Boolean,
      default: true
    },
    draggable: {
      type: Boolean,
      default: true
    },
    dragAndExpanded: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'default'
    },
    bgColor: {
      type: String,
      default: 'white'
    },
    fontColor: {
      type: String,
      default: 'black'
    },
    times: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      num: 0,
      check: true
    };
  },
  mounted: function mounted() {
    this.initParent();
  },

  watch: {
    data: function data() {
      this.initParent();
    }
  },
  methods: {
    guid: function guid() {
      return this.num++;
    },
    haveLeaf: function haveLeaf(node) {
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
      // get drage node
      var drag = this.getDragNode(guid);
      // if drag not have tartget node
      if (ev.target.className == 'tree-node-el' || ev.target.className == 'check' || ev.target.className == 'tree-close' || ev.target.className == 'tree-add' || ev.target.className == 'tree-del') return false;
      // if drag target is he himself
      if (!node.title || drag.title == ev.target.innerHTML) return false;
      // if drag node's parent is enter node or root node
      if (drag.parent === node || drag.parent === null) return false;
      // drag from parent node to child node
      if (this.isParent(drag, node)) return false;
      var dragHost = drag.parent.children;
      if (node.children && node.children.indexOf(drag) === -1) {
        node.children.push(drag);
        dragHost.splice(dragHost.indexOf(drag), 1);
      } else {
        this.$set(node, 'children', [drag]);
        dragHost.splice(dragHost.indexOf(drag), 1);
      }
      this.$set(node, 'expanded', this.dragAndExpanded);
    },
    setDragNode: function setDragNode(guid, node) {
      window['treeDrag'] = {};
      window['treeDrag'][guid] = node;
    },
    getDragNode: function getDragNode(guid) {
      return window['treeDrag'][guid];
    },
    initParent: function initParent() {
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
    },
    isParent: function isParent(parent, node) {
      if (parent.hasOwnProperty('children')) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = parent.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var rn = _step2.value;

            if (rn === node) return true;
            if (rn.children) return this.isParent(rn, node);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return false;
      }
    },
    expandTree: function expandTree(node, ev) {
      this.$set(node, 'expanded', !node.expanded);
      if (this.type === 'fold') {
        var arrow = this.$refs.arrow[0];
        if (arrow.className === 'tree-arrow-right') {
          arrow.className = 'tree-arrow-down';
        } else {
          arrow.className = 'tree-arrow-right';
        }
      }
    },
    addNode: function addNode(node) {
      var newNode = {
        title: 'newNode',
        expanded: true
      };
      if (node.hasOwnProperty('children')) {
        node.children.push(newNode);
      } else {
        this.$set(node, "children", [newNode]);
      }
    },
    delNode: function delNode(node) {
      if (this.parent == null) throw new Error('the root element can\'t deleted!');
      if (node.checked && this.canCheck) throw new Error('the node should be checked!');
      this.parent.children.splice(this.parent.children.indexOf(node), 1);
    },
    allCheck: function allCheck(node, state) {
      if (node.hasOwnProperty('children')) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = node.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var rn = _step3.value;

            this.$set(rn, 'checked', state);
            if (rn.children) return this.allCheck(rn, state);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    },
    nodeCheck: function nodeCheck(node, state) {
      if (!node.checked) {
        this.$set(node, 'checked', state);
        this.allCheck(node, state);
      } else {
        this.$set(node, 'checked', !state);
        this.allCheck(node, !state);
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
