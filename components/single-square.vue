<template>
  <div :class="mainClass" class="block">
    <a
        :href="link"
        class="btn raise center tc"
      >
      <figure class="relative h-full">
         <picture
          v-if="image !== ''"
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
        <figcaption class="absolute bottom-0 left-0 right-0 uppercase font-semibold text-shadow">
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
    },
  }
</script>

<style scoped>
  .text-shadow{
    text-shadow: -3px -3px 3px #fff, 3px 3px 3px #fff;
  }
</style>
