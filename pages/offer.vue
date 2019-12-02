<template>
  <div>
    
    <section class="relative container py-4">
      <div class="flex flex-col flex-wrap md:flex-row text-center md:-mx-4">

        <div class="md:w-1/3 mb-4 lg:mb-0 px-4 flex flex-col ">  
          <cSingleSquare
            main-class="w-full mb-4 flex-1"
            :titlePlacement="1"
            :title="$t('homepage__left_top_offer__title')"
            :link="$t('homepage__left_top_offer__link')"
            :image="$t('homepage__left_top_offer__background')"
          />
        </div>
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4 flex flex-col ">
          <cSingleSquare
            main-class="w-full mb-4 flex-1"
            :titlePlacement="1"
            :title="$t('homepage__middle_top_offer__title')"
            :link="$t('homepage__middle_top_offer__link')"
            :image="$t('homepage__middle_top_offer__background')"
          />
        </div>
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4 flex flex-col ">
          <cSingleSquare
            main-class="w-full mb-4 flex-1"
            :titlePlacement="1"
            :title="$t('homepage__right_top_offer__title')"
            :link="$t('homepage__right_top_offer__link')"
            :image="$t('homepage__right_top_offer__background')"
          />
        </div>
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4 flex flex-col ">  
          <cSingleSquare
            main-class="w-full mb-4 flex-1"
            :titlePlacement="1"
            :title="$t('homepage__left_top_offer__title')"
            :link="$t('homepage__left_top_offer__link')"
            :image="$t('homepage__left_top_offer__background')"
          />
        </div>
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4 flex flex-col ">
          <cSingleSquare
            main-class="w-full mb-4 flex-1"
            :titlePlacement="1"
            :title="$t('homepage__middle_top_offer__title')"
            :link="$t('homepage__middle_top_offer__link')"
            :image="$t('homepage__middle_top_offer__background')"
          />
        </div>
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4 flex flex-col ">
          <cSingleSquare
            main-class="w-full mb-4 flex-1"
            :titlePlacement="1"
            :title="$t('homepage__right_top_offer__title')"
            :link="$t('homepage__right_top_offer__link')"
            :image="$t('homepage__right_top_offer__background')"
          />
        </div>
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
