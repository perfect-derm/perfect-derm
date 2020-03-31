<template>
  <div>
    <div class="w-full mb-16 flex flex-col items-center justify-center bg-gray-100 max-h-600 h-full">
      <client-only>
        <c-banner />
        <div class="flex flex-col items-center justify-center h-600px" slot="placeholder">
          Ładowanie...
        </div>
      </client-only>
    </div>

    <div class="container text-center mb-20 font-light">
      <h1 
        class="h1 text-5xl md:text-3.2xl text-primary leading-none font-header font-semibold mb-10" 
        v-html="$md.renderInline(this.$t('homepage__content__title'))"
      />

      <p 
        class="text-primary mb-16 w-1/2 mx-auto" 
        v-html="$md.renderInline(this.$t('homepage__content__description'))" 
      />

      <div class="flex flex-row flex-wrap">
        <figure class="w-full md:w-1/3 flex flex-col items-center px-2 mb-8">
          <img 
            :src="$t('homepage__content__section_1_icon')"
            width="100px"
            :alt="$md.renderInline(this.$t('homepage__content__section_1_title'))"
            class="opacity-50 mb-2"
          />
          <h2
            class="font-header font-semibold md:text-2xl mb-2"
            v-html="$md.renderInline(this.$t('homepage__content__section_1_title'))" 
          />
          <hr class="w-1/4 border-b-4 border-solid border-secondary mb-2" />
          <figcaption
            class="w-2/3"
            v-html="$md.render(this.$t('homepage__content__section_1_description'))"
          />
        </figure>

        <figure class="w-full md:w-1/3 flex flex-col items-center px-2 mb-8">
          <img 
            :src="$t('homepage__content__section_2_icon')"
            width="100px"
            :alt="$md.renderInline(this.$t('homepage__content__section_2_title'))"
            class="opacity-50 mb-2"
          />
          <h2
            class="font-header font-semibold md:text-2xl mb-2"
            v-html="$md.renderInline(this.$t('homepage__content__section_2_title'))" 
          />
          <hr class="w-1/4 border-b-4 border-solid border-secondary mb-2" />
          <figcaption
            class="w-2/3"
            v-html="$md.render(this.$t('homepage__content__section_2_description'))"
          />
        </figure>

        <figure class="w-full md:w-1/3 flex flex-col items-center px-2 mb-8">
          <img 
            :src="$t('homepage__content__section_3_icon')"
            width="100px"
            :alt="$md.renderInline(this.$t('homepage__content__section_3_title'))"
            class="opacity-50 mb-2"
          />
          <h2
            class="font-header font-semibold md:text-2xl mb-2"
            v-html="$md.renderInline(this.$t('homepage__content__section_3_title'))" 
          />
          <hr class="w-1/4 border-b-4 border-solid border-secondary mb-2" />
          <figcaption
            class="w-2/3"
            v-html="$md.render(this.$t('homepage__content__section_3_description'))"
          />
        </figure>

      </div>
    </div>

    <div class="container">
      <h1 class="font-light text-5xl uppercase mb-4">
         {{ $t('homepage__header_offer__title') }}
      </h1>
      <div
        class="text-center mb-8 font-light" 
        v-html="$md.render(this.$t('homepage__header_offer__description'))"
      ></div>
    </div>

    <div class="relative container">
      <div class="flex flex-col flex-wrap md:flex-row text-center md:-mx-4 mb-4">
        <div class="w-full md:w-1/3 mb-4 md:mb-0 sm:px-4 flex flex-col">
          <c-single-square
            main-class="w-full sm:mb-4 flex-1"
            :title="$t('homepage__left_top_offer__title')"
            :link="$t('homepage__left_top_offer__link')"
            :image="$t('homepage__left_top_offer__background')"
            :theme="2"
          />
        </div>
        <div class="w-full md:w-1/3 mb-4 md:mb-0 sm:px-4 flex flex-col">
          <c-single-square
            main-class="w-full sm:mb-4 flex-1"
            :title="$t('homepage__middle_top_offer__title')"
            :link="$t('homepage__middle_top_offer__link')"
            :image="$t('homepage__middle_top_offer__background')"
            :theme="2"
          />
        </div>
        <div class="w-full md:w-1/3 sm:mb-4 md:mb-0 sm:px-4 flex flex-col">
          <c-single-square
            main-class="w-full sm:mb-4 flex-1"
            :title="$t('homepage__right_top_offer__title')"
            :link="$t('homepage__right_top_offer__link')"
            :image="$t('homepage__right_top_offer__background')"
            :theme="2"
          />
        </div>
      </div>
    </div>

    <div class="text-center mb-20 mx-4">
      <a :href="$t('homepage__button_offer__link')" class="button mx-auto">
        {{ $t('homepage__button_offer__title') }}
      </a>
    </div>

    <div class="relative container mb-20">
      <div class="flex flex-col flex-wrap md:flex-row text-center">
        <!-- <c-single-full-rectangle
          main-class="block w-full bg-secondary text-primary opacity-0"
          :title="$t('homepage__about_description__title')"
          :description="$t('homepage__about_description__description')"
          :link="$t('homepage__about_description__link')"
          :photo="$t('homepage__about_description__photo')"
          :link-title="$t('homepage__about_description__link_title')"
        /> -->
      </div>
    </div>

    <div class="container mb-8">
      <h1 class="font-light text-5xl uppercase mb-2">
         {{ $t('homepage__header_issue__title') }}
      </h1>
      <div class="text-center mb-4 font-light" v-html="$md.render(this.$t('homepage__header_issue__description'))"></div>
    </div>

    <section class="mb-4 relative container">
      <div class="flex flex-col flex-wrap md:flex-row text-center md:-mx-4">
        <div class="w-full md:w-1/3 mb-4 md:mb-0 sm:px-4 flex flex-col ">
          <c-single-square
            main-class="w-full sm:mb-4 flex-1"
            :title="$t('homepage__left_bottom_offer__title')"
            :link="$t('homepage__left_bottom_offer__link')"
            :image="$t('homepage__left_bottom_offer__background')"
            :theme="2"
          />
        </div>
        <div class="w-full md:w-1/3 mb-4 md:mb-0 sm:px-4 flex flex-col ">
          <c-single-square
            main-class="w-full bg-white sm:mb-4 flex-1"
            :title="$t('homepage__middle_bottom_offer__title')"
            :link="$t('homepage__middle_bottom_offer__link')"
            :image="$t('homepage__middle_bottom_offer__background')"
            :theme="2"
          />
        </div>
        <div class="w-full md:w-1/3 sm:mb-4 md:mb-0 sm:px-4 flex flex-col ">
          <c-single-square
            main-class="w-full bg-white sm:mb-4 flex-1"
            :title="$t('homepage__right_bottom_offer__title')"
            :link="$t('homepage__right_bottom_offer__link')"
            :image="$t('homepage__right_bottom_offer__background')"
            :theme="2"
          />
        </div>
      </div>
    </section>

    <div class="container text-center mb-20">
      <a :href="$t('homepage__button_issue__link')" class="button mx-auto">
        {{ $t('homepage__button_issue__title') }}
      </a>
    </div>

    <div class="relative h-200px flex flex-col items-center justify-center container py-4 mb-4">
      <h2 class="font-light text-5xl uppercase mb-10">
        {{ $t('footer__partners__title') }}
      </h2>
      <client-only placeholder="Ładowanie...">
        <c-partners />
      </client-only>
    </div>

  </div>
</template>

<script>
  import Banner from "~/components/banner.vue";
  import SingleSquare from "~/components/single-square.vue";
  import SingleFullRectangle from "~/components/single-full-rectangle.vue";
  import Partners from "~/components/partners.vue";

  export default {
    components: {
      'c-banner' : Banner,
      'c-single-square' : SingleSquare,
      'c-single-full-rectangle' : SingleFullRectangle,
      'c-partners' : Partners
    },
  };
</script>