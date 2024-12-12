# question 10

### 理解 process.env.NODE_ENV

##### process 是 Nodejs 的内置全局对象

process.env 是一个包含用户环境的对象，比如当前用户的 shell，当前用户的路径等等。
nodejs 是类似浏览器的角色，为 js 提供运行环境，环境中个包含一些全局变量，比如 process；

##### process 并不是 JS 内置对象

但是前端也可以使用 process，通过 webpack 在构建时候替换和注入；  
通过 DefinePlugin 插件，在构建时候注入；  
[DefinePlugin](https://webpack.js.org/plugins/define-plugin/)完成的是变量跟具体值的一一匹配关系；

### 重命名 page

1. page 文件夹
2. app.config.js
3. navigateTo  
   修改完成后，页面无法显示，删除 dist 重新编译。

### why pnpm

一般是通过 pnpm-lock.yaml 判断，此项目使用的是 pnpm。  
pnpm 的同位置替代是 npm yarn.

### JS 版本 React vs TS 版本 React

并不存在这个说法，react 本身是用 JavaScript 写的，但是 TypeScript 作为 JS 的一个超集扩展，也可以使用 react，但是需要对 js 的 react 进行封装扩展。  
这个封装扩展是用[@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped)实现的。  
@types/react 在做封装的时候，是以类型为接口，但是不仅仅是类型，还会做一定的功能扩展，以增加原始模块的使用便捷性、安全性。

### Taro API 自己也有界面组件，为什么还需要 Taro-UI/NutUI 这种专门的 UI 组件库

Taro API 是功能方法，不是组件；  
Taro 也的确带有内置组件，但都是只提供最基础的组件，保证的是跨端兼容，但是不够丰富；

### Issues with peer dependencies found

```shell
 WARN  Issues with peer dependencies found
.
├─┬ @tarojs/react 3.6.35
│ ├── ✕ unmet peer @tarojs/runtime@~3.6.35: found 3.6.24
│ └── ✕ unmet peer @tarojs/shared@~3.6.35: found 3.6.24
├─┬ @tarojs/webpack5-runner 3.6.24
│ └─┬ vue-loader 15.11.1
│   └─┬ @vue/component-compiler-utils 3.3.0
│     └─┬ consolidate 0.15.1
│       ├── ✕ unmet peer react-dom@^16.13.1: found 18.3.1
│       └── ✕ unmet peer react@^16.13.1: found 18.3.1
├─┬ @tarojs/plugin-html 3.6.35
│ └─┬ @tarojs/service 3.6.35
│   └── ✕ unmet peer @tarojs/taro@~3.6.35: found 3.6.24
└─┬ @tarojs/redux-h5 2.2.10
  └── ✕ unmet peer redux@"^2.0.0 || ^3.0.0 || ^4.0.0-0": found 5.0.1
```

```

```
