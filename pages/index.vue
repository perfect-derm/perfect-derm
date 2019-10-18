<template>
  <div>
      {{ pageData.title }}
  </div>
</template>

<script>
  import pageDataJSON from '~/content/index/pl.json';

  export default {
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      }
    },
    data () {
        return { 
          pageData: pageDataJSON
        }
    }
  };
</script>
