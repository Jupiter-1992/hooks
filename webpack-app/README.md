# webpack-app

## 项目描述
这是一个使用 Webpack 构建的应用程序，旨在提供一个简单的前端开发环境。该项目配置了公共的 Webpack 设置，并支持开发和生产环境的构建。

## 文件结构
```
webpack-app
├── src
│   └── index.js          # 应用程序的入口点
├── webpack.common.js     # Webpack 公共配置
├── webpack.dev.js       # Webpack 开发环境配置
├── webpack.prod.js      # Webpack 生产环境配置
├── package.json          # npm 配置文件
└── README.md             # 项目文档
```

## 安装
在项目根目录下运行以下命令以安装依赖项：

```
npm install
```

## 使用
- 开发模式：运行以下命令以启动开发服务器并进行热重载：
```
npm run start
```

- 生产模式：运行以下命令以构建生产版本：
```
npm run build
```

## 贡献
欢迎任何形式的贡献！请提交问题或拉取请求。