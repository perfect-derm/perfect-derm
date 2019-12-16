<template>
  <div>
    <cTextHeader 
      :title="$t('media__header__title')"
      :description="$t('media__header__description')"
      :breadcrumb="$t('media__breadcrumb__title')"
    />
  </div>
</template>

<script>
  import cTextHeader from "~/components/text-header.vue";

  export default {    
    components: {
      cTextHeader
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
