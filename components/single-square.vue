<template>
  <div :class="mainClass" class="block">
    <nuxt-link
        :to="link"
        class="btn raise center tc"
      >
      <figure class="relative h-full min-h-full flex flex-col">
         <picture
          v-if="image !== ''"
          class="flex flex-1"
         >
          <source :srcSet="require(`~/static${image}?webp&resize&size=448`)" type="image/webp" />
          <source :srcSet="require(`~/static${image}?resize&size=448`)" type="image/jpeg" />
          <img 
            v-if="image !== ''"
            class="object-cover w-full h-auto max-h-310 center tc h-full"
            :alt="title"
            :src="require(`~/static${image}?resize&size=448`)"
          />
        </picture>
        <figcaption
            :class="{ 
              'absolute top-0 uppercase text-shadow' : textPlacementUpAbsolute,
              'absolute bottom-0 uppercase text-shadow' : textPlacementDownAbsolute,
              'relative text-gray-600 order-first' : textUpRelative,
            }"
            class="left-0 right-0 font-semibold "
          >
          {{ title }}
        </figcaption>
      </figure>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'cSingleSquare',
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      },
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
        default: '',
        required: false
      },
      'theme': {
        type: Number,
        default: 2,
        required: false
      },
    },
    computed: {
      textPlacementUpAbsolute : function (){
        return (this.theme === 1) ? true : false;
      },
      textPlacementDownAbsolute : function (){
        return (this.theme === 2) ? true : false;
      },
      textUpRelative : function (){
        return (this.theme === 3) ? true : false;
      }
    }
  }
</script>

<style scoped>
  .text-shadow{
    text-shadow: -1px -1px 1px #fff, 1px 1px 1px #fff;
  }
</style>
