# question 10
### why pnpm
一般是通过pnpm-lock.yaml判断，此项目使用的是pnpm。  
pnpm的同位置替代是npm yarn.
### JS版本React vs TS版本React
并不存在这个说法，react本身是用JavaScript写的，但是TypeScript作为JS的一个超集扩展，也可以使用react，但是需要对js的react进行封装扩展。  
这个封装扩展是用[@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped)实现的。  
@types/react在做封装的时候，是以类型为接口，但是不仅仅是类型，还会做一定的功能扩展，以增加原始模块的使用便捷性、安全性。