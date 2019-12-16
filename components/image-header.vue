<template>
    <div class="relative mb-20">
      <div class="h-600px">
        <img :src="require(`~/static${image}?resize&size=1920`)" alt="" class="h-full w-full object-cover"/>
      </div>

      <div class="container absolute bottom-10 left-0 right-0 flex flex-row flex-wrap mb-4 text-gray-300 text-gray-300">
        <a class="text-gray-300 mr-2">{{ $t('homepage__breadcrumb__title') }}</a>
        <span class="block mr-2">></span>
        <a class="text-gray-300 mr-2">{{ breadcrumb }}</a>
      </div>

      <h1>{{ title }}</h1>
      <div class="text-left" v-html="$md.render(description)"></div>
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