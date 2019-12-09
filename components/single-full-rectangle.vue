<template>
  <div :class="mainClass" class="block">
    <nuxt-link
        :to="link"
        class="flex flex-row btn raise center text-left"
      >
      <div class="flex-auto p-8">
        <h2 class="text-xl mb-4">
          {{ title }}
        </h2>
        <p v-html="$md.render(description)"></p>
      </div>
      <div class="flex-none">
        <img
          v-if="photo !== ''"
          :src="photo"
          class="center tc"
          alt=""
          width="200px"
          height="auto"
        />
      </div>
    </nuxt-link>
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
      'description': {
        type: String,
        default: '',
        required: false
      },
      'link': {
        type: String,
        default: '',
        required: false
      },
      'photo': {
        type: String,
        default: '/images/uploads/logo.png',
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
