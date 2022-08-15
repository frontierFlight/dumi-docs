# dumi-docs

## Getting Started

Install dependencies,

```bash
$ pnpm install
```

Start the dev server,

```bash
$ npm run start
```

Build documentation,

```bash
$ npm run docs:build
```

Run test,

```bash
$ npm test
```

Build library via `father`,

```bash
$ npm run build
```

## 概述

- 基于 Markdown 编写组件文档，约定式路由渲染组件 demo。
- 支持多语言、自定义主题、自定义 demo 渲染容器、自定义 API 表格渲染等。
- 通过 father build 双模式（rollup/babel）打包组件库生成的 dist 目录包含 ejs、cjs 以及 umd 格式的输出，可发布到 npm。（组件库）
- 通过 dumi build 对文档库打包生成 docs-dist（静态站点）。
- 文档中开发和调试代码自动解析是当前的包，方便开发。
- 通过 TypeScript 类型定义 + 注解自动推导生成组件 API（属性、描述、类型、默认值）。

## todolist

- 组件测试集成
- 组件项目使用测试

## 文档链接

[组件库打包工具 father 配置文档](https://github.com/umijs/father)

[dumi 官网](https://d.umijs.org/zh-CN)
