import redirectSSL from 'redirect-ssl';

require('dotenv').config();

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Classic Mini DIY',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/fgm1hlg.css', media: 'print', onload: 'this.media="all"' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/main.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/buefy.js',
    { src: '~plugins/vue-highcharts.js', ssr: false },
    { src: '~plugins/vue-navigation-bar.js', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
    '@bazzite/nuxt-optimized-images',
    'nuxt-compress'
  ],
  serverMiddleware: [
    // Will register redirect-ssl npm package
    redirectSSL.create({ enabled: process.env.NODE_ENV === 'production' })
  ],
  googleAnalytics: {
    id: 'UA-53914731-2'
  },
  optimizedImages: {
    optimizeImages: true
  },
  build: {
    optimizeCSS: true
  },
  env: {
    youtube: {
      key: process.env.YoutubeKey,
      id: process.env.YoutubeID
    }
  }
};
