import { defineConfig, defineConfigWithTheme } from 'vitepress'

const Base = '/~wangxi/'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
	base: Base,
  lang: 'zh-CN',
  description: "A VitePress Site",
  srcDir: 'src',
	lastUpdated: true, // 显示上一次更新时间
	head: [['link', { rel: 'icon', href: `${Base}img/logo.png` }]],
	markdown:{
    lineNumbers:true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: '库', link: '/repository', activeMatch: 'repository' },
      { text: '个人推荐', link: '/recommend/video/movie', activeMatch: 'recommend', },
			{ text: '前端', activeMatch: 'frontend', items: [
				{text: 'vue', link: '/frontend/vue'}
			]},
      { text: 'Q&A', link: '/q&a/html', activeMatch: 'q&a', },
			{ text: '其他', link: '/other/career', activeMatch: 'other/' }
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
			],
			'/frontend/': [

			],
			'/q&a/': [
				{ text: 'HTML', link: '/q&a/html/' },
				{ text: 'CSS', link: '/q&a/css/' },
				{ text: 'JS', link: '/q&a/js/' },
				{ text: '浏览器原理', link: '/q&a/chrome/' },
				{ text: '性能优化', link: '/q&a/performance/' },
				{ text: '计算机网络', link: '/q&a/network/' },
			],
			'/other/': [
				{ text: '职业', link: '/other/career/' },

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
		lastUpdated: {
			text: '更新时间',
		},
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
