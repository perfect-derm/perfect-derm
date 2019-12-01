<template>
  <div class="logo" :class="logoClass">
    <img src="~/assets/logo.png?resize&size=300&inline" width="300px" height="118px" :alt="imgAlt" :class="imgClass">
  </div>
</template>

<script>
  export default {
    name: 'cLogo',
    props: {
      'logoClass': {
        type: String,
        default: '',
        required: false
      },
      'imgClass': {
        type: String,
        default: '',
        required: false
      },
      'imgAlt': {
        type: String,
        default: 'PerfectDerm',
        required: false
      },
    }
  }
</script>

<style>

</style>
