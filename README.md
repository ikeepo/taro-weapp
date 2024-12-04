> Fuck Away Learning, Let's Training  
> 教育是一项产业，充斥着谎言。我们被告知要投入更多的时间、金钱和精力去学习，但这不过是障眼法。的确，更多的时间、金钱和精力是需要的，但它们不应该投入到“学习”中，而应该投入到“训练”中。训练带来的是技能的自由，而学习无法做到这一点。学习只不过是一个小小的组件，名曰“起步”。
# Intro
这是一个**taro+微信小程序**实战样例。学习编程最好的方式，是从头到位搞懂一个大小适中、可实际运行的真实项目。github上开源的案例不多，[taro-mobile](https://github.com/mzh-note/taro-mobile)算是一个。我这里以学习taro-mobile为例，从一个纯粹新手的角度整理出所有疑问。
# Tutorials
### [line-by-line](./tutorials/line-by-line.md)
### [general](./tutorials/general.md)
### [modules](./tutorials/modules.md)
### [dir-structure](./tutorials/dir-structure.md)
# 流程
### 环境准备
```shell
pnpm install
```
<details>
<summary>
questions
</summary>

[为什么是pnpm](./tutorials/general.md#why-pnpm)

</details>


####  使用Taro开发的（微信小程序 + H5）
技术栈 Taro3.6.24 + typescript + react18，所用技术涉及

UI：NUTUI-React

图表渲染：echarts-taro3-react

状态管理：@reduxjs/toolkit

路由跳转：Taro.navigateTo Taro.redirectTo Taro.switchTab

数据请求：封装的Taro.request

数据缓存：Taro.getStorage Taro.setStorage

项目配置了.env.dev（开发环境）和.env.prod（生产环境）两个环境

按需只配置了微信小程序和h5的打包脚本，测试使用.env.dev的配置，打包上线使用.env.prod的配置

#### 安装
```shell
pnpm install 
```
#### 本地开发
启动h5
```shell
pnpm run dev:h5 
```
启动微信小程序
```shell
pnpm run dev:weapp 
```
h5打包上线
```shell
pnpm run build:h5
```
微信小程序打包上线
```shell
pnpm run build:weapp
```
微信小程序开发者工具导入 dist/weapp 目录即可。

##### 项目旨在对使用taro + react进行小程序开发的实践，对taro、react技术上的一些常用功能、细节进行踩坑。

##### 效果预览：
![image](https://github.com/mzh-note/taro-mobile/assets/15724309/7eea06a2-0841-4c1a-ac3c-55d11aa9dcee)
