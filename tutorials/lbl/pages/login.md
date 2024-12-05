# src/pages/login
├── index.config.ts  
├── index.module.less  
└── index.tsx  
### title为什么写在config中而不是tsx中 
index.config.ts负责：  
1. 页面的元数据和配置；  
2. 不同平台的适配 
index.tsx负责：
1. 页面的UI结构和逻辑；   
2. 不同平台都是相同的逻辑；  
taro的跨平台核心体现在tsx中，tsx无法统一的放到config.ts中；  
### tsx vs ts
ts是普通的typescript；  
tsx是包含JSX的ts；   
### ```import golden from '@/assets/icon-golden.png';```
##### golden是什么
可能是url地址或者Base64编码的字符串，具体看编译配置；  
> TODO 这个案子中应该在哪里看这个配置，我还没有找到  
### ```import {Button} from '@nutui/nutui-react-taro';```
##### @nutui/nutui-react-taro
module
