<template>
  <div class="logo" :class="logoClass">
    <img src="~/assets/logo.png?resize&size=300&inline" width="300px" height="118px" :alt="imgAlt" :class="imgClass" class="logo">
  </div>
</template>

<script>
  export default {
    name: 'Logo',
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

<style scoped>
  .logo{
    max-height: 70px;
    width: auto;
  }

  @media(min-width: 1024px){
    .logo{
      margin-top: -20px;
    }
  }
</style>
