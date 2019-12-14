<template>
  <div :class="mainClass">
    <cCategory
        :title="$t('offer__category_6__title')"
        :description="$t('offer__category_6__description')"
        link="category_6"
        category=6
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