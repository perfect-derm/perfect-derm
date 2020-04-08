<template>
  <div>
    <div class="gcse-searchbox"></div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        script: [
          { src: 'https://cse.google.com/cse.js?cx=012771998850578004477:qq4hycnubjy', defer: true  }
        ],
      }
    },
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      }
    },
    mounted: function(){
      
    }
  };
</script>
