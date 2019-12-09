<template>
  <div>
    <div v-html="$md.render(this.$t('about__description__description'))"></div>

    <h2>
      {{ $t('about__section_title__title') }}
    </h2>  

    <div class="mb-4">
      <div v-html="$md.render(this.$t('about__person_1__description'))"></div>
       <img 
        v-if="$t('about__person_3__photo') !== ''"
        :src="'~/static' + $t('about__person_1__photo') + '?resize&size=200'" 
        alt="" 
        class="object-cover"
        width="200px"
       />
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
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      }
    }
  };
</script>
