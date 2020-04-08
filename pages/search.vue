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
  .gsc-control-cse{
    padding: 0;
    text-align: left;
  }

  .gsc-control-cse .gsc-webResult.gsc-result{
    border-left: 1px solid;
    border-color: transparent;
    border-bottom: 1px solid;
  }

  .gsc-control-cse .gsc-webResult.gsc-result:first-child{
    border-top: 1px solid;
  }

  .gsc-control-cse .cse .gsc-webResult.gsc-result:hover, 
  .gsc-control-cse .gsc-webResult.gsc-result:hover, 
  .gsc-control-cse .gsc-webResult.gsc-result.gsc-promotion:hover, 
  .gsc-control-cse .gsc-results .gsc-imageResult-classic:hover, 
  .gsc-control-cse .gsc-results .gsc-imageResult-column:hover {
      border-left: 1px solid;
      border-color: #000000;
      border-bottom: 1px solid;
  }

  .gsc-control-cse .gcsc-branding-text,
  .gsc-control-cse .gcsc-find-more-on-google{
    display: none;
  }
</style>
