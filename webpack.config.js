const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  // 其他配置项
  plugins: [
    // 根据条件判断是否启用 React Refresh 插件
    process.env.REACT_REFRESH === "true"
      ? new ReactRefreshWebpackPlugin()
      : null,
    // 其他插件
  ].filter(Boolean), // 移除 null 的插件配置
};
