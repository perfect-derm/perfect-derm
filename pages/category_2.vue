<template>
  <div :class="mainClass">
    <cCategory
        :title="$t('offer__category_2__title')"
        :description="$t('offer__category_2__description')"
        link="category_2"
        category=2
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