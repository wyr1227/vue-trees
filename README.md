# vue-trees
一个基于Vue2.0的树形控件

## API 文档

###  data 属性
data属性不支持从原型链上继承的属性(如果用到可以考虑下是否过于复杂，建议检查下代码)

| 参数      | 说明    | 类型      | 可编辑 | 默认值  |
|---------- |-------- |---------- |---------- |---------- |
|title     | 节点名称 | String | - | — |
|expanded |  节点是否展开 | Boolean | Y | false |
|checked |  节点复选框是否选中 | Boolean | Y | false |

###  tree 属性
| 参数      | 说明    | 类型      | 可编辑 | 默认值  |
|---------- |-------- |---------- |---------- |---------- |
|type     | 树状图类型 | String | Y | default |
|canCheck     | 节点是否可以选择 | Boolean | Y | false |
|draggable |  节点是否可拖拽 | Boolean | Y | false |
|dragAndExpanded |  拖拽后是否展开 | Boolean | Y | true |
|control | 对树进行增删 | Boolean | Y | false |
|banCheck | 禁止选择 | Boolean | Y | false |
|bgColor | 背景颜色(default类型下无用) | String | Y | #fff |
|fontColor | 字体颜色(default类型下无用) | String | Y | #000 |

###  tree 事件
| 参数      | 说明    | 类型      | 可编辑 | 参数  |
|---------- |-------- |---------- |---------- |---------- |
|beforeAddNode | 增加节点前触发事件(返回'no'表示不新增) | Function | Y | 1:父节点 |
|afterAddNode | 增加节点后触发事件 | Function | Y | 1:新增节点，2:父节点 |
|beforeDelNode     | 删除节点前触发事件(返回'no'表示不删除) | Function | Y | 1:当前节点 |
|afterAddNode |  删除节点后触发事件 | Function | Y | 1:当前节点 |
|beforeDragNode     | 拖拽节点前触发事件(返回'no'表示不删除) | Function | Y | 1:拖拽节点,2:目标节点 |
|afterDragNode |  拖拽节点后触发事件 | Function | Y | 1:拖拽节点, 2:目标节点 |

### 安装
```
npm install vue-trees  --save
或者
cnpm i vue-trees  -S
```

### 快速开始
```
import Vue from 'vue'
import vueTrees from 'vue-trees'

Vue.use(vueTrees)
```

### 实例
```
<template>
  <div class="hello">
    <vue-trees :data="data" :type="type" :canCheck="canCheck"  :control="control" :afterAddNode="add" :beforeAddNode="beforeAddNode" :bgColor="bgColor" :fontColor="fontColor"></vue-trees>
    <span @click="mod()">修改</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      data: [{"title": "第一个", 
        "expanded": true,  
        "children": [{
          "title": "1-1",
          "expanded": true,
          "children": [{
            "title": "1-1-1",
             "children": [{
               "title": "1-1-1-1"
             }]
          }, {
            "title": "1-1-2"
          }, {
            "title": "1-1-3"
          }]
        }]
      },
      {
        "title": "第二个" 
      }],
      canCheck: true,
      bgColor: '#33CC99'
      fontColor: 'white'
      control: false,
      type: 'default'
    }
  },
  mounted () {
    
  },
  methods: {
    mod () {
      console.log(this.data)
      if (this.type == 'default') {
        this.type = 'fold'
      } else {
        this.type = 'default'
      }
      this.control = !this.control
    },
    add: function() {
      console.log(123)
    },
    beforeAddNode (node) {
      console.log(node)
      return 'no'
    }
  }
}
</script>
```

