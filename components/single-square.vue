<template>
  <div :class="mainClass" class="mw7 pv4 ph3 center">
      <a
        :href="data.section_button_link"
        class="btn raise center tc"
      >
        <img
          v-if="data.section_image !== ''"
          :src="data.section_image"
          class="center tc"
          alt=""
        />
        <span>
          {{ data.section_button_title }}
        </span>
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
      'theme': {
        type: String,
        default: 'light',
        required: false
      },
      'data': {
        type: Object,
        default: {
          square_title: "",
          section_description: "",
          section_image: "",
          section_button_title: "",
          section_button_link: ""
        },
        required: false
      },
      mounted() {
        this.data.section_description = this.data.section_description.split(/\n/).join('<br/>');
      },
    }
  }
</script>

<style>

</style>
