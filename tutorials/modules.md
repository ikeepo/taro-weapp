# app.tsx

### [webpack](https://webpack.js.org/)

这个也绕不过去，需要重点学习一下；

### mtj-wx-sdk

[Baidu](https://mtj.baidu.com/static/userguide/book/chapter0/wechat.html)提供的一个微信小程序数据收集分析工具。
[taro 官网](https://docs.taro.zone/docs/report/)相关介绍。

### [store](https://github.com/marcuswestin/store.js)

Cross-browser storage for all use cases, used across the web.
简化浏览器内置对象 Web Storage API（localStorage&sessionStorage）的操作；

### [react-redux](https://github.com/reduxjs/react-redux?tab=readme-ov-file)

Redux 是 JS 的状态管理库，并非为 React 专门设计，React 在使用 Redux 的时候就需要 react-redux，其完成了良好的融合。

##### [useSelector](https://react-redux.js.org/api/hooks#useselector)

`const count = useSelector(state => state.counter.value)`
useSelector 接收一个**selector function** which defines how to extract a specific part of the state from the Redux store, **select function**一般接受全部的 state 作为参数，但也不限定；  
返回值也不一定是一个，也可以是解构赋值，或者一个符合数据；

### [@nutui/nutui-react-taro](https://github.com/jdf2e/nutui-react)

[京东零售](https://github.com/jdf2e)提供的 UI 组件库；  
NutUI React 默认支持 Tree Shaking；  
Tree Shaking 是 JS 的代码优化技术，指在打包时候删除导入未用代码，降低代码冗余；

### [Redux](https://redux.js.org/)

##### [reducer](https://redux.js.org/introduction/core-concepts)

A function takes state and action as arguments and return new state.  
reducer: 状态处理函数，输入是原始状态+动作，输出新状态；名称由来是 JS 中的 reduce，表示多个数据规约为一个数据；Redux 中，表示多个状态经过多个动作最后变成一个动作；  
reducer 是 pure function，所谓 pure 是指：

1. 相同的输入总是产生相同的输出
2. 没有副作用，副作用指的是不会修改任何外部变量、全局状态、文件、数据库，没有函数外的任何交互，只影响输出；

### [Redux Toolkit](https://redux-toolkit.js.org/)

##### [slice](https://redux-toolkit.js.org/api/createSlice)

A slice is a collection of a specific part of the state and its associated reducers and actions. It essentially represents a modular piece of the Redux store's state and includes both the logic to update that state and the actions used to trigger those updates.  
可以理解为封装整个项目的一部分 state\reducers\actions，对应的概念是 feature；

##### 同一个 state、action、reducer 可以同时存在于不同的 slice 里么

They can be shared between different slices in Redux, but this is generally discouraged for several reasons related to maintainability, modularity, and predictablility.

##### action vs reducer

action 是一个动作指令附带数据；  
reducer 是具体执行的函数、步骤；

##### configureStore vs createStore

createStore 是 Redux 原生；  
configureStore 是 Redux-Toolkit 对 createStore 的封装；

### [create-react-app](https://create-react-app.dev/)

### [Immer](https://immerjs.github.io/immer/)

JS 的所有对象都是可变的，为了保持状态的稳定，需要数据 immutable，这是通过 copy 一份新数据来修改以实现，但是对于有多层嵌套的数据结构就需要深拷贝，这就造成了性能开销；  
Immer 通过创建一个原数据的 proxy，在代理的基础上修改，完成后生成一个新数据，这样就降低开销、提升效率。  
这个思路跟 React 的虚拟 DOM 有点像，也类似 Git，都是只修改结构、元信息，最后用原数据+修改信息==>新数据；
