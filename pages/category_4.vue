<template>
  <div :class="mainClass">
    <cCategory
        :title="$t('offer__category_4__title')"
        link="category_4"
        :image="$t('offer__category_4__background')"
        :description="$t('offer__category_4__description')"
        option="4"
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