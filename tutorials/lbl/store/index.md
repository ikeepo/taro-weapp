# index

### `export type RootState = ReturnType<typeof store.getState>`

##### getState

Redux 内置函数，不接受参数，用于返回 store 的整体 state；

##### typeof store.getState

[typeof](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html) 在 TS 中国不同于 JS，JS 中只会返回字符串；  
TS 会返回参数的类型, 此处是返回 store.getState 这个函数的函数签名；

##### ReturnType

返回 函数签名 的返回值；  
ReturnType 是用于编译，并不是函数，而是一个 TS 内置的类型工具；

##### type

给类型定义别名；

### `export type AppDispatch = typeof store.dispatch`

##### type 不是定义参数

type 是给类型一个别名，但并不是定义参数;  
number 是内置类型，但并不是关键字；
