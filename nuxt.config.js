require('require-context/register');

module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  modules: [
    {
      src: 'nuxt-netlify-http2-server-push', 
      options: { 
        resources: [
          { path: '**/*.css', as: 'style' },
          { path: '/_nuxt/content/pages/*.json', as: 'application/json' },
        ]
      }
    },
    {
      src: '@nuxtjs/pwa', 
      options: { 
        icon: false,
        manifest: {
          start_url: '/',
          display: 'minimal-ui',
          orientation: "portrait-primary"
        }
      }
    },
    {
      src: '@nuxtjs/google-tag-manager', 
      options: { 
        id: 'GTM-N59H54M'
      }
    },
    {
      src: '@nuxtjs/robots', 
      options: { 
        UserAgent: '*',
        Disallow: '/admin',
        Sitemap: (process.env.BASE_URL || 'http://localhost:3000') + '/sitemap.xml'
      }
    },
    {
      src: 'nuxt-i18n', 
      options: { 
        locales: [
          // {
          //   code: 'de',
          //   iso: 'de-DE',
          //   file: 'de.js'
          // },
          // {
          //   code: 'en',
          //   iso: 'en-GB',
          //   file: 'en.js'
          // },
          {
            code: 'pl',
            iso: 'pl-PL',
            file: 'pl.js'
          }
        ],
        strategy: 'prefix_except_default',
        defaultLocale: 'pl',
        lazy: true,
        langDir: 'lang/',
        vuex: {
          // Module namespace
          moduleName: 'i18n',
      
          // If enabled, current app's locale is synced with nuxt-i18n store module
          syncLocale: true,
      
          // If enabled, current translation messages are synced with nuxt-i18n store module
          syncMessages: true,
      
          // Mutation to commit to set route parameters translations
          syncRouteParams: true
        },
        vueI18n: {
          fallbackLocale: 'en',
          detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_language',
            alwaysRedirect: true
          },
          seo: true
        }, 
      }
    },
    {
      src: "nuxt-netlify-cms", 
      options: { 
        adminPath: "admin",
        adminTitle: "CMS Netlify",
        cmsConfig: { 
          backend: { 
            name: 'git-gateway', 
            branch: 'main' 
          },
          media_folder: 'static/images/uploads',
          public_folder: '/images/uploads',
          locale: 'pl',
          collections: [ 
            { 
              name: 'header',
              label: 'Nagłówek',
              files: [ 
                { 
                  name: 'logo',
                  label: 'Logo',
                  file: 'content/header/logo.json',
                  fields: [ 
                    { 
                      label: '[PL] Logo - grafika',
                      name: 'pl__img',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[EN] Logo - grafika',
                      name: 'en__img',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      }, 
                    },
                    { 
                      label: '[DE] Logo - grafika',
                      name: 'de__img',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      }, 
                    },
                    { 
                      label: '[PL] Logo - atrybut ALT',
                      name: 'pl__alt',
                      widget: 'string',
                      required: true 
                    },
                    { 
                      label: '[EN] Logo - atrybut ALT',
                      name: 'en__alt',
                      widget: 'string',
                      required: true 
                    },
                    { 
                      label: '[DE] Logo - atrybut ALT',
                      name: 'de__alt',
                      widget: 'string',
                      required: true 
                    }
                  ] 
                },
                { 
                  name: 'telephone',
                  label: 'Telefon',
                  file: 'content/header/telephone.json',
                  fields: [ 
                    { 
                      label: '[PL] Telefon w nagłówku',
                      name: 'pl__telephone',
                      widget: 'string',
                      required: true 
                    },
                    { 
                      label: '[EN] Telefon w nagłówku',
                      name: 'en__telephone',
                      widget: 'string',
                      required: true 
                    },
                    { 
                      label: '[DE] Telefon w nagłówku',
                      name: 'de__telephone',
                      widget: 'string',
                      required: true 
                    }
                  ] 
                },
                {
                  name: 'languages',
                  label: 'Języki',
                  file: 'content/header/langs.json',
                  fields: [ 
                    { 
                      label: 'Dostępne języki do wyboru',
                      name: 'xx__enabled',
                      widget: 'select',
                      multiple: true,
                      options: [
                        { 
                          label: "Polski", 
                          value: "pl" 
                        },
                        { 
                          label: "Angielski", 
                          value: "en" 
                        },
                        { 
                          label: "Niemiecki", 
                          value: "de" 
                        }
                      ],
                      default: [
                        "pl"
                      ]
                    },
                  ] 
                }
              ] 
            },
            { 
              name: 'homepage',
              label: 'Strona główna',
              files: [ 
                { 
                  name: 'banner_1',
                  label: 'Baner [nr. 1]',
                  file: 'content/homepage/banner_1.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Tło',
                      name: 'pl__image',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[EN] Tło',
                      name: 'en__image',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      }, 
                    },
                    { 
                      label: '[DE] Tło',
                      name: 'de__image',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      }, 
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: false 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: false 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: false 
                    }
                  ] 
                },
                { 
                  name: 'banner_2',
                  label: 'Baner [nr. 2]',
                  file: 'content/homepage/banner_2.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Tło',
                      name: 'pl__image',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[EN] Tło',
                      name: 'en__image',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      }, 
                    },
                    { 
                      label: '[DE] Tło',
                      name: 'de__image',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      }, 
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: false 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: false 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: false 
                    }
                  ] 
                },
                { 
                  name: 'banner_3',
                  label: 'Baner [nr. 3]',
                  file: 'content/homepage/banner_3.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Tło',
                      name: 'pl__image',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[EN] Tło',
                      name: 'en__image',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      }, 
                    },
                    { 
                      label: '[DE] Tło',
                      name: 'de__image',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      }, 
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: false 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: false 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: false 
                    }
                  ] 
                },
                { 
                  name: 'text',
                  label: 'Tekst pod banerem',
                  file: 'content/homepage/text.json',
                  fields: [ 
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true,
                    }
                  ] 
                },
                { 
                  name: 'header_offer',
                  label: 'Nagłowek sekcji - Oferta',
                  file: 'content/homepage/header_offer.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true,
                    },
                  ] 
                },
                {
                  name: 'left_top_offer',
                  label: '[Lewo] Wyróżniona oferta [nad blokiem z opisem]',
                  file: 'content/homepage/left_top_offer.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Link',
                      name: 'pl__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__link',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
                {
                  name: 'middle_top_offer',
                  label: '[Środek] Wyróżniona oferta [nad blokiem z opisem]',
                  file: 'content/homepage/middle_top_offer.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Link',
                      name: 'pl__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__link',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
                {
                  name: 'right_top_offer',
                  label: '[Prawo] Wyróżniona oferta [nad blokiem z opisem]',
                  file: 'content/homepage/right_top_offer.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Link',
                      name: 'pl__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__link',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
                { 
                  name: 'button_offer',
                  label: 'Przycisk - Oferta',
                  file: 'content/homepage/button_offer.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Link',
                      name: 'pl__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__link',
                      widget: 'string',
                      required: true,
                    }
                  ] 
                },
                {
                  name: 'about_description',
                  label: 'Blok z opisem',
                  file: 'content/homepage/about_description.json',
                  fields: [
                    {
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'text',
                      required: true,
                    },
                    {
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'text',
                      required: true,
                    },
                    {
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'text',
                      required: true,
                    },
                    {
                      label: '[PL] Link',
                      name: 'pl__link',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: '[EN] Link',
                      name: 'en__link',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: '[DE] Link',
                      name: 'de__link',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: '[PL] Tytuł linku',
                      name: 'pl__link_title',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: '[EN] Tytuł linku',
                      name: 'en__link_title',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: '[DE] Tytuł linku',
                      name: 'de__link_title',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: 'Zdjęcie',
                      name: 'xx__photo',
                      widget: 'image',
                      required: false,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    }
                  ]
                },
                { 
                  name: 'header_issue',
                  label: 'Nagłowek sekcji - Twój problem',
                  file: 'content/homepage/header_issue.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true,
                    },
                  ] 
                },
                {
                  name: 'left_bottom_offer',
                  label: '[Lewo] Wyróżniona oferta [nad blokiem z opisem]',
                  file: 'content/homepage/left_bottom_offer.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Link',
                      name: 'pl__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__link',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
                {
                  name: 'middle_bottom_offer',
                  label: '[Środek] Wyróżniona oferta [nad blokiem z opisem]',
                  file: 'content/homepage/middle_bottom_offer.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Link',
                      name: 'pl__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__link',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
                {
                  name: 'right_bottom_offer',
                  label: '[Prawo] Wyróżniona oferta [nad blokiem z opisem]',
                  file: 'content/homepage/right_bottom_offer.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Link',
                      name: 'pl__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__link',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
                { 
                  name: 'button_issue',
                  label: 'Przycisk - Twój problem',
                  file: 'content/homepage/button_issue.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Link',
                      name: 'pl__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__link',
                      widget: 'string',
                      required: true,
                    }
                  ] 
                },
                {
                  name: 'breadcrumb',
                  label: "Tytuł linku na podstronach w nagłówku (breadcrumb)",
                  file: 'content/homepage/breadcrumb.json',
                  fields: [
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                  ]
                }
              ] 
            },
            {
              name: 'about',
              label: 'O nas',
              files: [ 
                { 
                  name: 'menu',
                  label: 'Menu',
                  file: 'content/about/menu.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    }
                  ]
                },
                { 
                  name: 'header',
                  file: 'content/about/header.json',
                  label: 'Nagłówek',
                  fields: [ 
                    { 
                      label: 'Baner',
                      name: 'xx__image',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true,
                    }
                  ]
                },
                { 
                  name: 'section_title',
                  label: 'Tytuł dla sekcji z osobami',
                  file: 'content/about/section_title.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    }
                  ]
                },
                { 
                  name: 'person_1',
                  label: 'Osoba nr. 1',
                  file: 'content/about/person_1.json',
                  fields: [ 
                    { 
                      label: 'Zdjęcie',
                      name: 'xx__photo',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: 'Link',
                      name: 'xx__link',
                      widget: 'string',
                      required: false,
                    },
                    { 
                      label: '[PL] Tytuł linku',
                      name: 'pl__link_title',
                      widget: 'string',
                      required: false,
                    },
                    { 
                      label: '[EN] Tytuł linku',
                      name: 'en__link_title',
                      widget: 'string',
                      required: false,
                    },
                    { 
                      label: '[DE] Tytuł linku',
                      name: 'de__link_title',
                      widget: 'string',
                      required: false,
                    }
                  ]
                },
                { 
                  name: 'person_2',
                  label: 'Osoba nr. 2',
                  file: 'content/about/person_2.json',
                  fields: [ 
                    { 
                      label: 'Zdjęcie',
                      name: 'xx__photo',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: 'Link',
                      name: 'xx__link',
                      widget: 'string',
                      required: false,
                    },
                    { 
                      label: '[PL] Tytuł linku',
                      name: 'pl__link_title',
                      widget: 'string',
                      required: false,
                    },
                    { 
                      label: '[EN] Tytuł linku',
                      name: 'en__link_title',
                      widget: 'string',
                      required: false,
                    },
                    { 
                      label: '[DE] Tytuł linku',
                      name: 'de__link_title',
                      widget: 'string',
                      required: false,
                    }
                  ]
                },
                { 
                  name: 'person_3',
                  label: 'Osoba nr. 3',
                  file: 'content/about/person_3.json',
                  fields: [ 
                    { 
                      label: 'Zdjęcie',
                      name: 'xx__photo',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: 'Link',
                      name: 'xx__link',
                      widget: 'string',
                      required: false,
                    },
                    { 
                      label: '[PL] Tytuł linku',
                      name: 'pl__link_title',
                      widget: 'string',
                      required: false,
                    },
                    { 
                      label: '[EN] Tytuł linku',
                      name: 'en__link_title',
                      widget: 'string',
                      required: false,
                    },
                    { 
                      label: '[DE] Tytuł linku',
                      name: 'de__link_title',
                      widget: 'string',
                      required: false,
                    }
                  ]
                },
                { 
                  name: 'button',
                  label: 'Przycisk - Oferta',
                  file: 'content/about/button.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Link',
                      name: 'pl__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__link',
                      widget: 'string',
                      required: true,
                    }
                  ] 
                },
                {
                  name: 'breadcrumb',
                  label: "Tytuł linku na podstronach w nagłówku (breadcrumb)",
                  file: 'content/about/breadcrumb.json',
                  fields: [
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                  ]
                }
              ]
            },
            {
              name: 'offer',
              label: 'Oferta',
              files: [ 
                { 
                  name: 'menu',
                  label: 'Menu',
                  file: 'content/offer/menu.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    }
                  ]
                },
                {
                  name: 'header',
                  label: 'Nagłówek',
                  file: 'content/offer/header.json',
                  fields: [
                    { 
                      label: 'Baner',
                      name: 'xx__image',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true,
                    }
                  ]
                },
                {
                  name: 'breadcrumb',
                  label: "Tytuł linku na podstronach w nagłówku (breadcrumb)",
                  file: 'content/offer/breadcrumb.json',
                  fields: [
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
                {
                  name: 'cat_1_offer',
                  label: '[Lewo - Góra] Kategoria nr.1',
                  file: 'content/offer/category_1.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                  ]
                },
                {
                  name: 'cat_2_offer',
                  label: '[Środek - Góra] Kategoria nr.2',
                  file: 'content/offer/category_2.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                  ]
                },
                {
                  name: 'cat_3_offer',
                  label: '[Prawo - Góra] Kategoria nr.3',
                  file: 'content/offer/category_3.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                  ]
                },
                {
                  name: 'cat_4_offer',
                  label: '[Lewo - Dół] Kategoria nr. 4',
                  file: 'content/offer/category_4.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                  ]
                },
                {
                  name: 'cat_5_offer',
                  label: '[Środek - Dół] Kategoria nr. 5',
                  file: 'content/offer/category_5.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                  ]
                },
                {
                  name: 'cat_6_offer',
                  label: '[Prawo - Dół] Kategoria nr. 6',
                  file: 'content/offer/cat_egory6_json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                  ]
                },
                { 
                  name: 'section_title',
                  label: 'Tytuł dla sekcji z osobami',
                  file: 'content/offer/section_title.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    }
                  ]
                },
                { 
                  name: 'promotion_line_1',
                  label: 'Promowana oferta [pozycja nr.1]',
                  file: 'content/offer/promotion_line_1.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Zdjęcie',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[PL] Link',
                      name: 'pl__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Tytuł linku',
                      name: 'pl__link_title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł linku',
                      name: 'en__link_title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł linku',
                      name: 'de__link_title',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
                { 
                  name: 'promotion_line_2',
                  label: 'Promowana oferta [pozycja nr.2]',
                  file: 'content/offer/promotion_line_2.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Zdjęcie',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[PL] Link',
                      name: 'pl__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Tytuł linku',
                      name: 'pl__link_title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł linku',
                      name: 'en__link_title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł linku',
                      name: 'de__link_title',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
                { 
                  name: 'promotion_line_3',
                  label: 'Promowana oferta [pozycja nr.3]',
                  file: 'content/offer/promotion_line_3.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Zdjęcie',
                      name: 'xx__background',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[PL] Link',
                      name: 'pl__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__link',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Tytuł linku',
                      name: 'pl__link_title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł linku',
                      name: 'en__link_title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł linku',
                      name: 'de__link_title',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
              ]
            },
            {
              name: 'offer_collection',
              label: 'Oferta [Pozycja]', 
              folder: 'content/_offer',
              format: 'json',
              extension: 'json',
              create: true,
              identifier_field: 'xx__slug',
              fields: [
                { 
                  label: 'Adres URL',
                  name: 'xx__slug',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: 'Przyporządkowana kategoria',
                  name: 'xx__category',
                  widget: 'select',
                  default: ["1"],
                  options: [
                    {
                      label: "Kategoria nr. 1", 
                      value: "1"
                    }, 
                    {
                      label: "Kategoria nr. 2", 
                      value: "2"
                    }, 
                    {
                      label: "Kategoria nr. 3", 
                      value: "3"
                    }, 
                    {
                      label: "Kategoria nr. 4", 
                      value: "4"
                    },
                    {
                      label: "Kategoria nr. 5", 
                      value: "5"
                    },
                    {
                      label: "Kategoria nr. 6", 
                      value: "6"
                    }, 
                  ],
                  required: true,
                },
                { 
                  label: '[PL] Tytuł',
                  name: 'pl__title',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[EN] Tytuł',
                  name: 'en__title',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[DE] Tytuł',
                  name: 'de__title',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[PL] Opis nad informacją wyróżnioną',
                  name: 'pl__description_top',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[EN] Opis nad informacją wyróżnioną',
                  name: 'en__description_top',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[DE] Opis nad informacją wyróżnioną',
                  name: 'de__description_top',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[PL] Informacja wyróżniona',
                  name: 'pl__description_promo',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[EN] Informacja wyróżniona',
                  name: 'en__description_promo',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[DE] Informacja wyróżniona',
                  name: 'de__description_promo',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[PL] Opis pod informacją wyróżnioną',
                  name: 'pl__description_bottom',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[EN] Opis pod informacją wyróżnioną',
                  name: 'en__description_bottom',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[DE] Opis pod informacją wyróżnioną',
                  name: 'de__description_bottom',
                  widget: 'markdown',
                  required: false,
                },
              ]
            },
            {
              name: 'tariff',
              label: 'Cennik',
              files: [
                { 
                  name: 'menu',
                  label: 'Menu',
                  file: 'content/tariff/menu.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    }
                  ]
                },
                { 
                  name: 'header',
                  label: 'Nagłówek',
                  file: 'content/tariff/header.json',
                  fields: [ 
                    { 
                      label: 'Baner',
                      name: 'xx__image',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
                {
                  name: 'breadcrumb',
                  label: "Tytuł linku na podstronach w nagłówku (breadcrumb)",
                  file: 'content/tariff/breadcrumb.json',
                  fields: [
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                  ]
                }
              ]
            },
            {
              name: 'prices',
              label: 'Cennik [Pozycja]', 
              folder: 'content/_tariff',
              format: 'json',
              extension: 'json',
              create: true,
              identifier_field: 'xx__identifier',
              fields: [
                { 
                  label: 'Identyfikator',
                  name: 'xx__identifier',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: 'Poziom nagłówka',
                  name: 'xx__header_lvl',
                  widget: 'select',
                  default: ["3"],
                  options: [
                    {
                      label: "Główny", 
                      value: "1"
                    }, 
                    {
                      label: "Podrzędny", 
                      value: "2"
                    }, 
                    {
                      label: "Wpis", 
                      value: "3"
                    }, 
                  ],
                  required: true,
                },
                { 
                  label: '[PL] Tytuł',
                  name: 'pl__title',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[EN] Tytuł',
                  name: 'en__title',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[DE] Tytuł',
                  name: 'de__title',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[PL] Cena',
                  name: 'pl__price',
                  widget: 'string',
                  required: true,
                  default: "-"
                },
                { 
                  label: '[EN] Cena',
                  name: 'en__price',
                  widget: 'string',
                  required: true,
                  default: "-"
                },
                { 
                  label: '[DE] Cena',
                  name: 'de__price',
                  widget: 'string',
                  required: true,
                  default: "-"
                }, 
                { 
                  label: 'Pozycja',
                  name: 'xx__position',
                  widget: 'string',
                  hint: "Wpisana liczba powoduje ustawienie elementu za pozycją o danym numerze.  Nie ustawione - uznaje kolejność dodania. Proponujemy dodawać 10 bo ta sama liczba nadpisze istniejący wpis a zmiana łatwiejsza będzie gdy jest możliwość wyboru między dziesiątkami",
                  required: false,
                }, 
              ]
            },
            {
              name: 'issue',
              label: 'Twój problem',
              files: [ 
                { 
                  name: 'menu',
                  label: 'Menu',
                  file: 'content/issue/menu.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    }
                  ]
                },
                { 
                  name: 'header',
                  file: 'content/issue/header.json',
                  label: 'Nagłówek',
                  fields: [ 
                    { 
                      label: 'Baner',
                      name: 'xx__image',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true,
                    }
                  ]
                },
                {
                  name: 'breadcrumb',
                  label: "Tytuł linku na podstronach w nagłówku (breadcrumb)",
                  file: 'content/issue/breadcrumb.json',
                  fields: [
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
              ]
            },
            {
              name: 'issue_collection',
              label: 'Twój problem [Pozycja]', 
              folder: 'content/_issue',
              format: 'json',
              extension: 'json',
              create: true,
              identifier_field: 'xx__slug',
              fields: [
                { 
                  label: 'Adres URL',
                  name: 'xx__slug',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[PL] Tytuł',
                  name: 'pl__title',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[EN] Tytuł',
                  name: 'en__title',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[DE] Tytuł',
                  name: 'de__title',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[PL] Opis nad informacją wyróżnioną',
                  name: 'pl__description_top',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[EN] Opis nad informacją wyróżnioną',
                  name: 'en__description_top',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[DE] Opis nad informacją wyróżnioną',
                  name: 'de__description_top',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[PL] Informacja wyróżniona',
                  name: 'pl__description_promo',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[EN] Informacja wyróżniona',
                  name: 'en__description_promo',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[DE] Informacja wyróżniona',
                  name: 'de__description_promo',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[PL] Opis pod informacją wyróżnioną',
                  name: 'pl__description_bottom',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[EN] Opis pod informacją wyróżnioną',
                  name: 'en__description_bottom',
                  widget: 'markdown',
                  required: false,
                },
                { 
                  label: '[DE] Opis pod informacją wyróżnioną',
                  name: 'de__description_bottom',
                  widget: 'markdown',
                  required: false,
                },
              ]
            },
            {
              name: 'media',
              label: 'Media',
              files: [ 
                { 
                  name: 'menu',
                  label: 'Menu',
                  file: 'content/media/menu.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    }
                  ]
                },
                { 
                  name: 'header',
                  file: 'content/media/header.json',
                  label: 'Nagłówek',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: true,
                    }
                  ]
                },
                { 
                  name: 'subheader',
                  file: 'content/media/subheader.json',
                  label: 'Tytuł podrzędny',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    }
                  ]
                },
                {
                  name: 'breadcrumb',
                  label: "Tytuł linku na podstronach w nagłówku (breadcrumb)",
                  file: 'content/media/breadcrumb.json',
                  fields: [
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                  ]
                }
              ]
            },
            { 
              name: 'media_collection',
              label: 'Media [Pozycja]',
              folder: 'content/_media',
              format: 'json',
              extension: 'json',
              create: true,
              identifier_field: 'en__caption',
              fields: [ 
                { 
                  label: 'Zdjęcie',
                  name: 'xx__image',
                  widget: 'image',
                  required: true,
                  media_library: {
                    config: {
                      multiple: false
                    }
                  },
                },
                { 
                  label: '[PL] Tytuł',
                  name: 'pl__caption',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[EN] Tytuł',
                  name: 'en__caption',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[DE] Tytuł',
                  name: 'de__caption',
                  widget: 'string',
                  required: true,
                }
              ]
            },
            {
              name: 'contact',
              label: 'Kontakt',
              files: [ 
                { 
                  name: 'menu',
                  label: 'Menu',
                  file: 'content/contact/menu.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    }
                  ]
                },
                {
                  name: 'title',
                  label: 'Tytuł',
                  file: 'content/contact/title.json',
                  fields: [
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
                { 
                  name: 'description',
                  label: 'Opis',
                  file: 'content/contact/description.json',
                  fields: [
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: false,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: false,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: false,
                    },
                  ]
                },
                {
                  name: 'breadcrumb',
                  label: "Tytuł linku na podstronach w nagłówku (breadcrumb)",
                  file: 'content/contact/breadcrumb.json',
                  fields: [
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                  ]
                }
              ]
            },
            {
              name: 'footer',
              label: 'Stopka',
              files: [ 
                {
                  name: 'links',
                  label: 'Linki',
                  file: 'content/footer/links.json',
                  fields: [
                    { 
                      label: '[PL] Link lewy',
                      name: 'pl__link_1',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link lewy',
                      name: 'en_link_1',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link lewy',
                      name: 'de__link_1',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Link prawy',
                      name: 'pl__link_2',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link prawy',
                      name: 'en_link_2',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link prawy',
                      name: 'de__link_2',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
                {
                  name: 'partners',
                  label: 'Partnerzy',
                  file: 'content/footer/partners.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Logo partnera [1]',
                      name: 'xx__logo_1',
                      widget: 'image',
                      required: false,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: 'Logo partnera [2]',
                      name: 'xx__logo_2',
                      widget: 'image',
                      required: false,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: 'Logo partnera [3]',
                      name: 'xx__logo_3',
                      widget: 'image',
                      required: false,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: 'Logo partnera [4]',
                      name: 'xx__logo_4',
                      widget: 'image',
                      required: false,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: 'Logo partnera [5]',
                      name: 'xx__logo_5',
                      widget: 'image',
                      required: false,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                    { 
                      label: 'Logo partnera [6]',
                      name: 'xx__logo_6',
                      widget: 'image',
                      required: false,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    },
                  ]
                },
                { 
                  name: 'company',
                  label: 'O firmie',
                  file: 'content/footer/company.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__ctitle',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Adres',
                      name: 'pl__adress',
                      widget: 'text',
                      required: true,
                    },
                    { 
                      label: '[EN] Adres',
                      name: 'en__adress',
                      widget: 'text',
                      required: true,
                    },
                    { 
                      label: '[DE] Adres',
                      name: 'de__adress',
                      widget: 'text',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'markdown',
                      required: false,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'markdown',
                      required: false,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'markdown',
                      required: false,
                    },
                  ]
                },
                { 
                  name: 'opening',
                  label: 'Godziny otwarcia',
                  file: 'content/footer/opening.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Godziny otwarcia',
                      name: 'pl__hours',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Godziny otwarcia',
                      name: 'en__hours',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Godziny otwarcia',
                      name: 'de__hours',
                      widget: 'markdown',
                      required: true,
                    }
                  ]
                },
                { 
                  name: 'contact',
                  label: 'Dane kontaktowe',
                  file: 'content/footer/contact.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Telefon',
                      name: 'pl__telephone',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Telefon',
                      name: 'en__telephone',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Telefon',
                      name: 'de__telephone',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Email',
                      name: 'pl__email',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Email',
                      name: 'en__email',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Email',
                      name: 'de__email',
                      widget: 'string',
                      required: true,
                    }
                  ]
                },
                { 
                  name: 'payment',
                  label: 'Płatność',
                  file: 'content/footer/payment.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__description',
                      widget: 'text',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__description',
                      widget: 'text',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__description',
                      widget: 'text',
                      required: true,
                    }
                  ]
                }
              ]
            },
          ] 
        }
      }
    },
    {
      src: "@nuxtjs/sitemap",
      options: {
        hostname: process.env.BASE_URL || 'http://localhost:3000'
      }
    },  
    {
      src: '@nuxtjs/markdownit',
      options: {
        preset: 'default',
        linkify: true,
        breaks: true,
        injected: true,
        html: true
      }
    },    
    {
      src: '@nuxtjs/tailwindcss',
      options: {
        cssPath: '~/assets/css/styles.css',
        purgeCSSInDev: false,
        exposeConfig: true
      }
    },
    {
      src: '@nuxtjs/axios',
      options: {}
    },
    {
      src: 'nuxt-webfontloader',
      options: {}
    },
    {
      src: '@bazzite/nuxt-optimized-images',
      options: {
        optimizeImages: false
      }
    },
    {
      src: '@teamnovu/nuxt-breaky',
      options: {
        enabled: true,
        enableInProd: false,
        colorScheme: 'auto',
        position: 'bottomRight'
      }
    },
    {
      src: 'optimize-spaces',
      options: {}
    },
    {
      src: 'nuxt-polyfill',
      options: {}
    },
  ],
  webfontloader: {
    google: {
      families: [
        'Montserrat:400,600:latin,latin-ext&display=swap', 
        'Source Sans Pro:300,i300,400:latin,latin-ext&display=swap'
      ]
    }
  },
  manifest: {
    lang: 'pl',
    display: "browser",
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
  plugins: [
    { src: '~plugins/swiper.js', mode: 'client', ssr: false },
    { src: '~plugins/break.js'},
    { src: '~plugins/resize.js'},
    { src: '~plugins/filters/uppercase.js'},
    { src: '~plugins/filters/italicAsAddress.js'},
    { src: '~plugins/lightGallery.js', mode: 'client', ssr: false },
    { src: '~plugins/aos.js', mode: 'client', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#FFBB43" },
  css: [
    '~/assets/css/styles.css',
    '~/assets/css/custom.css'
  ],
  purgeCSS: {
    whitelist: ['css-selector-to-whitelist'],
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
    terser: {
      parallel: true,
      cache: true,
      sourceMap: false,
      extractComments: {
        filename: 'LICENSES',
        banner: () => {
          return false;
        },
      },
      terserOptions: {
        mangle: true,
        compress: true,
        output: {
          comments: /^\**!|@preserve|@license|@cc_on/,
        }
      }
    },
    render: {
      compressor: true,
      http2: {
        push: true,
        gzip: 9
      },
      bundleRenderer: {
        directives: {
          t: require("vue-i18n-extensions").directive
        }
      }
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev }) {

      config.module.rules.push({
        test: /\.(ico)$/,
        loader: 'file-loader',
        exclude: /(node_modules)/
      });

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
  generate: {
    dir: "public",
    routes (callback) {
      const requireContext = require('require-context');
      const path = require('path');
      const filesWithData = requireContext('../../content', true, /^(.*\.(json$))[^.]*$/im);

      const langArray = [
        // {
        //   code: 'de',
        //   default: false,
        //   iso: 'de-DE',
        //   file: 'de.js'
        // },
        // {
        //   code: 'en',
        //   default: false,
        //   iso: 'en-GB',
        //   file: 'en.js'
        // },
        {
          code: 'pl',
          default: true,
          iso: 'pl-PL',
          file: 'pl.js'
        }
      ];
      let routes = [];

  
      filesWithData.keys().forEach(filePath => {
      

        let filePathProcessed = filePath.split(path.sep);

        if(filePathProcessed[0] === '.'){
          filePathProcessed.shift();
        }

        if(filePathProcessed[0][0] === '_'){ 
          let url = filePathProcessed[1].substr(0, filePathProcessed[1].lastIndexOf('.')) || filePathProcessed[1];
          // let entryCollection = filesWithData(filePath); @TODO: read language from file, not from
          langArray.forEach(lang => {
            if(lang.default){
              routes.push(path.sep.concat(url));
            } else {
              routes.push(path.sep.concat(lang.code,path.sep,url));
            }
          });
        }
      });

      callback(null, routes);
    }
  }
};
