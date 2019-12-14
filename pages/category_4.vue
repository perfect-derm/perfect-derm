<template>
  <div :class="mainClass">
    <cCategory
        :title="$t('offer__category_4__title')"
        :description="$t('offer__category_4__description')"
        link="category_4"
        category=4
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