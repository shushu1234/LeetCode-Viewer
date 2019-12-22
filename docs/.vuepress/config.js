module.exports = {
  title: 'LeetCode Viewer',
  description: '我的最新的LeetCode提交信息',
  dest: 'dist',
  locales: { '/': { lang: 'zh-cmn-Hans' } },
  head: [
    ['link', { rel: 'icon', href: '/icons/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#000000' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],

  theme: 'reco',
  themeConfig: {
    type: 'blog',
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
      {
        text: '联系',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/shushu1234',
            icon: 'reco-github',
          },
          {
            text: '博客',
            link: 'https://www.liuyao.site',
            icon: 'reco-blog',
          }
        ],
      },
    ],
    friendLink: [
        {
        title: 'LiuYao-Blog',
        desc: '以梦为马，不一定越骑越傻，我写的不是代码，是魔法 😎',
        email: 'liuyao9642@qq.com',
        link: 'https://www.liuyao.site',
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com',
      }
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认 “标签”
      },
    },
    logo: '/images/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '上次更新',
    // 作者
    author: 'LiuYao',
    // 项目开始时间
    startYear: '2019',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    // valineConfig: {
    //   appId: '', // your appId
    //   appKey: '',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   notify: true,
    //   recordIP: true,
    //   hideListAccessNumber: true,
    // },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
      ['@vuepress-reco/extract-code'],
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-125817360-1',
      },
    ],
  ],
  // evergreen: true
}
