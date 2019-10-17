<template>
  <div>
      {{ pageData.title }}
  </div>
</template>

<script>
  import pageData from '~/content/index.json';

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
          pageData: JSON.parse(pageData)
        }
    }
  };
</script>
