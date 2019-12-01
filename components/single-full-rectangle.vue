<template>
  <div :class="mainClass" class="block">
    <a
        :href="link"
        class="flex flex-row btn raise center text-left"
      >
      <div class="flex-auto">
        <h2>
          {{ title }}
        </h2>
        <p>
          {{ description }}
        </p>
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
