<template>
  <component
    :is="tag"
    class="relative"
    v-bind="$attrs"
  >
    <div class="bg-light-graphite text-white">
      <div class="container flex flex-col md:flex-row flex-wrap py-20">
        <div class="w-full md:w-1/3 lg:w-1/3 lg:px-4 lg:pr-8">
          <h3 class="font-bold text-32xl mb-8">
            {{ $t('footer__company__title') }}
          </h3>
          
          <ul class="flex flex-wrap">
            <li class="flex w-1/2"><a href="" class="link-unstyled font-light text-white">Regulamin strony</a></li>
            <li class="flex w-1/2"><a href="" class="link-unstyled font-light text-white">Polityka prywatności</a></li>
            <li class="flex w-1/2"><a href="" class="link-unstyled font-light text-white">Prawa pacjenta</a></li>
            <li class="flex w-1/2"><a href="" class="link-unstyled font-light text-white">Cookies</a></li>
          </ul>
        </div>

        <div class="w-full md:w-1/3 lg:w-1/3 mt-8 lg:mt-0 lg:px-4">
          <h5 class="font-bold text-32xl mb-8">
            {{ $t('footer__payment__title') }}
          </h5>
          <p class="text-base uppercase mb-0">
            Gotówka
          </p>
          <ul class="flex flex-wrap">
            <li class="mr-3 mb-4">
              <img 
                src="~assets/visa.svg"
                alt="Visa"
              />
            </li>
            <li class="mr-3 mb-4">            
              <img 
                src="~assets/maestro.svg"
                alt="Visa"
              />
            </li>
            <li class="mr-3 mb-4">
              <img 
                src="~assets/master-card.svg"
                alt="Master Card"
              />
            </li>
            <li class="mb-4">
              <img 
                src="~assets/blik.svg"
                alt="Blik"
              />
            </li>
          </ul>
        </div>

        <div class="w-full md:w-1/3 lg:w-1/3 mt-8 lg:mt-0 lg:px-4">
          <h5 class="font-bold text-32xl mb-8">
              Dojazd
          </h5>
          <div class="text-base">
            <p>
              Bezpośredni dojazd z okolic Dworca PKP i PKS<br/>
            </p>
            <p>
              Autobusy: <strong>112</strong>,<strong>113</strong>,<strong>612</strong>,<strong>145</strong>,<strong>146</strong>,<strong>K</strong><br/>
            </p>
            <p>
              Tramwaje: <strong>31</strong>,<strong>32</strong>
            </p>
          </div>

        </div>
      </div>
    </div>

    <div class="w-full bg-graphite text-white">
      <div class="container flex flex-row flex-wrap justify-between py-2 text-secondary">
        <p class="text-xs mb-0 sm:pr-4">
          <strong class="font-semibold text-white">Copyright:</strong> PerfectDerm. All Rights Reserved.
        </p>
        <p class="text-xs mb-0">
          <strong class="font-semibold text-white">Realizacja:</strong> Webo
        </p>
      </div>
    </div>
  </component>
</template>

<script>
  export default {
    name: 'Footer',
    props: {
      'tag': {
        type: String,
        default: 'footer',
        required: false
      },
    },
    data: function() {
        return {
            isActiveScroll: false
        }
    },
    methods: {
        scrollOn: function (event) {
            
        },
        scrollOff: function (event) {
            
        }
    }
  }
</script>

<style scoped>
   
</style>