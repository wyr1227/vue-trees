<template>
  <ul class="wyr-trees">
    <li v-for="(item, index) in data"  @drop="drop(item, $event)" @dragover="dragover($event)" :class="{'leaf': haveLeave(item), 'first-node': !parent && index === 0, 'only-node': !parent && data.length === 1}">
      <div class="tree-node-el" :draggable="draggable" @dragstart="drag(item, $event)">
        <span :class="item.expanded ? 'tree-open' : 'tree-close'"></span>
        <span v-if='canCheck && !item.nocheck' :class="[item.checked ? (item.halfcheck ? 'box-halfchecked' : 'box-checked') : 'box-unchecked', 'inputCheck']">
          <input :disabled="item.chkDisabled" :class="['check', item.chkDisabled ? 'chkDisabled' : '']" v-if='multiple' type="checkbox"  v-model="item.checked"/>
        </span>
        <span class="node-title">{{ item.title }}</span>
      </div>
    <Trees v-if="!haveLeave(item)" :data="item.children" :parent ='item' :canCheck="canCheck"></Trees>
    </li>
  </ul>
</template>

<style>
</style>


<script>
import './index.css'
import utils from './utils'
export default {
  name: 'Trees',
  mixins: [utils],
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
  data () {
    return {
      msg: 'abc',
    }
  },
  mounted () {
    this.$on('parentChecked', (node, checked) => {
      this.$set(node, 'checked', checked)
      if (!node.parent) return false
      let someBortherNodeChecked = node.parent.children.some(node => node.checked)
      let allBortherNodeChecked = node.parent.children.every(node => node.checked)
      if (this.halfcheck) {
        // all / some / none
        allBortherNodeChecked ? this.$set(node.parent, 'halfcheck', false) : someBortherNodeChecked ? this.$set(node.parent, 'halfcheck', true) : this.$set(node.parent, 'halfcheck', false)
        if (!checked && someBortherNodeChecked) {
          this.$set(node.parent, 'halfcheck', true)
          return false
        }
        this.$emit('parentChecked', node.parent, checked)
      } else {
        if (checked && allBortherNodeChecked) this.$emit('parentChecked', node.parent, checked)
        if (!checked) this.$emit('parentChecked', node.parent, checked)
      }
    })
    this.initHandle()
  },
  watch: {
    data () {
      this.initHandle()
    }
  },
  methods: {
    guid () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        let r = Math.random() * 16 | 0
        let v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
    },
    haveLeave (node) {
      console.log(!(node && node.children && node.children.length))
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
      // if drag node's parent is enter node or root node
      if (drag.parent === node || drag.parent === null) return false
      // drag from parent node to child node
      if (this.hasInGenerations(drag, node)) return false
      let dragHost = drag.parent.children
      if (node.children && node.children.indexOf(drag) === -1) {
        node.children.push(drag)
        dragHost.splice(dragHost.indexOf(drag), 1)
      } else {
        this.$set(node, 'children', [drag])
        dragHost.splice(dragHost.indexOf(drag), 1)
      }
      this.$set(node, 'expanded', this.dragAfterExpanded)
      this.$emit('drag-node-end', {dragNode: drag, targetNode: node})
    },
    setDragNode (guid, node) {
      window['treeDrag'] = {}
      window['treeDrag'][guid] = node
    },
    initHandle () {
      for (let node of this.data) {
        this.$set(node, 'parent', this.parent)
      }
    },
  }
}
</script>
