<template>
  <div class="text-left container">
      <h1 
        v-if="this.$i18n.te(prefix + 'title')"
        class="mt-20 mb-16 font-light text-4xl z-10 uppercase font-light text-left"
      >
        {{ $t(prefix + 'title') }}
      </h1>

      <div 
        v-if="this.$i18n.te(prefix + 'description_top')"
        class="mb-4 font-light text-xl z-10 column-desc" 
        v-html="$md.render(this.$t(prefix + 'description_top'))
      "></div>  
      <div 
        v-if="this.$i18n.te(prefix + 'description_promo')"
        class="mb-8 font-light text-xl z-10 bg-secondary text-primary p-8" 
        v-html="$md.render(this.$t(prefix + 'description_promo'))"
      ></div>   
      <div 
        v-if="this.$i18n.te(prefix + 'description_bottom')"
        class="mb-4 font-light text-xl z-10 column-desc" 
        v-html="$md.render(this.$t(prefix + 'description_bottom'))"
      ></div>   
  </div>
</template>

<script>
  export default {
    computed: {
      prefix: function () {
        let prefixTranslation = [];

        prefixTranslation = this.$route.path.split('/'); 
        prefixTranslation.shift();
        prefixTranslation = prefixTranslation.join('__');
        prefixTranslation = '_' + prefixTranslation + '__';

        return prefixTranslation;
      }
    },
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      }
    },
  };
</script>

<style scoped>
  .column-desc{
    column-count: 2;
    column-gap: 80px;
  }

  .column-desc >>> p{
    @apply mb-4;
    @apply font-light;
  }

  .column-desc >>> img{
    @apply mb-8;
  }

  .column-desc >>> h2{
    @apply font-bold;
    @apply mb-4;
  }
</style>