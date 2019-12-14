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

    <div v-html="$md.render(this.$t('about__description__description'))"></div>

    <div class="mb-4">
      <div v-html="$md.render(this.$t('about__person_1__description'))"></div>
       <img 
        v-if="$t('about__person_3__photo') !== ''"
        :src="'~/static' + $t('about__person_1__photo') + '?resize&size=200'" 
        alt="" 
        class="object-cover"
        width="200px"
       />
      <a 
        :href="$t('about__person_1__link')"
      >
        Zobacz nasze certyfikaty 
       </a>
    </div>

    <div class="mb-4">
      <div v-html="$md.render(this.$t('about__person_2__description'))"></div>
       <img 
        v-if="$t('about__person_3__photo') !== ''"
        :src="'~/static' + $t('about__person_2__photo') + '?resize&size=200'" 
        alt="" 
        class="object-cover"
        width="200px"
       />
      <a 
        :href="$t('about__person_2__link')"
       >
        Zobacz nasze certyfikaty 
       </a>
    </div>

    <div class="mb-4">
      <div v-html="$md.render(this.$t('about__person_3__description'))"></div>
       <img 
        v-if="$t('about__person_3__photo') !== ''"
        :src="'~/static' + $t('about__person_3__photo') + '?resize&size=200'" 
        alt="" 
        class="object-cover"
        width="200px"
       />
       <a 
        :href="$t('about__person_3__link')"
       >
        Zobacz nasze certyfikaty 
       </a>
    </div>
  </div>
</template>

<script>
  import cSimpleHeader from "~/components/simple-header.vue";

  export default {
    components: {
      cSimpleHeader,
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
