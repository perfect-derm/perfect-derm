<template>
  <div class="flex-l flex-wrap items-center mhn1-l ph3 center mw7 pv4 ph3" :class="mainClass">

    <div class="w-40-l flex flex-column justify-start items-center items-start-l flex-wrap">
      <h2 class="f2 mb0 b lh-title tc tl-l w-100" :class="theme === 'dark' ? 'grey-4' : 'primary'">
        {{ data.section_title }}
      </h2>

      <p class="pr3-l flex justify-center items-center justify-start-l tl mv3 grey-4 w-100" v-if="data.section_image">
        <span v-html="data.section_description"></span>
      </p>

      <a
        v-if="data.section_button_link && (data.section_layout_button === 'section_layout_button_text')"
        :href="data.section_button_link"
        class="btn raise tl items-center-l items-start justify-start mb3"
      >
        {{ data.section_button_title }}
      </a>
    </div>

    <div class="w-60-l mb0 flex justify-center items-center self-stretch">
      <p v-if="!data.section_image" class="pl3-m center flex justify-center justify-start-l items-center tl mv3 grey-4">
        <span v-html="data.section_description"></span>
      </p>

      <img v-if="data.section_image !== ''" :src="data.section_image" alt="" class="mb3 self-start">

      <a
        v-if="data.section_button_link && (data.section_layout_button === 'section_layout_button_image')"
        :href="data.section_button_link"
        class="btn raise tl ml0 mb3"
      >
        {{ data.section_button_title }}
      </a>
    </div>

    <div
      v-if="data.section_button_link && (data.section_layout_button === 'section_layout_button_end')"
      class="w-100-l tc"
    >
      <a :href="data.section_button_link" class="btn raise">{{ data.section_button_title }}</a>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'cLayoutDuo',
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
          section_title: "",
          section_description: "",
          section_image: false,
          section_button_title: "",
          section_button_link: false
        },
        required: false
      }
    },
    mounted() {
      this.data.section_description = this.data.section_description.split(/\n/).join('<br/>');
    },
  }
</script>

<style>

</style>
