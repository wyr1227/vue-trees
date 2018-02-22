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
|children |  子节点 | Array[Object] | - | — |


###  tree 属性
| 参数      | 说明    | 类型      | 可编辑 | 默认值  |
|---------- |-------- |---------- |---------- |---------- |
|canCheck     | 节点是否可以选择 | Boolean | Y | false |
|draggable |  节点是否可拖拽 | Boolean | Y | false |
|dragAndExpanded |  拖拽后是否展开 | Boolean | Y | true |
|control | 对树进行增删 | Boolean | Y | false |
|banCheck | 禁止选择 | Boolean | Y | false |

###  事件
| 参数      | 说明    | 类型      | 可编辑 | 参数 |
|---------- |-------- |---------- |----------|----------|
|afterAddNode | 增加节点后触发事件 | Funciton | Y |当前节点|
|afterDelNode |  删除节点后触发事件 | Funciton | Y |当前节点|
|afterModNode |  修改节点后触发事件 | Funciton | Y |当前节点|
