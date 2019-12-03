<template>
  <div>
      test
      <p>
          {{ $route.params.page }}
      </p>
    <h2>
      <!-- {{ $t('about__section_title__title') }} -->
    </h2>  
    
    <!-- <div v-html="$md.render(this.$t('about__description__description'))"></div> -->


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
