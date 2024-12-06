# scoreReducer

### `type IInitialStateType = { matchId: number, state: number}`

type 功能跟 interface 有些重叠，都是用于定义类型。但侧重不同。
interface 倾向于结构，可扩展，可合并（同一个名称可以多次定义）；
type 更灵活，可以定义一些复杂类型，比如联合类型（类似 python typing 中 Union）、条件类型；

### `setScore(state, action) {state.score = {...state.score,...action.payload}}`

##### setScore 哪里定义的

setScore 在这里并不是调用，而是正在定义。

##### setScore 是一个 reducer

这是在 createSlice 里定义 reducer；  
这个 reducer 接收 state 以及 action，完成修改 score 动作，返回一个新的 state；

##### setScore 也会被 Redux-Toolkit 自动生成一个同名的 action creator

action creator 是一个函数，调用后生成 action；

##### setScore 的两个参数 state&action 是不是必须的

约定，非必需；

##### ...state.score 语法结构

...是展开运算符；
