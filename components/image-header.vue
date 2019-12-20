<template>
    <div class="relative mb-20">
      <div class="h-600px">
        <img :src="require(`~/static${image}?resize&size=1920`)" alt="" class="h-full w-full object-cover object-top"/>
      </div>

      <div class="container flex flex-row flex-wrap mb-4 mt-2">
        <a class="mr-2">{{ $t('homepage__breadcrumb__title') }}</a>
        <span class="block mr-2">|</span>
        <a class="mr-2">{{ breadcrumb }}</a>
      </div>

      <div class="container text-left p-4">
        <h1 class="font-light text-5xl uppercase mb-4">{{ title }}</h1>
        <div class="font-light" v-html="$md.render(description)"></div>
      </div>
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