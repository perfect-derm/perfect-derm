module.exports = {
  modules: [
    [
      'nuxt-netlify-http2-server-push',
      {
        // Specify relative path to the dist directory and its content type
        resources: [
          { path: '**/*.css', as: 'style' },
          { path: '/_nuxt/content/pages/*.json', as: 'application/json' },
        ]
      }
    ],
    [
      '@nuxtjs/pwa',
      {
        icon: false
      }
    ],
    [
      '@nuxtjs/google-tag-manager',
      {
        id: 'GTM-N59H54M'
      }
    ],
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: '/admin',
        Sitemap: (process.env.BASE_URL || 'http://localhost:3000') + '/sitemap.xml'
      }
    ],
    ['@reallifedigital/nuxt-image-loader-module', {
      imagesBaseDir: 'dist',
      imageStyles: {
        small: {
          macros: ['scaleAndCrop|160|90'],
          actions: ['quality|80']
        },
        medium: {
          macros: ['scaleAndCrop|320|180'],
          actions: ['quality|80']
        },
        large: {
          macros: ['scaleAndCrop|640|360'],
          actions: ['quality|80']
        },
        banner: {
          macros: ['scaleAndCrop|1920|1080'],
          actions: ['quality|90']
        },
      },
      // Optional responsive style profiles:
      responsiveStyles: {
        large: {
          srcset: 'small 160w, medium 320w, large 640w, banner 1200w',
          sizes: '(min-width: 1280px) 100vw, 50vw',
        },
        thumb: {
          srcset: 'small 160w, medium 320w, large 640w',
          sizes: '(min-width: 1280px) 100vw, 50vw',
        },
      },
    }],
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    'nuxt-polyfill'
  ],
  manifest: {
    lang: 'pl',
    display: "browser",
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  sitemap: {
    hostname: process.env.BASE_URL || 'http://localhost:3000'
  },
  polyfill: {
    features: [
      // {
      //   require: 'intersection-observer',
      //   detect: () => 'IntersectionObserver' in window,
      // }
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'pl',
    },
    title: "perfect-derm.com",
    meta:
      [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: ""
        },
        {name: "robots", content: "INDEX, FOLLOW"}
      ],
    link:
      [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#FFBB43" },
  css: [
    '~/assets/css/styles.css',
    '~/assets/css/custom.css'
  ],
  axios: {
    baseURL: 'http://localhost:3000',
    host: "localhost",
    debug: true
  },
  /*
  ** Build configuration
  */
  build: {
    html: {
      minify: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true,
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
};
