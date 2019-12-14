<template>
  <div :class="mainClass">
    <cCategory
        :title="$t('offer__category_5__title')"
        :description="$t('offer__category_5__description')"
        link="category_5"
        category=5
        type="offer"
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