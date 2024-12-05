# question 10
### why pnpm
一般是通过pnpm-lock.yaml判断，此项目使用的是pnpm。  
pnpm的同位置替代是npm yarn.
### JS版本React vs TS版本React
并不存在这个说法，react本身是用JavaScript写的，但是TypeScript作为JS的一个超集扩展，也可以使用react，但是需要对js的react进行封装扩展。  
这个封装扩展是用[@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped)实现的。  
@types/react在做封装的时候，是以类型为接口，但是不仅仅是类型，还会做一定的功能扩展，以增加原始模块的使用便捷性、安全性。
### Taro API自己也有界面组件，为什么还需要Taro-UI/NutUI这种专门的UI组件库
Taro API是功能方法，不是组件；   
Taro也的确带有内置组件，但都是只提供最基础的组件，保证的是跨端兼容，但是不够丰富；   
