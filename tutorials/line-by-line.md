# app.tsx
### ```import '@/utils/mtj-wx-sdk'```
##### @ 符号
@一般用于表示当下路径，具体见配置文件。  
此项目tsconfig.json中compilerOptions.paths设```"@/*": ["src/*"]```
##### mtj-wx-sdk
[module](./modules.md#mtj-wx-sdk)
### ```import {PropsWithChildren, useState} from 'react';```
##### PropsWithChildren
PropsWithChildren本身是一个ts的类型定义，代码定义在@types/react中。但不仅仅是
类型定义，还扩展了react本身的功能，为react的使用增加便利性、安全性。  
[扩展阅读](./general.md#js版本react-vs-ts版本react)