<template>
  <div class="hidden">

  </div>
</template>

<script>
  export default {
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      }
    },
    mounted() {
    },
    // asyncData: async ({ app, route, payload }) => {
    //   return {
    //     page: (await app.$content("/pages").get(route.path)) || payload
    //   };
    // }
  };
</script>
