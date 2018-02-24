# vue-trees
一个基于Vue2.x的树形控件

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

## API 文档  ([英文文档](https://github.com/wyr1227/vue-trees/blob/master/README.md))

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
|isSolid | 是否是实线 | Boolean | Y | false |
|banCheck | 禁止选择 | Boolean | Y | false |
|bgColor | 背景颜色(default类型下无用) | String | Y | #fff |
|fontColor | 字体颜色(default类型下无用) | String | Y | #000 |

###  node 事件
| 参数      | 说明    | 类型      | 可编辑 | 参数  |
|---------- |-------- |---------- |---------- |---------- |
|beforeAddNode | 增加节点前触发事件(返回'no'表示不新增) | Function | Y | 1:父节点 |
|afterAddNode | 增加节点后触发事件 | Function | Y | 1:新增节点，2:父节点 |
|beforeDelNode     | 删除节点前触发事件(返回'no'表示不删除) | Function | Y | 1:当前节点 |
|afterAddNode |  删除节点后触发事件 | Function | Y | 1:当前节点 |
|beforeDragNode     | 拖拽节点前触发事件(返回'no'表示不拖拽) | Function | Y | 1:拖拽节点,2:目标节点 |
|afterDragNode |  拖拽节点后触发事件 | Function | Y | 1:拖拽节点, 2:目标节点 |

### 实例
```
<template>
  <div class="hello">
    <vue-trees :data="data1" :type="'fold'" :canCheck="canCheck"  :control="control" :bgColor="bgColor" :fontColor="fontColor"></vue-trees>
    <vue-trees :data="data"  :canCheck="canCheck"  :control="control" :afterAddNode="add" :beforeAddNode="beforeAddNode" ></vue-trees>
    <span class="change" @click="mod()">修改</span>
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
      data1: [{"title": "第一个", 
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
      control: false,
      bgColor: '#339999',
      fontColor: 'white'
    }
  },
  mounted () {
    
  },
  methods: {
    mod () {
      console.log(this.data)
      this.control = !this.control
    },
    add: function() {
      console.log('Now is add')
    },
    beforeAddNode (node) {
      console.log(node)
      return 'no'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  padding: 20px;
}
.change {
  background: #336699;
  padding: 5px 20px;
  color: white;
  border-radius: 5px
}
</style>

```
### 效果实例
#### 如果你看不见我的图片请去 [github](https://github.com/wyr1227/vue-trees)
#### 如果在使用过程中发现任何问题欢迎随时Issues
<img src="https://github.com/wyr1227/vue-trees/blob/master/src/images/beforeMod.jpg" width=100% height=512 />
<img src="https://github.com/wyr1227/vue-trees/blob/master/src/images/afterMod.png" width=100% height=512 />
