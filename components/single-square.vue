<template>
  <div :class="mainClass" class="block">
    <a
        :href="link"
        class="btn raise center tc"
      >
      <figure class="relative h-full min-h-full flex">
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
              'top-0' : textPlacementUp,
              'bottom-0' : textPlacementDown
            }"
            class="absolute left-0 right-0 uppercase font-semibold text-shadow"
          >
          {{ title }}
        </figcaption>
      </figure>
    </a>
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
      'titlePlacement': {
        type: Number,
        default: 2,
        required: false
      },
    },
    computed: {
      textPlacementUp : function (){
        return (this.textPlacement === 1) ? true : false;
      },
      textPlacementDown : function (){
        return (this.textPlacement === 2) ? true : false;
      }
    }
  }
</script>

<style scoped>
  .text-shadow{
    text-shadow: -1px -1px 1px #fff, 1px 1px 1px #fff;
  }
</style>
