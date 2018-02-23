# vue-trees
a tree UI base on vue 2.X

### install 
```
npm install vue-trees  --save
or
cnpm i vue-trees  -S
```

### Quick start
```
import Vue from 'vue'
import vueTrees from 'vue-trees'

Vue.use(vueTrees)
```

## API DOC ([中文文档](https://github.com/halower/vue-tree/blob/master/README_CN.md))

###  data Property
The data property does not support properties inherited from the prototype chain (if you can use to consider whether the under-complex, it is recommended to check the code)

| Param      | Description    | Types       | Editable | Default value  |
|---------- |-------- |---------- |---------- |---------- |
|title     | Node name | String | - | — |
|expanded |  Whether the node is expanded | Boolean | Y | false |
|checked |  Node check box is selected | Boolean | Y | false |

###  tree Property
| Param      | Description    | Types      | Editable | Default value  |
|---------- |-------- |---------- |---------- |---------- |
|type     | Tree style | String | Y | default |
|canCheck     | Node can choose | Boolean | Y | false |
|draggable |  Whether the node can drag | Boolean | Y | false |
|dragAndExpanded |  Whether to expand after dragging | Boolean | Y | true |
|control | Add or delete trees | Boolean | Y | false |
|isSolid | Whether it is solid | Boolean | Y | false |
|banCheck | Prohibition of choice | Boolean | Y | false |
|bgColor | Background color (default type is useless) | String | Y | #fff |
|fontColor | Font color (default type is useless) | String | Y | #000 |

###  tree event
| Param      | Description    | Types      | Editable | Arguments  |
|---------- |-------- |---------- |---------- |---------- |
|beforeAddNode | Increase the node before the trigger event (return 'no' means no new) | Function | Y | 1:Parent node |
|afterAddNode | Increase the node after the trigger event | Function | Y | 1:Add node，2:Parent node |
|beforeDelNode     | Delete the node before the trigger event (return 'no' means do not delete) | Function | Y | 1:Current node |
|afterAddNode |  Event triggered after node deletion | Function | Y | 1:Current node |
|beforeDragNode     | Drag the node before the trigger event (return 'no' means do not delete) | Function | Y | 1:Drag node,2:Target node |
|afterDragNode |  Drag the node after the trigger event | Function | Y | 1:Drag node, 2:Target node |

### Demo
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
### Example of effect
#### If you can not see my picture please go my [github](https://github.com/wyr1227/vue-trees)
#### If you find any problems during use please feel free to Issues
<img src="https://github.com/wyr1227/vue-trees/blob/master/src/images/beforeMod.jpg" width=100% height=512 />
<img src="https://github.com/wyr1227/vue-trees/blob/master/src/images/afterMod.png" width=100% height=512 />
