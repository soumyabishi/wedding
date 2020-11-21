export default {
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Pritesh & Ipsita | We’re getting married!',
    meta: [
      { charset: 'utf-8' },
      { name: 'google', content: 'notranslate' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'You are cordially invited to celebrate our marriage.',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://wedding-invitation-feb.netlify.app/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Pritesh & Ipsita | We’re getting married!',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'You are cordially invited to celebrate our marriage.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png',
      },

      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://wedding-invitation-feb.netlify.app/',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Pritesh & Ipsita | We’re getting married!',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: 'You are cordially invited to celebrate our marriage.',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content:
          'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: '~/components/loading.vue',
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '@/plugins/aos', mode: 'client' }],

  purgeCSS: {
    whitelist: [
      'aos-init',
      'aos-animate',
      'data-aos-delay',
      'data-aos-duration',
      'fade-up',
      'zoom-in',
    ],
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/imagemin',
  ],

  imagemin: {
    /* module options */
  },

  googleFonts: {
    families: {
      'IBM Plex Sans': {
        wght: [400, 500],
      },
      'IBM Plex Serif': {
        wght: [400, 500],
      },
      'Playfair Display': {
        wght: [400, 500, 600],
      },
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
