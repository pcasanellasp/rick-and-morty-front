require('dotenv').config()
const { npm_package_name: Title, npm_package_description: Description, PORT, HOST } = process.env

export default {
  mode: 'universal',
  head: {
    title: Title || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: Description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#19b3ca' },
  css: [
    'https://cdn.jsdelivr.net/gh/pcasanellasp/blockscss@develop/dist/main.css',
    '@/assets/css/main.css'
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy'
    // '@nuxtjs/pwa'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api-characters/': { target: 'https://rickandmortyapi.com/api/character/', pathRewrite: { '^/api-characters/': '' } },
    '/api-episodes/': { target: 'https://rickandmortyapi.com/api/episode/', pathRewrite: { '^/api-episodes/': '' } },
    '/api-locations/': { target: 'https://rickandmortyapi.com/api/location/', pathRewrite: { '^/api-locations/': '' } }
  },
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend (config, ctx) {
    }
  },
  server: {
    port: PORT || 8010,
    host: HOST || 'localhost'
  },
  router: {
    middleware: ['useragent']
  }
}
