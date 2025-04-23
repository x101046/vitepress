import { defineConfig, defineConfigWithTheme } from 'vitepress'

const fileAndStyles: Record<string, string> = {}
// const Base = '/~wangxi/'
const Base = '/'
// https://vitepress.dev/reference/site-config
export default defineConfig({
	vite: {
    ssr: {
      noExternal: ['naive-ui', 'date-fns', 'vueuc']
    }
  },
	postRender(context) {
    const styleRegex = /<css-render-style>((.|\s)+)<\/css-render-style>/
    const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
    const style = styleRegex.exec(context.content)?.[1]
    const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
    if (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style
    }
    context.content = context.content.replace(styleRegex, '')
    context.content = context.content.replace(vitepressPathRegex, '')
  },
  transformHtml(code, id) {
    const html = id.split('/').pop()
    if (!html)
      return
    const style = fileAndStyles[`/${html}`]
    if (style) {
      return code.replace(/<\/head>/, `${style}</head>`)
    }
  },
	
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
				{ text: 'vue', link: '/frontend/vue' },
				{ text: '算法', link: '/frontend/algo' }
			]},
			{
				text: '后端',
				activeMatch: 'backend',
				items: [{
					text: 'Node',
					items: [
						{ text: 'nestjs', link: '/backend/node/nest/0-介绍/' },
					]
				}]
			},
      { text: 'Q&A', link: '/q&a/html', activeMatch: 'q&a', },
			{ text: '其他', activeMatch: 'other', items: [
				{ text: '游戏', link: '/other/game/魔兽/' },
			]},
			// { text: '其他', link: '/other/career', activeMatch: 'other/' }
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
			'/backend/': [
				{ text: '介绍', link: '/backend/node/nest/0-介绍' },
				{
					text: '前置知识',
					items: [
						{ text: 'IOC控制反转 DI依赖注入', link: '/backend/node/nest/1-IOC控制反转DI依赖注入' },
						{ text: '装饰器', link: '/backend/node/nest/2-装饰器' },
						{ text: 'Nestjs cli', link: '/backend/node/nest/3-nestjs-cli' },
					]
				},
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
				{ text: '魔兽', link: '/other/game/魔兽/' },
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
