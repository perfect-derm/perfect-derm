<template>
  <div :class="mainClass">
    <cCategory
        :title="$t('offer__category_1__title')"
        :description="$t('offer__category_1__description')"
        link="category_1"
        category=1
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