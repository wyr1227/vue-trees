<template>
  <div>
  <ul class="wyr-trees-fold" v-if="type === 'fold'">
    <li v-for="(item, index) in data"  @drop="drop(item, $event)" @dragover="dragover($event)" :class="{'leaf': haveLeaf(item), 'first-node': !parent && index === 0, 'only-node': !parent && data.length === 1}">
      <div class="tree-node-leaf" :draggable="draggable" @dragstart="drag(item, $event)" :style="{'background-color': bgColor, 'color': fontColor}">
        <span class="tree-down" @click="expandTree(item, $event)">
          <span :class="item.children && item.children.length > 0 ? item.expanded ? 'tree-arrow-down' : 'tree-arrow-right' : ''"></span>
        </span>
        <span v-if="!control" class="node-title" :style="{'padding-left': times * 17 + 'px'}">{{ item.title }}</span>
        <input v-if="control" type="text" v-model="item.title" class="node-title" :style="{'margin-left': times * 17 + 'px'}">
        <span v-if="control">
          <span class="tree-add" @click="addNode(item)">Add</span>
          <span class="tree-del" @click="delNode(item)">Del</span>
        </span>
      </div>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave">
        <Trees v-if="!haveLeaf(item)" :type="type" :afterAddNode="afterAddNode" :beforeAddNode="beforeAddNode" :beforeDelNode="beforeDelNode" :afterDelNode="afterDelNode" :beforeDragNode="beforeDragNode" :afterDragNode="afterDragNode" :times="times+1" :fontColor="fontColor" :bgColor="bgColor" :data="item.children" :parent ='item' :canCheck="canCheck" v-show="item.expanded" :draggable="draggable" :control="control" ></Trees>
      </transition>
    </li>
  </ul>
  <ul class="wyr-trees-dfault" v-if="type === 'default'">
    <li v-for="(item, index) in data"  @drop="drop(item, $event)" @dragover="dragover($event)" :class="{'leaf': haveLeaf(item), 'first-node': !parent && index === 0, 'only-node': !parent && data.length === 1, 'is-solid': isSolid, 'is-dashed': !isSolid}">
      <div class="tree-node-leaf" :draggable="draggable" @dragstart="drag(item, $event)" :style="{'background-color': bgColor, 'color': fontColor}">
        <span v-if="!!item.children && item.children && item.children.length > 0" @click="expandTree(item)" :class="item.expanded ? 'tree-open' : 'tree-close'" ></span>
        <span v-if='canCheck && !item.nocheck' :class="[ item.checked ?  'box-checked' : 'box-unchecked', 'inputCheck']">
          <input :disabled="item.banCheck" :class="['check', item.banCheck ? 'chkDisabled' : '']" v-if='canCheck' type="checkbox"  v-model="item.checked"/>
        </span>
        <span v-if="!control" class="node-title" @click="nodeCheck(item, check)">{{ item.title }}</span>
        <input v-if="control" type="text" v-model="item.title" class="node-title">
        <span v-if="control">
          <span class="tree-add" @click="addNode(item)">Add</span>
          <span class="tree-del" @click="delNode(item)">Del</span>
        </span>
      </div>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave">
        <Trees v-if="!haveLeaf(item)" :isSolid="isSolid" :type="type" :afterAddNode="afterAddNode" :beforeAddNode="beforeAddNode" :beforeDelNode="beforeDelNode" :afterDelNode="afterDelNode" :beforeDragNode="beforeDragNode" :afterDragNode="afterDragNode" :fontColor="fontColor" :bgColor="bgColor" :data="item.children" :parent ='item' :canCheck="canCheck" v-show="item.expanded" :draggable="draggable" :control="control" ></Trees>
      </transition>
    </li>
  </ul>
  </div>
