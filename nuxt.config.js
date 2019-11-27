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
              ] 
            },
            { 
              name: 'homepage',
              label: 'Strona główna',
              files: [ 
                { 
                  name: 'banner',
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
                      widget: 'string',
                      required: true 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__homepage__banner_1__description',
                      locale: 'en',
                      widget: 'string',
                      required: true 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__homepage__banner_1__description',
                      locale: 'de',
                      widget: 'string',
                      required: true 
                    }
                  ] 
                },
                { 
                  name: 'banner',
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
                      widget: 'string',
                      required: true 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__homepage__banner_2__description',
                      locale: 'en',
                      widget: 'string',
                      required: true 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__homepage__banner_2__description',
                      locale: 'de',
                      widget: 'string',
                      required: true 
                    }
                  ] 
                },
                { 
                  name: 'banner',
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
                      widget: 'string',
                      required: true 
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__homepage__banner_3__description',
                      locale: 'en',
                      widget: 'string',
                      required: true 
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__homepage__banner_3__description',
                      locale: 'de',
                      widget: 'string',
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
                      widget: 'text',
                      required: true,
                    },
                    { 
                      label: '[EN] Opis',
                      name: 'en__homepage__text__description',
                      locale: 'en',
                      widget: 'text',
                      required: true,
                    },
                    { 
                      label: '[DE] Opis',
                      name: 'de__homepage__text__description',
                      locale: 'de',
                      widget: 'text',
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
                      label: '[PL] Tło',
                      name: 'pl__homepage__left_top_offer__background',
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
                      name: 'en__homepage__left_top_offer__background',
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
                      name: 'de__homepage__left_top_offer__background',
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
                      label: '[PL] Tło',
                      name: 'pl__homepage__middle_top_offer__background',
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
                      name: 'en__homepage__middle_top_offer__background',
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
                      name: 'de__homepage__middle_top_offer__background',
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
                      label: '[PL] Tło',
                      name: 'pl__homepage__right_top_offer__background',
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
                      name: 'en__homepage__right_top_offer__background',
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
                      name: 'de__homepage__right_top_offer__background',
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
                      label: '[PL] Zdjęcie',
                      name: 'pl__homepage__about_description__photo',
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
                      label: '[EN] Zdjęcie',
                      name: 'en__homepage__about_description__photo',
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
                      label: '[DE] Zdjęcie',
                      name: 'de__homepage__about_description__photo',
                      locale: 'de',
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
                      label: '[PL] Tło',
                      name: 'pl__homepage__left_bottom_offer__background',
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
                      name: 'en__homepage__left_bottom_offer__background',
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
                      name: 'de__homepage__left_bottom_offer__background',
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
                      label: '[PL] Tło',
                      name: 'pl__homepage__middle_bottom_offer__background',
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
                      name: 'en__homepage__middle_bottom_offer__background',
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
                      name: 'de__homepage__middle_bottom_offer__background',
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
                      label: '[PL] Tło',
                      name: 'pl__homepage__right_bottom_offer__background',
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
                      name: 'en__homepage__right_bottom_offer__background',
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
                      name: 'de__homepage__right_bottom_offer__background',
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
              ] 
            },
            {
              name: 'about',
              label: 'O mnie',
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
            }  
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
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    'nuxt-polyfill'
  ],
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
