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

var css = ".wyr-trees-dfault ul,.wyr-trees-dfault li {\n  list-style-type:none;\n  text-align:left;\n}\n\n.wyr-trees-dfault .tree-open {\n  line-height: 13px;\n}\n\n.wyr-trees-dfault .tree-open:after {\n  content: \"\\2013\";\n  font-style: normal;\n}\n\n.wyr-trees-dfault .tree-close:after {\n  content: \"+\";\n  font-style: normal;\n}\n\n.wyr-trees-dfault .tree-open,\n.wyr-trees-dfault .tree-close {\n  display: inline-block;\n  width:14px;\n  height:14px;\n  text-align: center;\n  line-height: 13px;\n  border: 1px solid #888888;\n  border-radius: 2px;\n  background: #FFFFFF;\n}\n\n.wyr-trees-dfault .tree-open:after {\n  content: \"\\2013\";\n  font-style: normal;\n}\n.wyr-trees-dfault .tree-add {\n  padding: 5px 10px;\n  background-color: #00FF99;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n.wyr-trees-dfault .tree-del {\n  padding: 5px 10px;\n  background-color: #990033;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n.wyr-trees-dfault .tree-exit {\n  padding: 5px 10px;\n  background-color: #CCFF66;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n.wyr-trees-dfault .tree-open {\n  line-height: 13px;\n}\n\n.wyr-trees-dfault .box-halfchecked {\n  background-color: #888888;\n}\n.wyr-trees-dfault .box-halfchecked:after {\n  content:\"\\2713\";\n  display:block;\n  position:absolute;\n  z-index:1;\n  width:100%;\n  text-align:center;\n  color: #FFFFFF;\n}\n.wyr-trees-dfault .inputCheck.wyr-trees-dfault:after {\n  content:\"\\2713\";\n  display:block;\n  position:absolute;\n  z-index:1;\n  width:100%;\n  text-align:center;\n}\n.wyr-trees-dfault .check{\n  display:block;\n  position:absolute;\n  font-size:14px;\n  width:16px;\n  height:16px;\n  left:-5px;\n  top:-4px;\n  border:1px solid #000000;\n  opacity:0;\n  cursor:pointer;\n  -ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter:alpha(opacity=0);\n  z-index:2;\n}\n.wyr-trees-dfault .chkDisabled {\n  background-color: #F5F5F5;\n  opacity: 1;\n  cursor: not-allowed;\n  }\n\n  .wyr-trees-dfault li span:hover {\n    background-color: #dddddde3\n  }\n  .wyr-trees-dfault ul,.wyr-trees-dfault li {\n    list-style-type:none;\n    text-align:left;\n  }\n  .wyr-trees-dfault li {\n    margin: 0;\n    padding: 5px 5px 5px 15px;\n    position: relative;\n    list-style: none;\n  }\n  .wyr-trees-dfault li:after,\n  .wyr-trees-dfault li:before {\n    content: '';\n    left: -8px;\n    position: absolute;\n    right: auto;\n    border-width: 1px\n  }\n  .wyr-trees-dfault li:before {\n    border-left: 1px dashed #999;\n    bottom: 50px;\n    height: 100%;\n    top: -8px;\n    width: 1px;\n  }\n  .wyr-trees-dfault li:after {\n    border-top: 1px dashed #999;\n    height: 20px;\n    top: 17px;\n    width: 28px\n  }\n  .wyr-trees-dfault li:last-child::before {\n    height: 26px\n  }\n  .wyr-trees-dfault>li.first-node:before {\n    top: 17px;\n  }\n  .wyr-trees-dfault>li.first-node.only-node::before {\n    border-left: none;\n  }\n  .wyr-trees-dfault > ul {\n    padding-left: 0\n  }\n  .wyr-trees-dfault {\n    padding-left: 17px;\n    padding-top: 10px;\n  }\n  .wyr-trees-dfault li.leaf {\n    padding-left: 15px;\n  }\n  .wyr-trees-dfault li.leaf:after {\n    content: '';\n    left: -7px;\n    position: absolute;\n    right: auto;\n    border-width: 1px;\n    border-top: 1px dashed #999;\n    height: 20px;\n    top: 17px;\n    width: 25px;\n  }\n  .wyr-trees-dfault .tree-node-leaf {\n    background-color: #FFFFFF;\n    padding-left: 2px;\n    position: relative;\n    z-index: 3;\n  }\n  .wyr-trees-dfault .node-title {\n    padding: 3px 3px;\n    border-radius: 3px;\n    cursor: pointer;\n    margin: 0 2px;\n  }\n  .wyr-trees-dfault>li.first-node:before {\n    top: 17px;\n  }\n  .wyr-trees-dfault>li.first-node.only-node::before {\n    border-left: none;\n  }\n  .wyr-trees-dfault>li.first-node.only-node::before {\n    border-left: none;\n  }\n  .wyr-trees-dfault>li.only-node:after {\n    border-top: none;\n  }\n\n  .wyr-trees-dfault .inputCheck {\n    display:inline-block;\n    position:relative;\n    width:14px;\n    height:14px;\n    border:1px solid #888888;\n    border-radius:2px;\n    top:4px;\n    text-align:center;\n    font-size:14px;\n    line-height:14px;\n  }\n  .wyr-trees-dfault .inputCheck.notAllNodes:before {\n    content:\"\\2713\";\n    display:block;\n    position:absolute;\n    width:100%;\n    height:100%;\n    background-color:#888888;\n    z-index:1;\n    color:#ffffff;\n  }\n  .wyr-trees-dfault .inputCheck.box-checked:after {\n    content:\"\\2713\";\n    display:block;\n    position:absolute;\n    z-index:1;\n    width:100%;\n    text-align:center;\n  }";
__$$styleInject(css);

