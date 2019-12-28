<template>
  <div :class="mainClass">
    <cImageHeader 
      :title="$t('issue__header__title')"
      :image="$t('issue__header__image')"
      :description="$t('issue__header__description')"
      :breadcrumb="$t('issue__breadcrumb__title')"
    />

    <cCategory
      type="issue"
    />
  </div>
</template>

<script>
  import cImageHeader from "~/components/image-header.vue";
  import cCategory from "~/components/category.vue";

  export default {    
    components: {
      cImageHeader,
      cCategory,
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