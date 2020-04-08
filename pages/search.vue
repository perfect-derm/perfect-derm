<template>
  <div class="container">
    <div class="h-auto mt-12 mb-20">
      <div class="gcse-searchbox"></div>

      <div class="gcse-searchresults"></div>
    </div>
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

<style>
  .gcse-searchresults {
    text-align: left;
  }

  .gcse-searchresults .gsc-control-cse{
    padding: 0;
  }

  .gsc-webResult.gsc-result{
    border-left: 1px solid;
    border-color: transparent;
    border-bottom: 0px solid;
  }

  .gcsc-branding-text,
  .gcsc-find-more-on-google{
    display: none;
  }
</style>
