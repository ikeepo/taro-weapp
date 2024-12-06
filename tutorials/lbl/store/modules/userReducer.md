# userReducer

### `import {createSlice, PayloadAction} from '@reduxjs/toolkit';`

[Redux](../../../modules.md#redux)绕不过去，需要重点掌握；

##### PayloadAction

Redux-Toolkit 定义的数据类型，用于定义 action，以供 TypeScript 使用；

##### `interface UserState {` 为什么要定义接口

interface 是 TS 拥有而 JS 没有的关键字；  
interface 作用:

1. 作为类型检查(主要作用)。
2. 扩展 extend
3. 不仅可以定义属性，还可以定义函数签名
