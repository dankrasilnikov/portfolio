const config = require('./developer.json')
const siteTitle = `${config.name} | ${config.role}`


/*
 * Nuxt 3 Config File
 Usage: https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({

  /**
   * * App Config
   * app config: https://nuxt.com/docs/api/configuration/nuxt-config#app
   * head config: https://nuxt.com/docs/api/configuration/nuxt-config#head
   * meta config: https://nuxt.com/docs/getting-started/seo-meta
   * pageTransition config: https://nuxt.com/docs/getting-started/transitions#transitions
   * TODO: Add more meta tags for SEO
   * TODO: Add tags for social media sharing
   * TODO: Migrate apple-touch-icon config to manifest.json
   */
  app: {
    head: {
      title: siteTitle, // App window nav title
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Explore the portfolio of Daniil Krasilnikov, a highly skilled FullStack Developer with expertise in React, Svelte, Node.js, and TypeScript. See past projects and success stories.' },
        { hid: 'og:title', property: 'og:title', content: siteTitle },
        { hid: 'og:description', property: 'og:description', content: 'Discover cutting-edge web applications and SaaS solutions built by Daniil Krasilnikov. Get inspired by innovative designs and robust backend systems.' },
        { hid: 'og:image', property: 'og:image', content: 'https://krasilnikov.info/demo-share.png' },
        { hid: 'og:url', property: 'og:url', content: 'https://krasilnikov.info/' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: siteTitle },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Explore the professional portfolio of Daniil Krasilnikov, showcasing modern web applications, SaaS solutions, and IoT interfaces.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://krasilnikov.info/demo-share.png' },
        { name: 'theme-color', content: '#010C15' },
        { name: 'keywords', content: 'FullStack Developer, React, Svelte, TypeScript, Node.js, SaaS, Portfolio, Developer Portfolio' },
        { name: 'author', content: 'Daniil Krasilnikov' },
        { name: 'robots', content: 'index, follow' },
        { name: 'canonical', content: 'https://krasilnikov.info/' }
      ],
      link: [
        { rel: 'manifest', href: 'pwa/manifest.json' },
        { rel: 'apple-touch-icon', href: 'pwa/icons/apple-touch-icon.png' },
      ],
    },
  },

  /**
   * * Nuxt 3 Modules
   * Official modules: https://nuxt.com/modules
   */
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag'],

  components: {
    dirs: [
      '~/components',
    ],
  },

  /**
   * * Tailwind CSS Config
   * Options: https://tailwindcss.nuxt.dev/getting-started/options/
   * Docs: https://tailwindcss.nuxt.dev
   */
  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true, // true to resolve the tailwind config in runtime. https://tailwindcss.nuxt.dev/getting-started/options/#exposeconfig
    injectPosition: 0,
    viewer: false,
  },
  gtag: {
    id: 'G-CT4413VL1D'
  },

  /**
   * * Runtime Config (Environment Variables)
   * Usage: https://nuxt.com/docs/guide/going-further/runtime-config
   */
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
      dev: config
    }
  }
})
