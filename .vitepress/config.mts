import { defineConfig, defineConfigWithTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  lang: 'zh-CN',
  description: "A VitePress Site",
  srcDir: 'src',
	lastUpdated: true, // 显示上一次更新时间
	head: [['link', { rel: 'icon', href: '/img/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: '库', link: '/repository', activeMatch: 'repository' },
      { text: '个人推荐', link: '/recommend/video/movie', activeMatch: 'recommend', },
    ],
		sidebar: {
			'/recommend/': [
				{
					text: '阅读',
					items: [
						{ text: '技术', link: '/recommend/book/technology/' },
						{ text: '其他', link: '/recommend/book/others/' },
					]
				},
				{
					text: '影视',
					// collapsed: false,
					items: [
						{ text: '电影', link: '/recommend/video/movie/' },
						{ text: '电视剧', link: '/recommend/video/tv/' },
						{ text: '动漫', link: '/recommend/video/anime/' },
					]
				},
			]
		},
		search: {
			provider: 'local',
		},
		outline: {
			level: 'deep',
			label: '本页目录'
		},
		docFooter: {
			prev: '上一篇',
			next: '下一篇',
		},
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
