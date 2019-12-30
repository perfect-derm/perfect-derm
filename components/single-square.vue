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
        class="btn raise center tc"
      >
      <figure 
        class="relative h-full min-h-full flex flex-col"
      >
         <picture
          class="flex flex-1 overflow-hidden"
         >
          <source :srcSet="require(`~/static${image}?webp&resize&size=448`)" type="image/webp" />
          <source :srcSet="require(`~/static${image}?resize&size=448`)" type="image/jpeg" />
          <img 
            class="object-cover w-full h-auto max-h-310 center tc h-full img-animation"
            :alt="title"
            :src="require(`~/static${image}?resize&size=448`)"
            height="298"
            width="448"
          />
        </picture>
        <figcaption
            :class="{ 
              'absolute font-light top-0 uppercase' : textPlacementUpAbsolute,
              'absolute font-light bottom-0 uppercase' : textPlacementDownAbsolute,
              'relative font-normal text-gray-600 order-first' : textUpRelative,
            }"
            class="text-2xl bg-backgroundSemiTransparent left-0 right-0 z-10"
          >
          {{ title }}
        </figcaption>
      </figure>
    </nuxt-link>
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
        default: '/images/uploads/logo.png',
        required: false
      },
      'theme': {
        type: Number,
        default: 2,
        required: false
      },
    },
    computed: {
      textPlacementUpAbsolute : function (){
        return (parseInt(this.theme) === 1) ? true : false;
      },
      textPlacementDownAbsolute : function (){
        return (parseInt(this.theme) === 2) ? true : false;
      },
      textUpRelative : function (){
        return (parseInt(this.theme) === 3) ? true : false;
      }
    }
  }
</script>

<style scoped>
  .background-bar:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 27px;
    background: rgba(255, 255, 255, 0.7);
  }
  
  .background-top-bar:after {
    top: 0;
    bottom: auto;
  }

  .background-bottom-bar:after {
    top: auto;
    bottom: 0;
  }
</style>
