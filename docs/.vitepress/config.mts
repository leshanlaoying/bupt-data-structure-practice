import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'BUPT 国际学院 · 数据结构练习题库',
  description: 'BUPT 国际学院数据结构课程练习题',
  base: '/bupt-data-structure-practice/',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'BUPT · Data Structures',
    nav: [{ text: '题库首页', link: '/' }, { text: 'github仓库', link: 'https://github.com/leshanlaoying/bupt-data-structure-practice' }],
    search: { provider: 'local', options: { translations: {
      button: { buttonText: '搜索题目', buttonAriaLabel: '搜索题目' },
      modal: { noResultsText: '没有找到相关题目', resetButtonTitle: '清空搜索', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } }
    } } },
    sidebar: [
      { text: '00 · 首页', link: '/#home' },
      { text: '01 · 线性结构', link: '/#linear', collapsed: false, items: [
        { text: '1.1 Balancing Symbols', link: '/#linear-1' },
        { text: '1.2 Infix to Postfix Conversion', link: '/#linear-2' },
        { text: '1.3 Central List', link: '/#linear-3' },
        { text: '1.4 Who Is the Last?', link: '/#linear-4' },
      ] },
      { text: '02 · 树', link: '/#tree', collapsed: false, items: [
        { text: '2.1 树的遍历', link: '/#tree-1' },
        { text: '2.2 交换二叉树中每个结点的左孩子和右孩子', link: '/#tree-2' },
        { text: '2.3 玩转二叉树', link: '/#tree-3' },
        { text: '2.4 Binary Search Tree', link: '/#tree-4' },
        { text: '2.5 Traverse Binary Search Tree', link: '/#tree-5' },
        { text: '2.6 AVL Tree', link: '/#tree-6' },
      ] },
      { text: '03 · 图', link: '/#graph', collapsed: false, items: [
        { text: '3.1 无向图的度', link: '/#graph-1' },
        { text: '3.2 连通分量数', link: '/#graph-2' },
      ] },
      { text: '04 · 排序', link: '/#sort', collapsed: false, items: [
        { text: '4.1 升序排序', link: '/#sort-1' },
        { text: '4.2 第 K 小的数', link: '/#sort-2' },
      ] },
      { text: '05 · 散列', link: '/#hash', collapsed: false, items: [
        { text: '5.1 不同整数的个数', link: '/#hash-1' },
        { text: '5.2 两数之和', link: '/#hash-2' },
      ] },
      { text: '06 · KMP', link: '/#kmp', collapsed: false, items: [
        { text: '6.1 字符串首次匹配', link: '/#kmp-1' },
        { text: '6.2 字符串匹配次数', link: '/#kmp-2' },
      ] },
    ],
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: false, next: false },
    footer: { message: '学习交流用途 · 示例题目仅供排版参考', copyright: 'BUPT International School · Data Structures' }
  }
})
