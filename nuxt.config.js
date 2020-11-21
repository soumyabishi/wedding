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
        content:
          'You are cordially invited to celebrate our marriage. Date - Sunday, Feb 7, 2021, Venue - Kanteshir, Kesinga, Odisha, 766012',
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
  modules: [
    'nuxt-social-meta',
    {
      url: 'https://wedding-invitation-feb.netlify.app/',
      title: 'Pritesh & Ipsita | We’re getting married!',
      site_name: 'Pritesh & Ipsita',
      description:
        'You are cordially invited to celebrate our marriage. Date - Sunday, Feb 7, 2021, Venue - Kanteshir, Kesinga, Odisha, 766012',
      img: '@/static/assets/images/og-image.jpg',
      locale: 'en_US',
      twitter_card: '@/static/assets/images/og-image.jpg',
    },
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
