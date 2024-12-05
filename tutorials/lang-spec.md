# Language Specific
## TypeScript
##### 范型类型 Generic Types vs 实用类型 Utility Types
实用类型是TypeScript内置的一组类型，类似函数，用于修改调整另外的类型，以实现某种功能，改为另一种类型。  
范型类型是一种特定的类型，表示不在定义时候指定类型，而是运行时候再指定具体类型，只要这个类型符合具体的范式即可。  
Utility Types以<>接收参数(即其他类型)。  
## Taro
##### 生命周期函数为什么是use开头不是on开头
因为Taro的封装基于React的Hooks规范，useLaunch是生命周期函数，但也是一个Hook；
## JavaScript
##### plain object
通过{} || new Object()创建的js普通对象，只包含键值对，没有其他的额外功能；  
