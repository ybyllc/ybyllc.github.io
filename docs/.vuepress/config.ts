import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  bundler: webpackBundler(),
  lang: 'zh-CN',
  title: '我的博客',
  description: '个人博客网站',
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/html-posts/' },
      { text: '我的第一篇博客', link: '/html-posts/first-post.html' }
    ]
  }),
  markdown: { html: true }
})
