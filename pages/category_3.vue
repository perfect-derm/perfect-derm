<template>
  <div :class="mainClass">
    <cCategory
        :title="$t('offer__category_3__title')"
        :description="$t('offer__category_3__description')"
        link="category_3"
        category=3
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