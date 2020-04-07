<template>
  <div>
    <div class="w-full mb-24 flex flex-col items-center justify-center bg-gray-100 h-full">
      <client-only>
        <c-banner />
        <div class="flex flex-col items-center justify-center h-600px" slot="placeholder">
          Ładowanie...
        </div>
      </client-only>
    </div>

    <h1 
      class="h1 text-2xl sm:text-32xl text-primary leading-none mb-10 md:mt-10" 
      v-html="$md.renderInline(this.$t('homepage__content__title'))"
    />
    
    <section class="container text-center mb-16 sm:mb-20 font-light">
      <p 
        class="text-primary mb-8 sm:mb-16 sm:w-3/4 mx-auto" 
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
            class="text-xl lg:text-2xl mb-2"
            v-html="$md.renderInline(this.$t('homepage__content__section_1_title'))" 
          />
          <hr class="w-1/4 border-b-4 border-solid border-secondary mb-2" />
          <figcaption
            class="w-4/5"
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
            class="text-xl lg:text-2xl mb-2"
            v-html="$md.renderInline(this.$t('homepage__content__section_2_title'))" 
          />
          <hr class="w-1/4 border-b-4 border-solid border-secondary mb-2" />
          <figcaption
            class="w-4/5"
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
            class="text-xl lg:text-2xl mb-2"
            v-html="$md.renderInline(this.$t('homepage__content__section_3_title'))" 
          />
          <hr class="w-1/4 border-b-4 border-solid border-secondary mb-2" />
          <figcaption
            class="w-4/5"
            v-html="$md.render(this.$t('homepage__content__section_3_description'))"
          />
        </figure>
      </div>
    </section>

    <section class="container relative text-left mb-10 md:mb-20">
      <h2 class="text-32xl mb-4 md:mb-20">
         {{ $t('homepage__header_offer__title') }}
      </h2>

      <div class="flex flex-col flex-wrap md:flex-row text-center md:-mx-4 md:mb-4">
        <div class="w-full md:w-1/2 xl:w-1/4 mb-4 md:mb-0 md:px-2 flex flex-col">
          <c-single-square
            main-class="h-500px w-full md:mb-16 flex-1"
            :title="$t('homepage__first_offer__title')"
            :image="$t('homepage__first_offer__background')"
            :link="$t('homepage__first_offer__link')"
            :link-title="$t('homepage__first_offer__link_title')"
            theme
          />
        </div>
        <div class="w-full md:w-1/2 xl:w-1/4 mb-4 md:mb-0 md:px-2 flex flex-col">
          <c-single-square
            main-class="h-500px w-full md:mb-4 md:mt-8 flex-1 "
            :title="$t('homepage__second_offer__title')"
            :image="$t('homepage__second_offer__background')"
            :link="$t('homepage__second_offer__link')"
            :link-title="$t('homepage__second_offer__link_title')"
            theme
          />
        </div>
        <div class="w-full md:w-1/2 xl:w-1/4 sm:mb-4 md:mb-0 md:px-2 flex flex-col">
          <c-single-square
            main-class="h-500px w-full md:mb-16 flex-1"
            :title="$t('homepage__third_offer__title')"
            :image="$t('homepage__third_offer__background')"
            :link="$t('homepage__third_offer__link')"
            :link-title="$t('homepage__third_offer__link_title')"
            theme
          />
        </div>
        <div class="w-full md:w-1/2 xl:w-1/4 sm:mb-4 md:mb-0 md:px-2 flex flex-col">
          <c-single-square
            main-class="h-500px w-full sm:mb-4 md:mt-8 flex-1"
            :title="$t('homepage__fourth_offer__title')"
            :image="$t('homepage__fourth_offer__background')"
            :link="$t('homepage__fourth_offer__link')"
            :link-title="$t('homepage__fourth_offer__link_title')"
            theme
          />
        </div>
      </div>

      <a 
        :href="$t('homepage__button_offer__link')" 
        class="link-styled mt-20"
      >
        {{ $t('homepage__button_offer__title') }}
      </a>
    </section>

    <figure class="relative overflow-hidden w-full text-center mb-20">
      <img 
        class="object-cover h-full w-full lg:pb-20 lg:w-1/2 lg:mr-8 md:min-h-900"
        :alt="$t('homepage__call_to_action__title')"
        :src="require(`~/static${$t('homepage__call_to_action__photo')}?resize&size=1920`)"
        width="1920"
      />

      <figcaption
        class="md:absolute top-auto bottom-0 bg-beige py-8 lg:p-20 lg:mt-20 right-0 left-auto md:px-8 lg:w-3/5 text-left"
      >
        <div class="container">
          <div class="w-full md:w-3/5">
            <h2 class="text-32xl mb-8 leading-none">
              {{ $md.renderInline(this.$t('homepage__call_to_action__title')) }}
            </h2>
            
            <div
              class="text-sm lg:text-xl"
              v-html="$md.render(this.$t('homepage__call_to_action__description'))"
            />

            <nuxt-link 
              :to="$t('homepage__call_to_action__link')"
              class="link-styled"
            >
              {{ $t('homepage__call_to_action__link_title') }}
            </nuxt-link>
          </div>
        </div>
      </figcaption>
    </figure>
  
    <section class="container flex flex-row flex-wrap mb-8 md:mb-40">
      <div class="w-full md:w-3/5 flex flex-col flex-wrap">
        <h2 class="w-full mb-4 md:mb-16 md:px-8 font-bold text-32xl text-left">
         {{ $t('homepage__header_issue__title') }}
        </h2>

        <c-single-square
          main-class="relative h-450px w-full md:px-8 mb-8 flex-1"
          :title="$t('homepage__first_issue__title')"
          :image="$t('homepage__first_issue__background')"
          :link="$t('homepage__first_issue__link')"
          :link-title="$t('homepage__first_issue__link_title')"
        />

        <c-single-square
          main-class="relative h-450px w-full md:px-8 mb-8 md:mb-0 flex-1"
          :title="$t('homepage__second_issue__title')"
          :image="$t('homepage__second_issue__background')"
          :link="$t('homepage__second_issue__link')"
          :link-title="$t('homepage__second_issue__link_title')"
        />
      </div>

      <div class="w-full md:w-2/5 flex flex-col flex-wrap">
        <c-single-square
          main-class="relative h-300px w-full md:px-8 mb-8 flex-1"
          :title="$t('homepage__third_issue__title')"
          :image="$t('homepage__third_issue__background')"
          :link="$t('homepage__third_issue__link')"
          :link-title="$t('homepage__third_issue__link_title')"
        />
      
        <c-single-square
          main-class="relative h-300px w-full md:px-8 mb-8 flex-1"
          :title="$t('homepage__fourth_issue__title')"
          :image="$t('homepage__fourth_issue__background')"
          :link="$t('homepage__fourth_issue__link')"
          :link-title="$t('homepage__fourth_issue__link_title')"
        />
        
        <a 
          :href="$t('homepage__button_issue__link')" 
          class="link-styled ml-0 md:ml-8 mr-auto"
        >
          {{ $t('homepage__button_issue__title') }}
        </a>
      </div>
    </section>
  </div>
</template>

<script>
  import Banner from "~/components/banner.vue";
  import SingleSquare from "~/components/single-square.vue";
  import SingleFullRectangle from "~/components/single-full-rectangle.vue";

  export default {
    components: {
      'c-banner' : Banner,
      'c-single-square' : SingleSquare,
      'c-single-full-rectangle' : SingleFullRectangle
    },
  };
</script>