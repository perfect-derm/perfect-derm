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
          <source :srcSet="require(`~/static${image}?webp&resize&size=448`)" type="image/webp" />
          <source :srcSet="require(`~/static${image}?resize&size=448`)" type="image/jpeg" />
          <img 
            v-if="image !== ''"
            class="object-cover w-full h-auto max-h-310 center tc"
            alt=""
            :src="require(`~/static${image}?resize&size=448`)" 
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
