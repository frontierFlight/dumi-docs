import { defineConfig } from 'dumi';

export default defineConfig({
  // publicPath: '/test/', // 非根目录部署设置
  // base: '/test/',
  title: 'dumi-docs',
  mode: 'site',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  navs: [
    // 仅site模式使用
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi',
    },
    {
      title: '我有二级导航',
      path: '链接是可选的',
      // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
      children: [
        { title: '第一项', path: 'https://d.umijs.org' },
        { title: '第二项', path: '/guide' },
      ],
    },
  ],
  menus: {
    '/components': [
      {
        title: '组件',
        path: '菜单路由（可选）',
        children: [
          // 菜单子项（可选）
          'components/TestComp/index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        ],
      },
    ],
  },
  themeConfig: {},
  // more config: https://d.umijs.org/config
});
