<template>
  <div 
    :class="mainClass"
    class="block"
    data-aos="fade-up"
    data-aos-offset="150"
    data-aos-duration="600"
  >
    <nuxt-link
        :to="link"
        class="flex flex-row flex-wrap sm:flex-no-wrap btn raise center text-left"
      >
      <div class="flex-auto p-2 md:p-4 lg:p-8">
        <h2 class="text-xl lg:text-4xl mb-4">
          {{ title }}
        </h2>
        <div 
          class="text-base lg:text-xl mb-4"
          v-html="$md.render(description)"
        ></div>
        <span class="button button-alternative">
          {{ linkTitle }}
        </span>
      </div>
      <div class="flex-shrink sm:flex-shrink-0 max-w-full md:w-none flex flex-col justify-center pl-2 pr-2 md:pl-0 md:pr-0 mt-2 md:mt-0 mb-2 md:mb-0 flex-none order-first md:order-last">
        <img
          v-if="photo !== ''"
          :src="photo"
          class="object-cover sm:object-scale-down lg:object-cover center tc h-full max-w-full"
          alt=""
          width="350px"
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
      'linkTitle': {
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

<style scoped>
</style>
