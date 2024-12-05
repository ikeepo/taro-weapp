# app.tsx
> [Taro API Docs](https://docs.taro.zone/docs/3.x/apis/about/desc)
### ```import '@/utils/mtj-wx-sdk'```
##### @ 符号
@一般用于表示当下路径，具体见配置文件。  
此项目tsconfig.json中compilerOptions.paths设```"@/*": ["src/*"]```
##### mtj-wx-sdk
[module](./modules.md#mtj-wx-sdk)
### ```import {PropsWithChildren, useState} from 'react';```
##### PropsWithChildren
PropsWithChildren本身是一个ts的类型，代码定义在@types/react中。但不仅仅是类型定义，还扩展了react本身的功能，为react的使用增加便利性、安全性。   
表示的意思是让输入的类型一定包含```children```属性。  
```javascript
type PropsWithChildren<P = {}> = P & { children?: React.ReactNode }; 
```
其中P并不是ts的关键字，只是一个约定习惯，用于表示范型类型的props。  
children?表示children属性是一个可选属性；  
& 表示交叉类型，取两个类型的合集；  
如果P本身也有children，那结果就是两个children属性值的合并；  

[扩展阅读](./general.md#js版本react-vs-ts版本react)
### ```import Taro, { useDidHide, useDidShow, useError, useLaunch, useRouter } from '@tarojs/taro'```
##### 为什么Taro不用在{}内部
Taro是默认导出，代码定义时候```export default Taro```;  
默认导出只能有一个，其余的是具名导出，默认到处的名称可以所以，具名导出只能是原名，但可以as alias;  

### ```import store from '@/store';```
##### store
[module](./modules.md#store)
### ```import {Provider} from 'react-redux';```
##### react-redux 
[module](./modules.md#react-redux)
### ```import {wxLogin} from '@/http/api';```
##### http/api

### ```import './app.less'```
##### 为什么less需要显式引入
因为浏览器只认识HTML | CSS | JS,不认识less，所以需要显式引入，以便构建工具（如WebPack）解析为标准的CSS以让浏览器直接使用。  
TS解析为JS、JSX解析为HTML也是一样道理；
### ```function App({ children }: PropsWithChildren<any>) {```
##### PropsWithChildren 
[PropsWithChildren](./line-by-line.md#propswithchildren)前面已经说了，是一个ts类型；
##### ```PropsWithChildren<any>```既然是类型为什么要加```<any>```
因为PropsWithChildren是一个[Utility Types](./lang-spec.md#范型类型-generic-types-vs-实用类型-utility-types).  
```any```是一个ts的关键字，表示任意类型；  

### ```const app = Taro.getApp()```
##### getApp 
实例化Taro框架，后续要做的就是调整、填充app里的各种细节，以呈现目标app想要的结果。
### ```const router = useRouter()```
##### [useRouter](https://docs.taro.zone/en/docs/hooks/#userouter)
Taro的Hook，在React原生代码基础上的封装。  
用于获取当前页面的route信息：路径、参数等。  
### ```useLaunch((options) => {```
##### [useLaunch](https://docs.taro.zone/docs/3.x/apis/taro.hooks/useLaunch/)
小程序初始化完成后的回调函数；  
参数是一个函数；  
##### options是哪里传入的数据
options是一个约定，并非关键字，可以自由换成其他名字；

### ```const code = options.query?.inviteCode || ''```
##### ？
可选操作符，避免因为参数没有值而报错。  
##### ||
逻辑'或'运算符；  
### ```Taro.setStorage({```
##### 这个数据存在哪里？
视具体程序及运行环境，存在本机；  
一般是一个键值对结构；  

### ```useDidHide(() => {```
##### [useDidHide](https://docs.taro.zone/en/docs/hooks/#usedidhide)
生命周期Hook，处理页面隐藏后的回调；  
### ```console.log(app.isPreviewShare)```
##### isPreviewShare
判断小程序是否处于分享预览中，此状态下可能会限定某些功能等；  
非React||Taro内置属性，是自定义的；  
### ```app.isPreviewShareHide = true```
##### 直接修改实例属性
是可以实现的，但是不推荐，特别是大型项目，会导致不可知混乱，最好用统一的状态管理。  
### ```Taro.getStorage({ key: 'user',```
##### user是内置的一定有的么
不是，这是用户自定义的
##### key&success&fail
key是必须的，其余不是。[函数签名](https://docs.taro.zone/en/docs/apis/storage/getStorage/)。
### ```Taro.login({```
##### [login](https://docs.taro.zone/docs/3.x/apis/open-api/login/)
Taro内置函数，获取登录凭证。 
没有参数是必须的，都是可选；  
##### 为什么是Taro.login而不是实例化的app.login
Taro.login不同于app.login，这里涉及到Taro的跨平台设计理念；  
很多API接口是全局静态方式存在，这样能更好的跨平台使用，不用因为实例化而局限在某个框架，便于保持API的统一；
可以简单理解为，Taro是在各个小程序上加了一层，能放在这一层全局使用的就放进来。  
### ```const instance = Taro.getCurrentInstance()```
##### Instance是页面还是App
一般是指页面；  
> 看到这里，需要去把[Taro API](https://docs.taro.zone/docs/3.x/apis/about/desc)过一遍，知道都有些什么功能 
### ```return <Provider store={store}>{children}</Provider>```
##### [Provider](https://react-redux.js.org/api/provider)
[react-redux](./modules.md#react-redux)提供的组件，用于将redux的store传递给整个组件树，传递的结果是子组件可以使用钩子useSelector&useDispatch访问修改全局状态；  
##### store
Redux创建的[全局状态容器](https://redux.js.org/usage/configuring-your-store/)；  
一般是通过createStore和configureStore生成；  
##### children
React内置属性，表示子组件树； 
children不是关键字，只是一个约定，只要是ReactNode就可以；  
   