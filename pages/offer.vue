<template>
  <div>
    <div class="relative mb-20">
      <div class="h-600px">
        <img :src="require(`~/static/images/uploads/natural-lift.jpeg?resize&size=1920`)" alt="" class="h-full w-full object-cover"/>
      </div>

      <div class="container absolute bottom-10 left-0 right-0 flex flex-row flex-wrap mb-4 text-gray-300 text-gray-300">
        <a class="text-gray-300 mr-2">{{ $t('homepage__breadcrumb__title') }}</a>
        <span class="block mr-2">></span>
        <a class="text-gray-300 mr-2">{{ $t('offer__breadcrumb__title') }}</a>
      </div>
    </div>

    <section class="relative container py-4">
      <div class="flex flex-col flex-wrap md:flex-row justify-between text-center md:-mx-4 text-2xl">

        <div class="md:w-1/3 mb-8 lg:mb-0 pb-20 px-4 flex flex-col">  
          <cSingleSquare
            main-class="w-full mb-4 flex-1"
            :theme="3"
            :title="$t('offer__category_1__title')"
            link="/category_1"
            :image="$t('offer__category_1__background')"
          />
        </div>
        <div class="md:w-1/3 mb-8 lg:mb-0 pb-20 px-4 flex flex-col ">
          <cSingleSquare
            main-class="w-full mb-4 flex-1"
            :theme="3"
            :title="$t('offer__category_2__title')"
            link="/category_2"
            :image="$t('offer__category_2__background')"
          />
        </div>
        <div class="md:w-1/3 mb-8 lg:mb-0 pb-20 px-4 flex flex-col ">
          <cSingleSquare
            main-class="w-full mb-4 flex-1"
            :theme="3"
            :title="$t('offer__category_3__title')"
            link="/category_3"
            :image="$t('offer__category_3__background')"
          />
        </div>
        <div class="md:w-1/3 mb-8 lg:mb-0 pb-20 px-4 flex flex-col ">  
          <cSingleSquare
            main-class="w-full mb-4 flex-1"
            :theme="3"
            :title="$t('offer__category_4__title')"
            link="/category_4"
            :image="$t('offer__category_4__background')"
          />
        </div>
        <div class="md:w-1/3 mb-8 lg:mb-0 pb-20 px-4 flex flex-col ">
          <cSingleSquare
            main-class="w-full mb-4 flex-1"
            :theme="3"
            :title="$t('offer__category_5__title')"
            link="/category_5"
            :image="$t('offer__category_5__background')"
          />
        </div>
        <div class="md:w-1/3 mb-8 lg:mb-0 pb-20 px-4 flex flex-col ">
          <cSingleSquare
            main-class="w-full mb-4 flex-1"
            :theme="3"
            :title="$t('offer__category_6__title')"
            link="/category_6"
            :image="$t('offer__category_6__background')"
          />
        </div>
      </div>
    </section>


    <section class="container">
      <h2 class="mb-4 text-2xl">
        {{ $t('offer__section_title__title') }}
      </h2>

      <div class="relative flex flec-col h-450px">
        <h3 class="z-10">
          {{ $t('offer__promotion_line_1__title') }}
        </h3>
        <nuxt-link 
          :to="$t('offer__promotion_line_1__link')"
          class="z-10"
        >
          >
        </nuxt-link>
        <div class="text-center mb-4 font-light text-xl z-10" v-html="$md.render(this.$t('offer__promotion_line_1__description'))"></div>        
        <img :src="`~/static${$t('offer__promotion_line_1__background')}?resize&height=500`" :alt="$t('offer__promotion_line_1__title')" class="absolute left-auto w-1/2 h-full object-cover"/>
      </div>

      <div class="relative flex flec-col h-450px">
        <h3 class="z-10">
          {{ $t('offer__promotion_line_2__title') }}
        </h3>
        <nuxt-link 
          :to="$t('offer__promotion_line_2__link')"
          class="z-10"
        >
          >
        </nuxt-link>
        <div class="text-center mb-4 font-light text-xl z-10" v-html="$md.render(this.$t('offer__promotion_line_2__description'))"></div>        
        <img :src="`~/static${$t('offer__promotion_line_2__background')}?resize&height=500`" :alt="$t('offer__promotion_line_2__title')" class="absolute left-auto right-0 w-1/2 h-full object-cover"/>
      </div>

      <div class="relative flex flec-col h-450px">
        <h3 class="z-10">
          {{ $t('offer__promotion_line_3__title') }}
        </h3>
        <nuxt-link 
          :to="$t('offer__promotion_line_3__link')"
          class="z-10"
        >
          >
        </nuxt-link>
        <div class="text-center mb-4 font-light text-xl z-10" v-html="$md.render(this.$t('offer__promotion_line_3__description'))"></div>        
        <img :src="`~/static${$t('offer__promotion_line_3__background')}?resize&height=500`" :alt="$t('offer__promotion_line_3__title')" class="absolute left-auto w-1/2 h-full object-cover"/>
      </div>
    </section>
  </div>
</template>

<script>
  import cSingleSquare from "~/components/single-square.vue";

  export default {    
    components: {
      cSingleSquare,
    },
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      }
    }
  };
</script>
