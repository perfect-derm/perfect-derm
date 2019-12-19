<template>
  <div>
    <cImageHeader 
      :title="$t('about__header__title')"
      :image="$t('about__header__image')"
      :description="$t('about__header__description')"
      :breadcrumb="$t('about__breadcrumb__title')"
    />

    <div class="container mb-4">
      <h2 class="font-light text-5xl uppercase mb-10">
        {{ $t('about__section_title__title') }}
      </h2>
    </div>

    <div class="container mb-4 flex text-left">
      <div class="w-1/5">
        <img 
          v-if="$t('about__person_1__photo') !== ''"
          :src="require(`~/static${$t('about__person_1__photo')}?resize&size=200`)" 
          alt="" 
          class="object-cover"
          width="200px"
        />
      </div>
      <div class="w-4/5">
        <div class="person-desc" v-html="$md.render(this.$t('about__person_1__description'))"></div>
        <a 
          :href="$t('about__person_1__link')"
        >
          {{ $t('about__person_1__link_title') }}
        </a>
      </div>
    </div>

    <hr class="container mb-4" v-if="$te('about__person_2__link')" />

    <div class="container mb-4 flex text-left" v-if="$te('about__person_2__link')">
      <div class="w-1/5">
        <img 
          v-if="$t('about__person_2__photo') !== ''"
          :src="require(`~/static${$t('about__person_2__photo')}?resize&size=200`)" 
          alt="" 
          class="object-cover"
          width="200px"
        />
      </div>
      <div class="w-4/5">
        <div class="person-desc" v-html="$md.render(this.$t('about__person_2__description'))"></div>
        <a 
          :href="$t('about__person_2__link')"
        >
          {{ $t('about__person_2__link_title') }}
        </a>
      </div>
    </div>

    <hr class="container mb-4" v-if="$te('about__person_3__link')"/>

    <div class="container mb-4 flex text-left" v-if="$te('about__person_3__link')">
      <div class="person-desc" v-html="$md.render(this.$t('about__person_3__description'))"></div>
       <img 
        v-if="$t('about__person_3__photo') !== ''"
        :src="require(`~/static${$t('about__person_3__photo')}?resize&size=200`)" 
        alt="" 
        class="object-cover"
        width="200px"
       />
       <a 
        :href="$t('about__person_3__link')"
       >
        {{ $t('about__person_3__link_title') }}
       </a>
    </div>

    <div class="text-center mb-4 mt-4">
      <a :href="$t('about__button__link')" class="button mx-auto">
        {{ $t('about__button__title') }}
      </a>
    </div>

    <div class="relative h-200px flex flex-col items-center justify-center container py-4 mb-4">
      <h2 class="font-light text-5xl uppercase mb-10">
        {{ $t('footer__partners__title') }}
      </h2>
      <client-only placeholder="Ładowanie...">
        <cPartners />
      </client-only>
    </div>

  </div>
</template>

<script>
  import cImageHeader from "~/components/image-header.vue";
  import cPartners from "~/components/partners.vue";

  export default {
    components: {
      cImageHeader,
      cPartners
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

<style scoped>
  .person-desc >>> h2{
    @apply text-2xl;
    @apply mb-2;
  }

  .person-desc >>> p{
    @apply mb-2;
  }

  .person-desc >>> p:last-child{
    @apply mb-0;
  }
</style>
