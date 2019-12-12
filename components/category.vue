<template>
  <div class="">
      {{ title }}
      <br/>
      {{ link }}
      <br/>
      {{ image }}
      <br/>
      {{ description }}
      <br/>
      {{ option }}
  </div>
</template>

<script>
  export default {
    name: 'cCategory',
    props: {
      'title': {
        type: String,
        default: '',
        required: false
      },
      'link': {
        type: String,
        default: '',
        required: false
      },
      'image': {
        type: String,
        default: '/images/uploads/logo.png',
        required: false
      },
      'description': {
        type: String,
        required: false
      },
      'option': {
        type: String,
        required: false
      },
    },
  }
</script>


<style scoped>

</style>