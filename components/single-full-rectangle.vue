<template>
  <div :class="mainClass" class="block">
    <a
        :href="link"
        class="btn raise center tc"
      >
      <figure>
        <img
          v-if="image !== ''"
          :src="image"
          class="center tc"
          alt=""
        />
        <figcaption>
          {{ title }}
        </figcaption>
      </figure>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'cSingleFullSquare',
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
