import fs from 'fs'

// Create name for your app
const appName = 'Nuxt Tailwind'

// Create description for your app
const appDescription =
  'A Simple Dashboard Admin powered by Nuxt.JS and Tailwind CSS'

// Your default router base, usually use '',
const routerBase = ''

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.APP_NAME || appName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.APP_DESCRIPTION || appDescription,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: routerBase + 'favicon.ico' },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App`
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/t-components.js', '@/plugins/highlight.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  router: {
    base: process.env.ROUTER_BASE || routerBase,
  },

  generate: {
    routes() {
      // doc pages generator, you can remove this part if doesn't need doc pages
      const routes = ['/docs/']

      const docsFolder = './static/content/docs/'
      fs.readdirSync(docsFolder).forEach((file) => {
        routes.push('/docs/' + file.replace('.md', ''))
      })

      return routes
    },
  },

  publicRuntimeConfig: {
    appName: process.env.APP_NAME || appName,
    routerBase: process.env.ROUTER_BASE || routerBase,
  },
}
