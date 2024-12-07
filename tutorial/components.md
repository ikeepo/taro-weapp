# safe-area-view

## type.d.ts

这个文件夹里都是类型定义，用于 TS 的类型检查；

### 命名规则

.d.ts 是 TS 类型定义文件的后缀；  
不包含具体实现代码，只有类型定义；  
###`import { FunctionComponent } from 'react';`
FunctionComponent 表示函数式组件类型，简称 FC；  
主要用于类型检查，因此也是 TS 专有，是定义在@types/react 中的；  
@types 是 TS 官方维护的标准库，用于扩展各种 JS 库的类型定义；  
这里可以对 useState、函数式组件、FunctionComponent 做一个细致的梳理：  
函数式组件是 React 早已有之的功能，有函数式组件，就有了 TS 里的 FunctionComponent 用于类型检查；  
但是，在 React16.8 引入 useState 等 Hooks 之前，函数式组件无法在函数内部维护状态，只能通过 props 传参， 状态的管理维护是类组件的功能；  
有了 useState 之后，函数式组件也可以通过 Hooks 进行状态管理；

### `import { NativeSafeAreaViewProps } from 'react-native-safe-area-context';`

也是一个类型定义，用于定义 SafeAreaView 的 props 类型；
这是 React-Native 专属的，但是此处并没有用环境变量做条件判断，应该是个错误；  
条件编译一般是指在配置文件中的设置，代码中可以使用环境变量来判断；

### `export type TaroSafeAreaViewType = FunctionComponent<NativeSafeAreaViewProps & ViewProps>;`

NativeSafeAreaViewProps & ViewProps 这是一个交叉类型，表示两个类型属性的并集；

### `declare const TaroSafeAreaView: TaroSafeAreaViewType;`

declare 是声明变量，只声明，不定义，只是告诉 TS 编译器，这个变量在运行时会被其他文件定义；  
declare 声明的是已经存在的变量（全局的 || 框架注入的 || 外部注入的），而不是新创建的变量；  
declare 后面还有 const 是用于表示变量的行为；  
declare 声明的变量可以

## index.tsx

### `const { className = "", style = {}, edges = ["right", "bottom", "left"] } = props;`

解构赋值，如果 props 中没有对应的属性，就采用默认值，如果有，即使是 null，也要替换。

# picker

## index.tsx

### `import Modal from "@ant-design/react-native/lib/modal";`

[@ant-design/react-native](https://rn.mobile.ant.design/docs/react/introduce-cn)组件库；[modal](https://rn.mobile.ant.design/components/modal-cn/)对话框；

# linear-gradient

## index.tsx

### `import { ITouchEvent } from "@tarojs/components/types/common";`

##### ITouchEvent

Taro 提供的用于表示触摸对象的类型；
