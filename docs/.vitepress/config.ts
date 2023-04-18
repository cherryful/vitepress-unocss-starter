import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/vitepress-unocss-starter/',
  description: 'Blog included. Built on top of UnoCSS and Anu.',
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    title: 'VitePress Unocss Starter',
    search: {
      provider: 'local',
    },
    footer: {
      message: 'VitePress Unocss Starter',
      copyright: 'Copyright © 2023 infinite-creatioin',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/infinite-creation/vitepress-unocss-starter' },
    ],
    editLink: {
      pattern: 'https://github.com/infinite-creation/vitepress-unocss-starter/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },
    blog: {
      title: 'My Blog',
      description: 'Some articles for sample Blog',
    },
  } as any,
  vite: {
    plugins: [
      Unocss(),
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
  },
  head: [
    ['link', { rel: 'icon', href: 'favicon.svg' }],
  ],
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'Configs', link: '/config/', activeMatch: '/config/' },
    { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
    {
      text: 'External Docs',
      items: [
        {
          text: 'Vitepress',
          link: 'https://vitepress.vuejs.org',
        },
        {
          text: 'UnoCSS',
          link: 'https://uno.antfu.me',
        },
        {
          text: 'Anu',
          link: 'https://anu-vue.netlify.app',
        },
      ],
    },
    // {
    //   text: version,
    //   items: [
    //     {
    //       text: 'Changelog',
    //       link: 'https://github.com/sfxcode/vitepress-blog-starter/blob/main/CHANGELOG.md',
    //     },
    //   ],
    // },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is this?', link: '/guide/' },
      ],
    },
    {
      text: 'Features',
      collapsible: true,
      items: [
        { text: 'UnoCSS', link: '/guide/features/unocss' },
        { text: 'Anu', link: '/guide/features/anu' },
      ],
    },
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/' },
        { text: 'UnoCSS', link: '/config/unocss' },
        { text: 'Anu', link: '/config/anu' },
      ],
    },
  ]
}
