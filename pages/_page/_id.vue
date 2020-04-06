<template>
  <div>
    <hr class="mb-2" />

    <div class="container">
      <ul class="flex flex-row flex-wrap mb-4">
        <li class="flex flex-row flex-wrap">
          <a :href="startPath" class="mr-2">
            {{ $t('homepage__breadcrumb__title') }}
          </a>
          <span class="block mr-2">|</span>
        </li>
        <li class="flex flex-row flex-wrap" v-for="pathPart in path" v-bind:key="pathPart">
          <a v-if="$te(`${pathPart}__breadcrumb__title`)" :href="startPath.concat(pathPart)" class="mr-2">
            {{ $t(`${pathPart}__breadcrumb__title`) }}
          </a>
          <span v-if="$te(`${pathPart}__breadcrumb__title`) && path[path.length-2] !== 'undefined'" class="block mr-2">|</span>
        </li>
        <li v-if="path[path.length-2] !== 'undefined'">
          <a class="mr-2">
            {{ $t(`_${path[path.length-2]}__${path[path.length-1]}__title`) }}
          </a>
        </li>
      </ul>
    
      <h1 
        v-if="this.$i18n.te(prefix + 'title')"
        class="mt-20 mb-16 font-light text-32xl z-10 uppercase font-light text-left"
      >
        {{ $t(prefix + 'title') }}
      </h1>

      <div 
        v-if="this.$i18n.te(prefix + 'description_top')"
        class="mb-4 font-light text-xl z-10 column-desc text-left" 
        v-html="$md.render(this.$t(prefix + 'description_top'))
      "></div>  
      <div 
        v-if="this.$i18n.te(prefix + 'description_promo')"
        class="mb-8 font-light text-xl z-10 bg-secondary text-primary p-8 text-left" 
        v-html="$md.render(this.$t(prefix + 'description_promo'))"
      ></div>   
      <div 
        v-if="this.$i18n.te(prefix + 'description_bottom')"
        class="mb-4 font-light text-xl z-10 column-desc text-left" 
        v-html="$md.render(this.$t(prefix + 'description_bottom'))"
      ></div>   
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      startPath: function(){
        return ('/').concat(this.$i18n.defaultLocale == this.$i18n.locale ? '' : this.$i18n.locale.concat('/'));
      },
      path: function(){
        let pathArray = this.$route.path.split('/');

        if(pathArray[0] === ''){
          pathArray.shift();
        }

        return pathArray;
      },
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