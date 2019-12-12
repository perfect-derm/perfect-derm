<template>
  <div :class="mainClass">
    <cCategory
        :title="$t('offer__category_5__title')"
        link="category_5"
        :image="$t('offer__category_5__background')"
        :description="$t('offer__category_5__description')"
        option="5"
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