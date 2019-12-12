<template>
  <div :class="mainClass">
    <cCategory
        :title="$t('offer__category_3__title')"
        link="category_3"
        :image="$t('offer__category_3__background')"
        :description="$t('offer__category_3__description')"
        option="3"
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