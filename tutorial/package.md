# package.json

### devdependencies vs dependencies

1. 两者都会被安装到node_modules中
2. 两者的数量不定，devdependencies是开发环境的依赖，dependencies是生产环境的依赖
3. devdependencies不会被打包到生产环境中
4. 如果同一个包出现在两边，版本不同，会以dependencies中的版本为准
