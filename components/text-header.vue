<template>
    <div class="relative">
      <div class="container flex flex-row flex-wrap mb-4 text-gray-300 text-gray-300">
        <a class="text-gray-800 mr-2">{{ $t('homepage__breadcrumb__title') }}</a>
        <span class="block mr-2">></span>
        <a class="text-gray-800 mr-2">{{ breadcrumb }}</a>
      </div>
        {{ description }}
    </div>
</template>

<script>
  export default {
    name: 'cImageHeader',
    props: {
      'title': {
        type: String,
        default: '',
        required: false
      },
      'image': {
        type: String,
        default: '/images/uploads/natural-lift.jpeg',
        required: false
      },
      'description': {
        type: String,
        required: false
      },
      'breadcrumb': {
        type: String,
        required: false
      },
    },
  }
</script>


<style scoped>

</style>