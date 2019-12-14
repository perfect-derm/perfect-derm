<template>
  <div>
    <cSimpleHeader 
      :title="$t('about__header__title')"
      :image="$t('about__header__image')"
      :description="$t('about__header__description')"
      :breadcrumb="$t('about__breadcrumb__title')"
    />
    
    <h2>
      {{ $t('about__section_title__title') }}
    </h2>  

    <div class="mb-4">
      <div v-html="$md.render(this.$t('about__person_1__description'))"></div>
       <img 
        v-if="$t('about__person_1__photo') !== ''"
        :src="require(`~/static${$t('about__person_1__photo')}?resize&size=200`)" 
        alt="" 
        class="object-cover"
        width="200px"
       />
      <a 
        :href="$t('about__person_1__link')"
      >
        {{ $t('about__person_1__link_title') }}
       </a>
    </div>

    <div class="mb-4">
      <div v-html="$md.render(this.$t('about__person_2__description'))"></div>
       <img 
        v-if="$t('about__person_2__photo') !== ''"
        :src="require(`~/static${$t('about__person_2__photo')}?resize&size=200`)" 
        alt="" 
        class="object-cover"
        width="200px"
       />
      <a 
        :href="$t('about__person_2__link')"
       >
        {{ $t('about__person_2__link_title') }}
       </a>
    </div>

    <div class="mb-4">
      <div v-html="$md.render(this.$t('about__person_3__description'))"></div>
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
      <a :href="$t('homepage__button__link')" class="button mx-auto">
        {{ $t('homepage__button__title') }}
      </a>
    </div>

  </div>
</template>

<script>
  import cSimpleHeader from "~/components/simple-header.vue";

  export default {
    components: {
      cSimpleHeader
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
