module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  modules: [
    [
      'nuxt-netlify-http2-server-push',
      {
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
    [
      '@reallifedigital/nuxt-image-loader-module', 
      {
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
        responsiveStyles: 
        {
          large: {
            srcset: 'small 160w, medium 320w, large 640w, banner 1200w',
            sizes: '(min-width: 1280px) 100vw, 50vw',
          },
          thumb: {
            srcset: 'small 160w, medium 320w, large 640w',
            sizes: '(min-width: 1280px) 100vw, 50vw',
          },
        },
      }
    ],
    [
      'nuxt-i18n',
       {
        locales: [
          {
            code: 'de',
            iso: 'de-DE',
            file: 'de.js'
          },
          {
            code: 'en',
            iso: 'en-GB',
            file: 'en.js'
          },
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
        vueI18n: {
          fallbackLocale: 'en',
          detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_language',
            alwaysRedirect: true
          },
          seo: true
        } 
      }
    ],
    [
      "nuxt-netlify-cms", 
      { 
        adminPath: "admin",
        adminTitle: "CMS Netlify",
        cmsConfig: { 
          backend: { 
            name: 'git-gateway', 
            branch: 'master' 
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
                      name: 'pl__header__logo__img',
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
                      name: 'en__header__logo__img',
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
                      name: 'de__header__logo__img',
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
                      name: 'pl__header__logo__alt',
                      locale: 'pl',
                      widget: 'string',
                      required: true 
                    },
                    { 
                      label: '[EN] Logo - atrybut ALT',
                      name: 'en__header__logo__alt',
                      locale: 'en',
                      widget: 'string',
                      required: true 
                    },
                    { 
                      label: '[DE] Logo - atrybut ALT',
                      name: 'de__header__logo__alt',
                      locale: 'de',
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
                      name: 'pl__header__telephone',
                      locale: 'pl',
                      widget: 'string',
                      required: true 
                    },
                    { 
                      label: '[EN] Telefon w nagłówku',
                      name: 'en__header__telephone',
                      locale: 'en',
                      widget: 'string',
                      required: true 
                    },
                    { 
                      label: '[DE] Telefon w nagłówku',
                      name: 'de__header__telephone',
                      locale: 'de',
                      widget: 'string',
                      required: true 
                    }
                  ] 
                },
                {
                  name: 'languages',
                  label: 'Języki',
                  fields: [ 
                    { 
                      label: 'Dostępne języki do wyboru',
                      name: 'xx__header__languages__enabled',
                      widget: 'select',
                      multiple: true,
                      options: [
                        { 
                          label: "Polski", 
                          value: "PL" 
                        },
                        { 
                          label: "Angielski", 
                          value: "EN" 
                        },
                        { 
                          label: "Niemiecki", 
                          value: "DE" 
                        }
                      ],
                      default: [
                        "PL"
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
                      label: '[PL] Tło',
                      name: 'pl__homepage__banner_1__image',
                      locale: 'pl',
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
                      name: 'en__homepage__banner_1__image',
                      locale: 'en',
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
                      name: 'de__homepage__banner_1__image',
                      locale: 'de',
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
                      name: 'pl__homepage__banner_1__description',
                      locale: 'pl',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__homepage__banner_1__description',
                      locale: 'en',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__homepage__banner_1__description',
                      locale: 'de',
                      widget: 'markdown',
                      required: true 
                    }
                  ] 
                },
                { 
                  name: 'banner_2',
                  label: 'Baner [nr. 2]',
                  file: 'content/homepage/banner_2.json',
                  fields: [ 
                    { 
                      label: '[PL] Tło',
                      name: 'pl__homepage__banner_2__image',
                      locale: 'pl',
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
                      name: 'en__homepage__banner_2__image',
                      locale: 'en',
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
                      name: 'de__homepage__banner_2__image',
                      locale: 'de',
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
                      name: 'pl__homepage__banner_2__description',
                      locale: 'pl',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__homepage__banner_2__description',
                      locale: 'en',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__homepage__banner_2__description',
                      locale: 'de',
                      widget: 'markdown',
                      required: true 
                    }
                  ] 
                },
                { 
                  name: 'banner_3',
                  label: 'Baner [nr. 3]',
                  file: 'content/homepage/banner_3.json',
                  fields: [ 
                    { 
                      label: '[PL] Tło',
                      name: 'pl__homepage__banner_3__image',
                      locale: 'pl',
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
                      name: 'en__homepage__banner_3__image',
                      locale: 'en',
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
                      name: 'de__homepage__banner_3__image',
                      locale: 'de',
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
                      name: 'pl__homepage__banner_3__description',
                      locale: 'pl',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__homepage__banner_3__description',
                      locale: 'en',
                      widget: 'markdown',
                      required: true 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__homepage__banner_3__description',
                      locale: 'de',
                      widget: 'markdown',
                      required: true 
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
                      name: 'pl__homepage__text__description',
                      locale: 'pl',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__homepage__text__description',
                      locale: 'en',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__homepage__text__description',
                      locale: 'de',
                      widget: 'markdown',
                      required: true,
                    }
                  ] 
                },
                { 
                  name: 'button_first',
                  label: 'Przycisk do akcji [pod banerem i tekstem]',
                  file: 'content/homepage/button_first.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__homepage__button_first__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__homepage__button_first__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__homepage__button_first__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Link',
                      name: 'pl__homepage__button_first__link',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__homepage__button_first__link',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__homepage__button_first__link',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    }
                  ] 
                },
                {
                  name: 'left_top_offer',
                  label: '[Lewo] Wyróżniona oferta [nad blokiem z opisem]',
                  file: 'content/homepage/left_top_offer.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__homepage__left_top_offer__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__homepage__left_top_offer__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__homepage__left_top_offer__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__homepage__left_top_offer__background',
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
                      name: 'pl__homepage__left_top_offer__link',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__homepage__left_top_offer__link',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__homepage__left_top_offer__link',
                      locale: 'de',
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
                      name: 'pl__homepage__middle_top_offer__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__homepage__middle_top_offer__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__homepage__middle_top_offer__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__homepage__middle_top_offer__background',
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
                      name: 'pl__homepage__middle_top_offer__link',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__homepage__middle_top_offer__link',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__homepage__middle_top_offer__link',
                      locale: 'de',
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
                      name: 'pl__homepage__right_top_offer__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__homepage__right_top_offer__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__homepage__right_top_offer__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__homepage__right_top_offer__background',
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
                      name: 'pl__homepage__right_top_offer__link',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__homepage__right_top_offer__link',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__homepage__right_top_offer__link',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
                {
                  name: 'about_description',
                  label: 'Blok z opisem',
                  file: 'content/homepage/about_description.json',
                  fields: [
                    {
                      label: '[PL] Tytuł',
                      name: 'pl__homepage__about_description__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: '[EN] Tytuł',
                      name: 'en__homepage__about_description__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: '[DE] Tytuł',
                      name: 'de__homepage__about_description__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: '[PL] Opis',
                      name: 'pl__homepage__about_description__description',
                      locale: 'pl',
                      widget: 'text',
                      required: true,
                    },
                    {
                      label: '[EN] Opis',
                      name: 'en__homepage__about_description__description',
                      locale: 'en',
                      widget: 'text',
                      required: true,
                    },
                    {
                      label: '[DE] Opis',
                      name: 'de__homepage__about_description__description',
                      locale: 'de',
                      widget: 'text',
                      required: true,
                    },
                    {
                      label: '[PL] Link',
                      name: 'pl__homepage__about_description__link',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: '[EN] Link',
                      name: 'en__homepage__about_description__link',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: '[DE] Link',
                      name: 'de__homepage__about_description__link',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                    {
                      label: 'Zdjęcie',
                      name: 'xx__homepage__about_description__photo',
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
                  name: 'left_bottom_offer',
                  label: '[Lewo] Wyróżniona oferta [nad blokiem z opisem]',
                  file: 'content/homepage/left_bottom_offer.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__homepage__left_bottom_offer__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__homepage__left_bottom_offer__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__homepage__left_bottom_offer__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__homepage__left_bottom_offer__background',
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
                      name: 'pl__homepage__left_bottom_offer__link',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__homepage__left_bottom_offer__link',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__homepage__left_bottom_offer__link',
                      locale: 'de',
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
                      name: 'pl__homepage__middle_top_offer__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__homepage__middle_bottom_offer__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__homepage__middle_bottom_offer__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__homepage__middle_bottom_offer__background',
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
                      name: 'pl__homepage__middle_bottom_offer__link',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__homepage__middle_bottom_offer__link',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__homepage__middle_bottom_offer__link',
                      locale: 'de',
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
                      name: 'pl__homepage__right_bottom_offer__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__homepage__right_bottom_offer__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__homepage__right_bottom_offer__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: 'Tło',
                      name: 'xx__homepage__right_bottom_offer__background',
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
                      name: 'pl__homepage__right_bottom_offer__link',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__homepage__right_bottom_offer__link',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__homepage__right_bottom_offer__link',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                  ]
                },
                { 
                  name: 'button_second',
                  label: 'Przycisk do akcji [pod blokiem z opisem]',
                  file: 'content/homepage/button_second.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__homepage__button_second__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__homepage__button_second__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__homepage__button_second__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Link',
                      name: 'pl__homepage__button_second__link',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Link',
                      name: 'en__homepage__button_second__link',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Link',
                      name: 'de__homepage__button_second__link',
                      locale: 'de',
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
                      name: 'pl__homepage__breadcrumb__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__homepage__breadcrumb__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__homepage__breadcrumb__title',
                      locale: 'de',
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
                      name: 'pl__about__menu__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__about__menu__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__about__menu__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    }
                  ]
                },
                { 
                  name: 'description',
                  label: 'Opis',
                  file: 'content/about/description.json',
                  fields: [ 
                    { 
                      label: '[PL] Opis',
                      name: 'pl__about__description__description',
                      locale: 'pl',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__about__description__description',
                      locale: 'en',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__about__description__description',
                      locale: 'de',
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
                      name: 'pl__about__section_title__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__about__section_title__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__about__section_title__title',
                      locale: 'de',
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
                      name: 'xx__about__person_1__photo',
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
                      name: 'pl__about__person_1__description',
                      locale: 'pl',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__about__person_1__description',
                      locale: 'en',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__about__person_1__description',
                      locale: 'de',
                      widget: 'markdown',
                      required: true,
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
                      name: 'xx__about__person_2__photo',
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
                      name: 'pl__about__person_2__description',
                      locale: 'pl',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__about__person_2__description',
                      locale: 'en',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__about__person_2__description',
                      locale: 'de',
                      widget: 'markdown',
                      required: true,
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
                      name: 'xx__about__person_3__photo',
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
                      name: 'pl__about__person_3__description',
                      locale: 'pl',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__about__person_3__description',
                      locale: 'en',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__about__person_3__description',
                      locale: 'de',
                      widget: 'markdown',
                      required: true,
                    }
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
                      name: 'pl__offer__menu__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__offer__menu__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__offer__menu__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    }
                  ]
                }
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
                      name: 'pl__tariff__menu__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__tariff__menu__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__tariff__menu__title',
                      locale: 'de',
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
                      label: 'Grafika',
                      name: 'xx__tariff__header__image',
                      widget: 'image',
                      required: true,
                      media_library: {
                        config: {
                          multiple: false
                        }
                      },
                    }
                  ]
                },
                {
                  name: 'breadcrumb',
                  label: "Tytuł linku na podstronach w nagłówku (breadcrumb)",
                  file: 'content/tariff/breadcrumb.json',
                  fields: [
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__tariff__breadcrumb__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__tariff__breadcrumb__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__tariff__breadcrumb__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                  ]
                }
              ]
            },
            {
              name: 'prices',
              label: 'Cennik [Tabela cen]', 
              folder: 'content/_tariff',
              format: 'json',
              extension: 'json',
              create: true,
              identifier_field: 'xx__position',
              fields: [
                { 
                  label: 'Poziom nagłówka',
                  name: 'xx__header_lvl',
                  widget: 'select',
                  options: [
                    {
                      label: "Główny", 
                      value: 1
                    }, 
                    {
                      label: "Podrzędny", 
                      value: 2
                    }, 
                    {
                      label: "Wpis", 
                      value: 0
                    }, 
                  ],
                  required: true,
                },
                { 
                  label: '[PL] Tytuł',
                  name: 'pl__title',
                  locale: 'pl',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[EN] Tytuł',
                  name: 'en__title',
                  locale: 'en',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[DE] Tytuł',
                  name: 'de__title',
                  locale: 'de',
                  widget: 'string',
                  required: true,
                },
                { 
                  label: '[PL] Cena',
                  name: 'pl__price',
                  locale: 'pl',
                  widget: 'string',
                  required: false,
                },
                { 
                  label: '[EN] Cena',
                  name: 'en__price',
                  locale: 'en',
                  widget: 'string',
                  required: false,
                },
                { 
                  label: '[DE] Cena',
                  name: 'de__price',
                  locale: 'de',
                  widget: 'string',
                  required: false,
                }, 
                { 
                  label: 'Pozycja',
                  name: 'xx__position',
                  widget: 'number',
                  valueType: "int",
                  min: 1,
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
                      name: 'pl__issue__menu__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__issue__menu__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__issue__menu__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    }
                  ]
                }
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
                      name: 'pl__media__menu__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__media__menu__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__media__menu__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    }
                  ]
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
                      name: 'pl__contact__menu__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__contact__menu__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__contact__menu__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    }
                  ]
                }
              ]
            },
            {
              name: 'footer',
              label: 'Stopka',
              files: [ 
                {
                  name: 'partners',
                  label: 'Partnerzy',
                  file: 'content/footer/partners.json',
                  fields: [ 
                    { 
                      label: '[PL] Tytuł',
                      name: 'pl__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__title',
                      locale: 'de',
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
                      name: 'pl__footer__company__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__footer__company__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__cfooter__company__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Adres',
                      name: 'pl__footer__company__adress',
                      locale: 'pl',
                      widget: 'text',
                      required: true,
                    },
                    { 
                      label: '[EN] Adres',
                      name: 'en__footer__company__adress',
                      locale: 'en',
                      widget: 'text',
                      required: true,
                    },
                    { 
                      label: '[DE] Adres',
                      name: 'de__footer__company__adress',
                      locale: 'pl',
                      widget: 'text',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__footer__company__description',
                      locale: 'pl',
                      widget: 'markdown',
                      required: false,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__footer__company__description',
                      locale: 'en',
                      widget: 'markdown',
                      required: false,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__footer__company__description',
                      locale: 'pl',
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
                      name: 'pl__footer__opening__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__footer__opening__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__footer__opening__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Godziny otwarcia',
                      name: 'pl__footer__opening__hours',
                      locale: 'pl',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[EN] Godziny otwarcia',
                      name: 'en__footer__opening__hours',
                      locale: 'en',
                      widget: 'markdown',
                      required: true,
                    },
                    { 
                      label: '[DE] Godziny otwarcia',
                      name: 'de__footer__opening__hours',
                      locale: 'de',
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
                      name: 'pl__footer__contact__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__footer__contact__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__footer__contact__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Telefon',
                      name: 'pl__footer__contact__telephone',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Telefon',
                      name: 'en__footer__contact__telephone',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Telefon',
                      name: 'de__footer__contact__telephone',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Email',
                      name: 'pl__footer__contact__email',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Email',
                      name: 'en__footer__contact__email',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Email',
                      name: 'de__footer__contact__email',
                      locale: 'de',
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
                      name: 'pl__footer__payment__title',
                      locale: 'pl',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[EN] Tytuł',
                      name: 'en__footer__payment__title',
                      locale: 'en',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[DE] Tytuł',
                      name: 'de__footer__payment__title',
                      locale: 'de',
                      widget: 'string',
                      required: true,
                    },
                    { 
                      label: '[PL] Opis',
                      name: 'pl__footer__payment__description',
                      locale: 'pl',
                      widget: 'text',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__footer__payment__description',
                      locale: 'en',
                      widget: 'text',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__footer__payment__description',
                      locale: 'de',
                      widget: 'text',
                      required: true,
                    },
                    { 
                      label: 'Loga śroków płatniczych',
                      name: 'xx__footer__payment__images',
                      widget: 'image',
                      required: false,
                      media_library: {
                        config: {
                          multiple: true
                        }
                      },
                    }
                  ]
                }
              ]
            },
          ] 
        }
      }
    ],
    [
      "@nuxtjs/sitemap", 
      { 
        hostname: process.env.BASE_URL || 'http://localhost:3000'
      }
    ],
    '@nuxtjs/markdownit',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    '@bazzite/nuxt-optimized-images',
    'nuxt-polyfill'
  ],
  markdownit: {
    injected: true
  },
  webfontloader: {
    google: {
      families: ['Roboto:400,500,700'] //Loads Lato font with weights 400 and 700
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
    { src: '~/plugins/swiper.js', mode: 'client', ssr: false },
    { src: '~/plugins/break.js'}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#FFBB43" },
  css: [
    'swiper/dist/css/swiper.css',
    '~/assets/css/styles.css',
    '~/assets/css/custom.css'
  ],
  axios: {
    baseURL: 'http://localhost:3000',
    host: "localhost",
    debug: true
  },
  optimizedImages: {
    optimizeImages: true
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

      config.module.rules.push(
        { 
          test: /\.(.*)$/, 
          include: [
            /static/
          ],
          exclude: [
            /static\/images/
          ],
          loader: 'raw-loader' 
        }
      )
    }
  },
  // generate: {
  //   routes: [
  //     '/content/homepage/left_top_offer.json',
  //     '/content/homepage/left_bottom_offer.json',
  //     '/content/homepage/middle_top_offer.json',
  //     '/content/homepage/middle_bottom_offer.json',
  //     '/content/homepage/right_bottom_offer.json',
  //     '/content/homepage/right_top_offer.json',
  //   ]
  // }
};
