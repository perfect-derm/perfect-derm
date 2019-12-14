<template>
  <div :class="mainClass">
    <cCategory
      :title="$t('issue__header__title')"
      :description="$t('issue__header__description')"
      type="issue"
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