<template>
  <component
    :is="tag"
    v-bind="$attrs"
  >
    <resize-observer @notify="handleResize" />
    <nav class="container flex flex-col" aria-label="Menu">
      <div class="flex justify-between mb-4 lg:mb-0 flex-wrap">
        <a :href="localePath('index')" class="flex-1 flex items-center flex-shrink-0 text-white mx-auto lg:mr-6">
          <c-logo
            classes="br0 db mb0 w-100 h-auto"
          />
        </a>
        <div 
          class="relative w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto text-right text-sm md:text-base flex-grow justify-end order-last"
          :class="{ 'hidden' : !menuVisible }"
        >
          <nuxt-link 
            @click.native="menuClickHandler"
            :to="localePath('index')"
            class="menu-link flex lg:px-2 pt-1 pb-4 lg:ml-4 uppercase text-secondary hover:text-primary lg:ml-4 h-auto items-center no-underline lg:border-b-4 border-transparent hover:border-black"
          >    
            {{ $t('homepage__menu__title') }}
          </nuxt-link>
          <nuxt-link 
            @click.native="menuClickHandler"
            :to="localePath('about')"
            class="menu-link flex lg:px-2 pt-1 pb-4 lg:ml-4 uppercase text-secondary hover:text-primary lg:ml-4 h-auto items-center no-underline lg:border-b-4 border-transparent hover:border-black"
          >    
            {{ $t('about__menu__title') }}
          </nuxt-link>
          <nuxt-link
            @click.native="menuClickHandler" 
            :to="localePath('offer')"
            class="menu-link flex lg:px-2 pt-1 pb-4 lg:ml-4 uppercase text-secondary hover:text-primary lg:ml-4 h-auto items-center no-underline lg:border-b-4 border-transparent hover:border-black"
          >
            {{ $t('offer__menu__title') }}
          </nuxt-link>
          <nuxt-link 
            @click.native="menuClickHandler"
            :to="localePath('issue')"
            class="menu-link flex lg:px-2 pt-1 pb-4 lg:ml-4 uppercase text-secondary hover:text-primary lg:ml-4 h-auto items-center no-underline lg:border-b-4 border-transparent hover:border-black"
          >
            {{ $t('issue__menu__title') }}
          </nuxt-link>
          <nuxt-link 
            @click.native="menuClickHandler"
            :to="localePath('media')"
            class="menu-link flex lg:px-2 pt-1 pb-4 lg:ml-4 uppercase text-secondary hover:text-primary lg:ml-4 h-auto items-center no-underline lg:border-b-4 border-transparent hover:border-black"
          >
            {{ $t('media__menu__title') }}
          </nuxt-link>
          <nuxt-link 
            @click.native="menuClickHandler"
            :to="localePath('tariff')"
            class="menu-link flex lg:px-2 pt-1 pb-4 lg:ml-4 uppercase text-secondary hover:text-primary lg:ml-4 h-auto items-center no-underline lg:border-b-4 border-transparent hover:border-black"
          >
            {{ $t('tariff__menu__title') }}
          </nuxt-link>
          <nuxt-link 
            @click.native="menuClickHandler"
            :to="localePath('contact')"
            class="menu-link flex lg:px-2 pt-1 pb-4 lg:ml-4 uppercase text-secondary hover:text-primary lg:ml-4 h-auto items-center no-underline lg:border-b-4 border-transparent hover:border-black"
          >
            {{ $t('contact__menu__title') }}
          </nuxt-link>
        </div>
        <div class="flex items-center ml-4 lg:hidden">
          <button @click="menuSwitch" class="flex items-center px-3 py-2 border rounded text-black border-black hover:text-gray-500 hover:border-gray-500">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
      </div>
      <div class="order-first my-1">
          <ul class="flex flex-wrap text-xs justify-end">
            <li class="flex items-center mr-2">
              <nuxt-link 
                to="/search" 
                class="flex items-center cursor-pointer"
                >
                <img 
                  src="~assets/search.png?inline"
                  width="15px"
                  class="opacity-50"
                  alt="Wyszukiwarka"
                />
              </nuxt-link>
            </li>
            <li class="mr-2">
              |
            </li>
            <li class="" v-for="lang in $t('header__langs__enabled').split(',')" v-bind:key="lang">
              <a 
                @click="$nuxt.$i18n.setLocale(lang)"
                :class="{ 
                  'lang-active text-black font-bold mr-2': $i18n.locale === lang,
                  'mr-2': $i18n.locale !== lang 
                }"
                class="block cursor-pointer"
              >
                {{ lang | uppercase }}
              </a>
            </li>
          </ul>
        </div>
    </nav>
  </component>
</template>

<script>
  import Logo from '~/components/logo.vue';

  export default {
    name: 'Header',
    props: {
      'tag': {
        type: String,
        default: 'header',
        required: false
      },
    },
    components: {
      'c-logo': Logo  
    },
    data () {
        return { 
          timeoutMenu: 0,
          menuVisible: true
        }
    },
    watch: {
      '$route.path': function() {
        this.menuVisible = false;
      }
    },
    methods: {
      menuClickHandler: function(){
        this.menuVisible = false;
      },
      handleResize: function () {
        this.menuVisible = false;
      },
      menuSwitch: function (e) {
        this.menuVisible = !this.menuVisible;
      },
    },
    mounted(){
      this.menuVisible = true;
    }
  }
</script>

<style scoped>
  .min-vh-100 {
    min-height: 100vh;
  }

  @media(max-width: 330px){
    .max-w-330-hide{
      display: none;
    }
  }

  .menu-link{
    transition: 0.3s;
  }

  .nuxt-link-exact-active{
    @apply text-black;
    @apply border-black;
    @apply underline;
  }

  @screen lg{
    .nuxt-link-exact-active{
      @apply no-underline;
    }
  }
</style>