</template>
<script>
import './default.css'
import './fold.css'
import transition from './transition'
export default {
  name: 'Trees',
  mixins: [transition],
  props: {
    data: {
      type: Array,
      default: () => []
    },
    parent: {
      type: Object,
      default: () => null
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
      default: () => 'default'
    },
    bgColor: {
      type: String,
      default: () => 'white'
    },
    fontColor: {
      type: String,
      default: () => 'black'
    },
    afterAddNode: {
      type: Function,
      default: () => null
    },
    beforeAddNode: {
      type: Function,
      default: () => null
    },
    beforeDelNode: {
      type: Function,
      default: () => null
    },
    afterDelNode: {
      type: Function,
      default: () => null
    },
    beforeDragNode: {
      type: Function,
      default: () => null
    },
    afterDragNode: {
      type: Function,
      default: () => null
    },
    isSolid: {
      type: Boolean,
      default: false
    },
    times: {
      type: Number,
      default: 1,
    }
  },
  data () {
    return {
      num: 0,
      check: true,
      drageNode:{}
    }
  },
  mounted () {
    this.initParent()
  },
  watch: {
    data () {
      this.initParent()
    }
  },
  methods: {
    guid () {
      return this.num++
    },
    haveLeaf (node) {
      return !(node.children && node.children.length) && node.parent
    },
    drag (node, ev) {
      let guid = this.guid()
      this.setDragNode(guid, node)
      ev.dataTransfer.setData('guid', guid)
    },
    dragover (ev) {
      ev.preventDefault()
      ev.stopPropagation()
    },
    drop (node, ev) {
      ev.preventDefault()
      ev.stopPropagation()
      let guid = ev.dataTransfer.getData('guid')
      let drag = this.getDragNode(guid)
      let isNo = this.beforeDragNode(drag, node)
      if (isNo !== 'no') {
        if (ev.target.className == 'tree-node-leaf' || ev.target.className == 'check' || ev.target.className == 'tree-close' || ev.target.className == 'tree-add' || ev.target.className == 'tree-del') return false
        if (!(node.title) || drag.title == ev.target.innerHTML) return false
        if (drag.parent === node || drag.parent === null) return false
        if (this.isParent(drag, node)) return false
        let dragParent= drag.parent.children
        if (node.children && node.children.indexOf(drag) === -1) {
          node.children.push(drag)
          dragParent.splice(dragParent.indexOf(drag), 1)
        } else {
          this.$set(node, 'children', [drag])
          dragParent.splice(dragParent.indexOf(drag), 1)
        }
        this.$set(node, 'expanded', this.dragAndExpanded)
        this.beforeDragNode(drag, node)
      }
    },
    setDragNode (guid, node) {
     this.drageNode[guid] = node
    },
    getDragNode (guid) {
      return this.drageNode[guid]
    },
    initParent () {
      for (let node of this.data) {
        this.$set(node, 'parent', this.parent)
      }
    },
    isParent (parent, node) {
      if (parent.hasOwnProperty('children')) {
        for (let chilren of parent.children) {
          if (chilren === node) return true
          if (chilren.children) return this.isParent(chilren, node)
        }
        return false
      }
    },
    expandTree (node, ev) {
      this.$set(node, 'expanded', !node.expanded)
      if (this.type === 'fold') {
        if (ev.target.children[0]) {
          let arrow = ev.target.children[0].className
          if (arrow=== 'tree-arrow-right') {
            arrow = 'tree-arrow-down'
          } else {
            arrow = 'tree-arrow-right'
          }
        } else {
           let arrow = ev.target.className
           if (arrow === 'tree-arrow-right') {
            arrow = 'tree-arrow-down'
          } else {
            arrow = 'tree-arrow-right'
          }
        }
      }
    },
    addNode (node) {
      let isNo = this.beforeAddNode(node)
      if (isNo !== 'no') {
        let newNode = {
          title: 'newNode',
          expanded: true
        }
        if (node.hasOwnProperty('children')) {
          node.children.push(newNode)
        } else {
          this.$set(node, "children", [newNode])
        }
        this.afterAddNode(newNode, node)
      }
    },
    delNode (node) {
      let isNo = this.beforeDelNode(node)
      if (isNo !== 'no') {
        if (this.parent == null) throw new Error('the root element can\'t deleted!')
        if (node.checked && this.canCheck) throw new Error('the node should be checked!')
        this.parent.children.splice(this.parent.children.indexOf(node), 1)
        this.afterDelNode(node)
      }
    },
    allCheck (node, state) {
      if (node.hasOwnProperty('children')) {
        for (let chilren of node.children) {
          this.$set(chilren, 'checked', state)
          if (chilren.children) return this.allCheck(chilren, state)
        }
      }
    },
    nodeCheck (node, state) {
      if (!node.checked) {
        this.$set(node, 'checked', state)
        this.allCheck(node, state)
      } else {
        this.$set(node, 'checked', !state)
        this.allCheck(node, !state)
      }
    }
  }
}
</script>
