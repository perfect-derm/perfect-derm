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
            class="menu-link flex lg:px-2 py-2 uppercase text-black lg:text-gray-500 hover:text-black lg:ml-4 h-auto items-center no-underline lg:border-b-4 border-transparent hover:border-black"
          >    
            {{ $t('homepage__menu__title') }}
          </nuxt-link>
          <nuxt-link 
            @click.native="menuClickHandler"
            :to="localePath('about')"
            class="menu-link flex lg:px-2 py-2 uppercase text-black lg:text-gray-500 hover:text-black lg:ml-4 h-auto items-center no-underline lg:border-b-4 border-transparent hover:border-black"
          >    
            {{ $t('about__menu__title') }}
          </nuxt-link>
          <nuxt-link
            @click.native="menuClickHandler" 
            :to="localePath('offer')"
            class="menu-link flex lg:px-2 py-2 uppercase text-black lg:text-gray-500 hover:text-black lg:ml-4 h-auto items-center no-underline lg:border-b-4 border-transparent hover:border-black"
          >
            {{ $t('offer__menu__title') }}
          </nuxt-link>
          <nuxt-link 
            @click.native="menuClickHandler"
            :to="localePath('issue')"
            class="menu-link flex lg:px-2 py-2 uppercase text-black lg:text-gray-500 hover:text-black lg:ml-4 h-auto items-center no-underline lg:border-b-4 border-transparent hover:border-black"
          >
            {{ $t('issue__menu__title') }}
          </nuxt-link>
          <nuxt-link 
            @click.native="menuClickHandler"
            :to="localePath('media')"
            class="menu-link flex lg:px-2 py-2 uppercase text-black lg:text-gray-500 hover:text-black lg:ml-4 h-auto items-center no-underline lg:border-b-4 border-transparent hover:border-black"
          >
            {{ $t('media__menu__title') }}
          </nuxt-link>
          <nuxt-link 
            @click.native="menuClickHandler"
            :to="localePath('tariff')"
            class="menu-link flex lg:px-2 py-2 uppercase text-black lg:text-gray-500 hover:text-black lg:ml-4 h-auto items-center no-underline lg:border-b-4 border-transparent hover:border-black"
          >
            {{ $t('tariff__menu__title') }}
          </nuxt-link>
          <nuxt-link 
            @click.native="menuClickHandler"
            :to="localePath('contact')"
            class="menu-link flex lg:px-2 py-2 uppercase text-black lg:text-gray-500 hover:text-black lg:ml-4 h-auto items-center no-underline lg:border-b-4 border-transparent hover:border-black"
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
            <li class="">
              <a 
                href="tel:+48737162771" 
                class="flex items-center cursor-pointer"
                >
                <svg class="ml-2 mr-2" height="20px" width="20px" fill="#718096" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                  <path d="M49.087,68.817c1.422,2.252,3.552,2.252,6.629,0c2.134,5.409,11.84,23.443,11.84,23.443s-6.304,2.561-15.302-3.749    c-5.825-4.086-17.437-16.37-24.319-33.606c-3.747-9.384-4.944-19.609-4.944-31.213c0.237-10.144,4.557-13.036,9.054-14.386    l8.049,25.471c0,0-5.622,1.84-3.257,9.054C36.836,43.831,39.002,56.673,49.087,68.817z"></path>
                  <path d="M35.593,8.404c0,0,6.866-2.481,10.417,4.509c3.553,6.987,6.153,17.809-2.368,21.189    C41.275,27.565,35.593,8.404,35.593,8.404z"></path>
                  <path d="M59.497,67.345l12.321,23.111c0,0,7.101-5.186,4.26-10.369c-2.84-5.185-6.148-11.672-6.148-11.672    S66.588,63.333,59.497,67.345z"></path>
                </svg>
              </a>
            </li>
            <li class="mr-2">
              |
            </li>
            <li class="" v-for="lang in $t('header__langs__enabled').split(',')" v-bind:key="lang">
              <a 
                @click="$nuxt.$i18n.setLocale(lang)"
                :class="{ 
                  'lang-active text-black mr-2': $i18n.locale === lang,
                  'text-gray-300 mr-2': $i18n.locale !== lang 
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