var css$2 = ".wyr-trees-fold {\n  padding-left: 0px;\n  padding-top: 0px;\n}\n.wyr-trees-fold ul,.wyr-trees-fold li {\n  list-style-type:none;\n  text-align:left;\n}\n.wyr-trees-fold .tree-node-leaf {\n  background-color: white;\n  padding: 10px 2px;\n  /* border-top: 1px solid #ebeef5; */\n  border-bottom: 1px solid #ebeef5;\n}\n.wyr-trees-fold .tree-arrow-right {\n  display: inline-block;   \n  border-right: 3px solid; border-bottom: 3px solid;  \n  width: 8px; height: 8px;  \n  transform: rotate(-45deg);\n  transition: transform .3s;\n}\n.wyr-trees-fold .tree-arrow-down {\n  display: inline-block;   \n  border-right: 3px solid; border-bottom: 3px solid;  \n  width: 8px; height: 8px;  \n  transform: rotate(45deg);\n  transition: transform .3s;\n}\n.wyr-trees-fold .tree-down {\n  height: 100%;\n  padding: 0 20px;\n  float: right;\n}\n\n/* .wyr-trees-fold  .node-title {\n  padding-left: 10px;\n} */";
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
          } } }, [_c('div', { staticClass: "tree-node-leaf", style: { 'background-color': _vm.bgColor, 'color': _vm.fontColor }, attrs: { "draggable": _vm.draggable }, on: { "dragstart": function dragstart($event) {
            _vm.drag(item, $event);
          } } }, [_c('span', { staticClass: "tree-down", on: { "click": function click($event) {
            _vm.expandTree(item, $event);
          } } }, [_c('span', { class: item.children && item.children.length > 0 ? item.expanded ? 'tree-arrow-down' : 'tree-arrow-right' : '' })]), _vm._v(" "), !_vm.control ? _c('span', { staticClass: "node-title", style: { 'padding-left': _vm.times * 17 + 'px' } }, [_vm._v(_vm._s(item.title))]) : _vm._e(), _vm._v(" "), _vm.control ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: item.title, expression: "item.title" }], staticClass: "node-title", style: { 'margin-left': _vm.times * 17 + 'px' }, attrs: { "type": "text" }, domProps: { "value": item.title }, on: { "input": function input($event) {
            if ($event.target.composing) {
              return;
            }_vm.$set(item, "title", $event.target.value);
          } } }) : _vm._e(), _vm._v(" "), _vm.control ? _c('span', [_c('span', { staticClass: "tree-add", on: { "click": function click($event) {
            _vm.addNode(item);
          } } }, [_vm._v("Add")]), _vm._v(" "), _c('span', { staticClass: "tree-del", on: { "click": function click($event) {
            _vm.delNode(item);
          } } }, [_vm._v("Del")])]) : _vm._e()]), _vm._v(" "), _c('transition', { on: { "before-enter": _vm.beforeEnter, "enter": _vm.enter, "after-enter": _vm.afterEnter, "before-leave": _vm.beforeLeave, "leave": _vm.leave, "after-leave": _vm.afterLeave } }, [!_vm.haveLeaf(item) ? _c('Trees', { directives: [{ name: "show", rawName: "v-show", value: item.expanded, expression: "item.expanded" }], attrs: { "type": _vm.type, "afterAddNode": _vm.afterAddNode, "beforeAddNode": _vm.beforeAddNode, "beforeDelNode": _vm.beforeDelNode, "afterDelNode": _vm.afterDelNode, "beforeDragNode": _vm.beforeDragNode, "afterDragNode": _vm.afterDragNode, "times": _vm.times + 1, "fontColor": _vm.fontColor, "bgColor": _vm.bgColor, "data": item.children, "parent": item, "canCheck": _vm.canCheck, "draggable": _vm.draggable, "control": _vm.control } }) : _vm._e()], 1)], 1);
    })) : _vm._e(), _vm._v(" "), _vm.type === 'default' ? _c('ul', { staticClass: "wyr-trees-dfault" }, _vm._l(_vm.data, function (item, index) {
      return _c('li', { class: { 'leaf': _vm.haveLeaf(item), 'first-node': !_vm.parent && index === 0, 'only-node': !_vm.parent && _vm.data.length === 1 }, on: { "drop": function drop($event) {
            _vm.drop(item, $event);
          }, "dragover": function dragover($event) {
            _vm.dragover($event);
          } } }, [_c('div', { staticClass: "tree-node-leaf", style: { 'background-color': _vm.bgColor, 'color': _vm.fontColor }, attrs: { "draggable": _vm.draggable }, on: { "dragstart": function dragstart($event) {
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
          } } }, [_vm._v("Del")])]) : _vm._e()]), _vm._v(" "), _c('transition', { on: { "before-enter": _vm.beforeEnter, "enter": _vm.enter, "after-enter": _vm.afterEnter, "before-leave": _vm.beforeLeave, "leave": _vm.leave, "after-leave": _vm.afterLeave } }, [!_vm.haveLeaf(item) ? _c('Trees', { directives: [{ name: "show", rawName: "v-show", value: item.expanded, expression: "item.expanded" }], attrs: { "type": _vm.type, "afterAddNode": _vm.afterAddNode, "beforeAddNode": _vm.beforeAddNode, "beforeDelNode": _vm.beforeDelNode, "afterDelNode": _vm.afterDelNode, "beforeDragNode": _vm.beforeDragNode, "afterDragNode": _vm.afterDragNode, "fontColor": _vm.fontColor, "bgColor": _vm.bgColor, "data": item.children, "parent": item, "canCheck": _vm.canCheck, "draggable": _vm.draggable, "control": _vm.control } }) : _vm._e()], 1)], 1);
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
      default: function _default() {
        return 'default';
      }
    },
    bgColor: {
      type: String,
      default: function _default() {
        return 'white';
      }
    },
    fontColor: {
      type: String,
      default: function _default() {
        return 'black';
      }
    },
    afterAddNode: {
      type: Function,
      default: function _default() {
        return null;
      }
    },
    beforeAddNode: {
      type: Function,
      default: function _default() {
        return null;
      }
    },
    beforeDelNode: {
      type: Function,
      default: function _default() {
        return null;
      }
    },
    afterDelNode: {
      type: Function,
      default: function _default() {
        return null;
      }
    },
    beforeDragNode: {
      type: Function,
      default: function _default() {
        return null;
      }
    },
    afterDragNode: {
      type: Function,
      default: function _default() {
        return null;
      }
    },
    times: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      num: 0,
      check: true,
      drageNode: {}
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
      var drag = this.getDragNode(guid);
      var isNo = this.beforeDragNode(drag, node);
      if (isNo !== 'no') {
        if (ev.target.className == 'tree-node-leaf' || ev.target.className == 'check' || ev.target.className == 'tree-close' || ev.target.className == 'tree-add' || ev.target.className == 'tree-del') return false;
        if (!node.title || drag.title == ev.target.innerHTML) return false;
        if (drag.parent === node || drag.parent === null) return false;
        if (this.isParent(drag, node)) return false;
        var dragParent = drag.parent.children;
        if (node.children && node.children.indexOf(drag) === -1) {
          node.children.push(drag);
          dragParent.splice(dragParent.indexOf(drag), 1);
        } else {
          this.$set(node, 'children', [drag]);
          dragParent.splice(dragParent.indexOf(drag), 1);
        }
        this.$set(node, 'expanded', this.dragAndExpanded);
        this.beforeDragNode(drag, node);
      }
    },
    setDragNode: function setDragNode(guid, node) {
      this.drageNode[guid] = node;
    },
    getDragNode: function getDragNode(guid) {
      return this.drageNode[guid];
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
            var chilren = _step2.value;

            if (chilren === node) return true;
            if (chilren.children) return this.isParent(chilren, node);
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
        if (ev.target.children[0]) {
          var arrow = ev.target.className;
          if (arrow === 'tree-arrow-right') {
            arrow = 'tree-arrow-down';
          } else {
            arrow = 'tree-arrow-right';
          }
        } else {
          var _arrow = ev.target.children[0].className;
          if (_arrow === 'tree-arrow-right') {
            _arrow = 'tree-arrow-down';
          } else {
            _arrow = 'tree-arrow-right';
          }
        }
      }
    },
    addNode: function addNode(node) {
      var isNo = this.beforeAddNode(node);
      if (isNo !== 'no') {
        var newNode = {
          title: 'newNode',
          expanded: true
        };
        if (node.hasOwnProperty('children')) {
          node.children.push(newNode);
        } else {
          this.$set(node, "children", [newNode]);
        }
        this.afterAddNode(newNode, node);
      }
    },
    delNode: function delNode(node) {
      var isNo = this.beforeDelNode(node);
      if (isNo !== 'no') {
        if (this.parent == null) throw new Error('the root element can\'t deleted!');
        if (node.checked && this.canCheck) throw new Error('the node should be checked!');
        this.parent.children.splice(this.parent.children.indexOf(node), 1);
        this.afterDelNode(node);
      }
    },
    allCheck: function allCheck(node, state) {
      if (node.hasOwnProperty('children')) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = node.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var chilren = _step3.value;

            this.$set(chilren, 'checked', state);
            if (chilren.children) return this.allCheck(chilren, state);
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
