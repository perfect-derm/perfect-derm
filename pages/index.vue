<template>
  <div :class="mainClass">
    <div class="w-full mb-4">
      <client-only placeholder="Loading...">
        <cBanner />
      </client-only>
    </div>

    <p class="text-center mb-4">
      {{ $t('homepage__text__description') }}
    </p>

    <div class="text-center mb-4">
      <a :href="$t('homepage__button_first__link')" class="button mx-auto">
        {{ $t('homepage__button_first__title') }}
      </a>
    </div>

    <section class="relative bg-gray-100 container py-4">
      <div class="flex flex-col flex-wrap md:flex-row text-center md:-mx-4">
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4">  
          <cSingleSquare
            main-class="w-full bg-white p-8"
            :title="$t('homepage__left_top_offer__title')"
            :link="$t('homepage__left_top_offer__link')"
            :image="$t('homepage__left_top_offer__background')"
          />
        </div>
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4">
          <cSingleSquare
            main-class="w-full bg-white p-8"
            :title="$t('homepage__middle_top_offer__title')"
            :link="$t('homepage__middle_top_offer__link')"
            :image="$t('homepage__middle_top_offer__background')"
          />
        </div>
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4">
          <cSingleSquare
            main-class="w-full bg-white p-8"
            :title="$t('homepage__right_top_offer__title')"
            :link="$t('homepage__right_top_offer__link')"
            :image="$t('homepage__right_top_offer__background')"
          />
        </div>
      </div>
    </section>

    <section class="relative bg-gray-100 container mb-4">
      <div class="flex flex-col flex-wrap md:flex-row text-center md:-mx-4">
        <div class="w-full mb-4 lg:mb-0 px-4">
          <cSingleFullRectangle
            main-class="w-full bg-white p-8"
            :title="$t('homepage__about_description__title')"
            :description="$t('homepage__about_description__description')"
            :link="$t('homepage__about_description__link')"
            :photo="$t('homepage__about_description__photo')"
            link-title="Więcej >"
          />
        </div>
      </div>
    </section>

    <div class="text-center mb-4">
      <a :href="$t('homepage__button_second__link')" class="button mx-auto">
        {{ $t('homepage__button_second__title') }}
      </a>
    </div>

    <section class="relative bg-gray-100 container py-4">
      <div class="flex flex-col flex-wrap md:flex-row text-center md:-mx-4">
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4">
          <cSingleSquare
            main-class="w-full bg-white p-8"
            :title="$t('homepage__left_bottom_offer__title')"
            :link="$t('homepage__left_bottom_offer__link')"
            :image="$t('homepage__left_bottom_offer__background')"
          />
        </div>
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4">
          <cSingleSquare
            main-class="w-full bg-white p-8"
            :title="$t('homepage__middle_bottom_offer__title')"
            :link="$t('homepage__middle_bottom_offer__link')"
            :image="$t('homepage__middle_bottom_offer__background')"
          />
        </div>
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4">
          <cSingleSquare
            main-class="w-full bg-white p-8"
            :title="$t('homepage__right_bottom_offer__title')"
            :link="$t('homepage__right_bottom_offer__link')"
            :image="$t('homepage__right_bottom_offer__background')"
          />
        </div>
      </div>
    </section>

    <section class="relative bg-gray-100 container py-4">
      <client-only placeholder="Loading...">
        <cMap />
      </client-only>
    </section>

  </div>
</template>

<script>
  import cBanner from "~/components/banner.vue";
  import cSingleSquare from "~/components/single-square.vue";
  import cSingleFullRectangle from "~/components/single-full-rectangle.vue";
  import cMap from "~/components/map.vue";

  export default {
    components: {
      cBanner,
      cSingleSquare,
      cSingleFullRectangle,
      cMap
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
