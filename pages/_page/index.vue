<template>
  <div>
      
      <h1 class="text-left mb-4 font-light text-xl z-10" >
        {{ title }}
      </h1>

      <div class="text-left mb-4 font-light text-xl z-10" v-html="$md.render(this.$t('_page__' + $route.params.page.toString() + '__description_top'))"></div>  
      <div class="text-left mb-4 font-light text-xl z-10" v-html="$md.render(this.$t('_page__' + $route.params.page.toString() + '__description_promo'))"></div>   
      <div class="text-left mb-4 font-light text-xl z-10" v-html="$md.render(this.$t('_page__' + $route.params.page.toString() + '__description_bottom'))"></div>   
  </div>
</template>

<script>
  export default {
    async asyncData ({ app, store }) {
      // let x = app.i18n.t('_page__'.concat(app.context.route.params.page));debugger; //app.$t('_page__' + app.context.route.params.page.toString() + '__slug');
      // /app.i18n.setLocale('de')
      // await store.dispatch('i18n/setRouteParams', {
      //   en: { slug: 'my-post' },
      //   fr: { slug: 'mon-article' }
      // })
      // app.i18n.setLocale(app.i18n.t('_page__'.concat(app.context.route.params.page), app.context.route.params.page));
      // await app.dispatch('i18n/setLocale', 'en');
      // return app.i18n.t('_page__' + app.context.route.params.page + '__title');
    },
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      }
    },
    data: function(){
      return {
        title: ''
      }
    },
    // nuxtI18n: {
    //   // locales: [
    //   //   'fr', 
    //   //   'es'
    //   // ]
    // }
  };
</script>
