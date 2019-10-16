<template>
  <div class="logo" :class="theme">
    <img src="~/assets/logo.svg" width="176px" height="63px" alt="" :class="classes">
  </div>
</template>

<script>
  export default {
    name: 'cLogo',
    props: {
      'theme': {
        type: String,
        default: 'light',
        required: false
      },
      'classes': {
        type: String,
        default: '',
        required: false
      },
    }
  }
</script>

<style>

</style>
