<template>
  <div :class="mainClass">
    <cCategory
        :title="$t('offer__category_6__title')"
        link="category_6"
        :image="$t('offer__category_6__background')"
        :description="$t('offer__category_6__description')"
        option="6"
    />
  </div>
</template>

<script>
  import cCategory from "~/components/category.vue";

  export default {    
    components: {
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