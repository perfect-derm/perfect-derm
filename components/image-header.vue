<template>
    <div class="relative mb-8">
      <div 
        class="h-600px"
        :class="{'max-h-310': isSmallHeader}"
      >
        <img :src="require(`~/static${image}?resize&size=1920`)" alt="" class="h-full w-full object-cover object-top"/>
      </div>

      <div class="container flex flex-row flex-wrap mb-4 mt-2">
        <a class="mr-2">{{ $t('homepage__breadcrumb__title') }}</a>
        <span class="block mr-2">|</span>
        <a class="mr-2">{{ breadcrumb }}</a>
      </div>

      <div class="container text-left p-4">
        <h1 class="font-light text-5xl uppercase mb-4">{{ title }}</h1>
        <div class="header-desc font-light lg:max-w-1/2" v-html="$md.render(description)"></div>
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
      'isSmallHeader': {
        type: Boolean,
        default: true,
        required: false
      },
    },
  }
</script>


<style scoped>
  .header-desc >>> p{
    @apply mb-4;
  }
</style>