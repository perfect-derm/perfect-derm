<template>
  <div>
      <h1 
        v-if="this.$i18n.te(prefix + 'title')"
        class="text-left mb-4 font-light text-xl z-10"
      >
        {{ $t(prefix + 'title') }}
      </h1>

      <div 
        v-if="this.$i18n.te(prefix + 'description_top')"
        class="text-left mb-4 font-light text-xl z-10" 
        v-html="$md.render(this.$t(prefix + 'description_top'))
      "></div>  
      <div 
        v-if="this.$i18n.te(prefix + 'description_promo')"
        class="text-left mb-4 font-light text-xl z-10" 
        v-html="$md.render(this.$t(prefix + 'description_promo'))"
      ></div>   
      <div 
        v-if="this.$i18n.te(prefix + 'description_bottom')"
        class="text-left mb-4 font-light text-xl z-10" 
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
