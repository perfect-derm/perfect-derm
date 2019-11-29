<template>
  <div :class="mainClass" class="block">
    <a
        :href="link"
        class="btn raise center tc"
      >
      <figure>
         <picture
          v-if="image !== ''"
         >
          <source :srcSet="require('.' + image + '?webp')" type="image/webp" />
          <source :srcSet="require('.' + image)" type="image/jpeg" />
          <img 
            class="center tc"
            alt=""
            :src="require('.' + image)" 
          />
        </picture>
        <figcaption>
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
      mounted() {
        // this.data.section_description = this.data.section_description.split(/\n/).join('<br/>');
      },
    }
  }
</script>

<style>

</style>
