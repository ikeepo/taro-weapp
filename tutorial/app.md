# app

### `class App extends Component {`

##### Component

这是 React 的基本组件类，所有的 React 组件都应该继承自这个类。这是类组件的写法。

##### `componentDid*()`

类组件的生命周期函数，用于在组件挂载、更新、卸载时执行一些操作。  
componentDidMount()：组件挂载后执行,是 React 的内置生命周期函数；  
[其余三个](https://docs.taro.zone/en/docs/react-page/#componentdidshow-)是 Taro 定义的扩展生命周期函数，用于在 Taro 中执行一些操作。

### app.js 是 taro 框架的入口文件

app.js 是管理整个程序的生命周期，并不是小程序的首页，要理解 app.js 与小程序首页的关系，需要理解路由系统的工作原理。
app.js 不负责页面的渲染，只负责程序的生命周期管理。页面渲染由路由系统负责，包括首页，以及各个页面的跳转。
app.js 是一个容器，负责当前页面的渲染，但不负责页面的具体内容。

# app.config.js

Taro 路由系统的配置文件，用于配置小程序的页面路径、窗口表现、设置网络超时时间、底部 tab 等。
路由这个概念最好用英文理解，中文无法区分词性，导致概念混淆。  
这个配置文件是一个 js 模块，返回一个对象，对象的属性是小程序的配置项。

### 前端开发与后端开发的思维差异

前面的一些困惑，其实是因为前端开发与后端开发的思维差异。  
后端更多是代码在线性执行，从上倒下；而前端是事件驱动，响应式的。  
前端的代码并不是按照顺序从上到下执行的，这些代码更多是一种表述、配置，用于响应用户的操作。  
前端的执行顺序，是由框架、浏览器、用户操作等多方面决定的。  
后端代码的顺序不能随便换，但是前端代码可以前后调整位置，因为这些代码是一种解释、配置，而不是一种执行。

### `render()`

render 也是生命周期函数，用于渲染组件。

### `this.props.children`

父组件传递给子组件的内容，子组件可以通过 this.props.children 获取。

```jsx
class Parent extends React.Component {
  render() {
    return (
      <ChildI para="value">
        <h1>Title passed from Parent</h1>
      </Child>
    );
  }
}

class Child extends React.Component {
  render() {
    // this 是指 Child 组件，this.props.children 是父组件传递的内容
    return (
      <div>
        {this.props.children} {/* 渲染 Parent 组件传递的内容 */}
        {this.prpos.para} {/* 渲染 Parent 组件传递的参数 */}.
      </div>
    );
  }
}
```

ReactNode 元素放在 children 中，其余属性放在自己的位置中；  
这样子组件既可以处理父组件的参数，也可以处理父组件的内容；

### app.js 已经是根组件了, `this.props.children`所指的父组件是谁？

这就需要理解 React 的组件树结构了。  
app.js 是小程序的根组件，但它的上层是框架，这里的父组件不是小程序层面，而是框架层面。  
框架里面，路由系统负责页面的渲染，app.js 只是一个容器，负责当前页面的渲染。  
这也是前段不同于后端的地方，后端一般没有这个框架概念，入口就是顶层。

# app.scss

### `@import "~taro-ui/dist/style/index.scss";`

##### `@import "custom.scss";`

[sass](https://sass-lang.com/documentation/at-rules/) at rules;  
@最初是 sass 引入，但现在[css](https://developer.mozilla.org/en-US/docs/Web/CSS/@charset)也支持了；

### ~是 webpack 表示 node_modules 的别名；

这是 webpack 的默认配置；

### `taro-view-core,`;

##### 为什么带,？

表示多个选择器的样式规则，这是 CSS 自己的语法；

##### `taro-view-core`

taro-view-core 是一个选择器，表示 taro 框架的 view 组件；

### `/* #ifdef h5 */`

taro 的[条件编译](https://docs.taro.zone/docs/3.x/envs)，表示下面内容只在 h5 环境下生效；  
这是多端编译的一个特性，可以根据不同的端生成不同的代码；

# index.html

### 为什么需要有 index.html？

这是前端项目的入口文件，是浏览器打开的第一个文件，里面包含了一些基本的标签，比如 html、head、body、title、meta 等。  
对于 taro 来讲，是程序的挂载点，taro 会把程序挂载到这个文件中。

### `<script><%= htmlWebpackPlugin.options.script %></script>`
