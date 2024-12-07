# `index.tsx`

### index 是页面入口文件

其余文件在链条后面，通过 import 一层层引入进来使用；

### `import "./index.scss";`引入后怎么使用？

webpack 会将 scss 编译成 css，然后在 js 中插入 style 标签，所以在 js 中引入 scss 文件就可以了。  
把 css 选择器作为变量注入到引入模块的全局空间中；  
/callout 有点最初学 python，见多了 import 第一次 import a as b 的感觉；

### `@components`是什么？

src 路径下自定义的 components 文件夹；  
自定义封装的组件；
