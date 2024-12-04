# app.tsx
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
##### PropsWithChildren<any>既然是类型为什么要加<any>
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
### ```Taro.[getStorage](https://docs.taro.zone/en/docs/apis/storage/getStorage/)({ key: 'user',```
##### user是内置的一定有的么
不是，这是用户自定义的
##### key&success&fail
key是必须的，其余不是。