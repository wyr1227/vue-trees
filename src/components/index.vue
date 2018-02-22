<template>
  <div>
  <ul class="wyr-trees-fold" v-if="type === 'fold'">
    <li v-for="(item, index) in data"  @drop="drop(item, $event)" @dragover="dragover($event)" :class="{'leaf': haveLeaf(item), 'first-node': !parent && index === 0, 'only-node': !parent && data.length === 1}">
      <div class="tree-node-el" :draggable="draggable" @dragstart="drag(item, $event)" :style="{'background-color': bgColor, 'color': fontColor}">
        <span class="tree-down" @click="expandTree(item, $event)">
          <span :class="item.children && item.children.length > 0 ? item.expanded ? 'tree-arrow-down' : 'tree-arrow-right' : ''" ref="arrow"></span>
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
        <Trees v-if="!haveLeaf(item)" :times="times+1" :fontColor="fontColor" :bgColor="bgColor" :type="type" :data="item.children" :parent ='item' :canCheck="canCheck" v-show="item.expanded" :draggable="draggable" :control="control" ></Trees>
      </transition>
    </li>
  </ul>
  <ul class="wyr-trees-dfault" v-if="type === 'default'">
    <li v-for="(item, index) in data"  @drop="drop(item, $event)" @dragover="dragover($event)" :class="{'leaf': haveLeaf(item), 'first-node': !parent && index === 0, 'only-node': !parent && data.length === 1}">
      <div class="tree-node-el" :draggable="draggable" @dragstart="drag(item, $event)" :style="{'background-color': bgColor, 'color': fontColor}">
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
        <Trees v-if="!haveLeaf(item)" :type="type" :fontColor="fontColor" :bgColor="bgColor" :data="item.children" :parent ='item' :canCheck="canCheck" v-show="item.expanded" :draggable="draggable" :control="control" ></Trees>
      </transition>
    </li>
  </ul>
  </div>
</template>

<style>
</style>


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
  data () {
    return {
      num: 0,
      check: true,
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
      // get drage node
      let drag = this.getDragNode(guid)
      // if drag not have tartget node
      if (ev.target.className == 'tree-node-el' || ev.target.className == 'check' || ev.target.className == 'tree-close' || ev.target.className == 'tree-add' || ev.target.className == 'tree-del') return false
      // if drag target is he himself
      if (!(node.title) || drag.title == ev.target.innerHTML) return false
      // if drag node's parent is enter node or root node
      if (drag.parent === node || drag.parent === null) return false
      // drag from parent node to child node
      if (this.isParent(drag, node)) return false
      let dragHost = drag.parent.children
      if (node.children && node.children.indexOf(drag) === -1) {
        node.children.push(drag)
        dragHost.splice(dragHost.indexOf(drag), 1)
      } else {
        this.$set(node, 'children', [drag])
        dragHost.splice(dragHost.indexOf(drag), 1)
      }
      this.$set(node, 'expanded', this.dragAndExpanded)
    },
    setDragNode (guid, node) {
      window['treeDrag'] = {}
      window['treeDrag'][guid] = node
    },
    getDragNode (guid) {
      return window['treeDrag'][guid]
    },
    initParent () {
      for (let node of this.data) {
        this.$set(node, 'parent', this.parent)
      }
    },
    isParent (parent, node) {
      if (parent.hasOwnProperty('children')) {
        for (let rn of parent.children) {
          if (rn === node) return true
          if (rn.children) return this.isParent(rn, node)
        }
        return false
      }
    },
    expandTree (node, ev) {
      this.$set(node, 'expanded', !node.expanded)
      if (this.type === 'fold') {
        let arrow = this.$refs.arrow[0]
        if (arrow.className === 'tree-arrow-right') {
          arrow.className = 'tree-arrow-down'
        } else {
          arrow.className = 'tree-arrow-right'
        }
      }
    },
    addNode (node) {
      let newNode = {
        title: 'newNode',
        expanded: true
      }
      if (node.hasOwnProperty('children')) {
        node.children.push(newNode)
      } else {
        this.$set(node, "children", [newNode])
      }
    },
    delNode (node) {
      if (this.parent == null) throw new Error('the root element can\'t deleted!')
      if (node.checked && this.canCheck) throw new Error('the node should be checked!')
      this.parent.children.splice(this.parent.children.indexOf(node), 1)
    },
    allCheck (node, state) {
      if (node.hasOwnProperty('children')) {
        for (let rn of node.children) {
          this.$set(rn, 'checked', state)
          if (rn.children) return this.allCheck(rn, state)
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
