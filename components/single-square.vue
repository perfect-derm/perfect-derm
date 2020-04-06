<template>
  <div 
    :class="{
      [mainClass]: mainClass
    }" 
    class="block"
    data-aos="fade-up"
    data-aos-offset="150"
    data-aos-duration="600"
  >
    <nuxt-link
        :to="link"
        class="square-link block border-b-8 border-solid border-transparent hover:border-primary h-full shadow-box"
      >
      <figure 
        class="relative h-full min-h-full flex flex-col"
      >
          <h2 
            v-if="!theme"
            class="absolute top-0 bottom-0 z-20 p-4 text-2xl word-spacing-all leading-none mb-4"
          >
            {{ title }}
          </h2>
         <picture
          class="flex flex-1 overflow-hidden"
         >
          <source :srcSet="require(`~/static${image}?webp&resize&size=600`)" type="image/webp" />
          <source :srcSet="require(`~/static${image}?resize&size=600`)" type="image/jpeg" />
          <img 
            class="object-cover w-full h-auto center tc h-full img-animation"
            :alt="title"
            :src="require(`~/static${image}?resize&size=448`)"
            height="298"
            width="448"
          />
        </picture>
        <figcaption
          class="absolute font-light bottom-0 z-10 left-0 right-0 z-10 text-left p-4"
          :class="{
            'gradient-shadow': theme,
            'bg-white': !theme
          }"
        >
          <h2 
            v-if="theme"
            class="text-2xl word-spacing-all leading-none mb-4"
          >
            {{ title }}
          </h2>
          <span 
            class="link-unstyled no-underline uppercase flex flex-row items-center"
          >
            {{ linkTitle }}
            
            <div 
              class="ml-1 w-6 h-3 arrow-icon"
              v-html="require('~/assets/arrow-custom.svg?include')"
            />
          </span>
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
      'link-title': {
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
        type: Boolean,
        default: false,
        required: false
      },
    },
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

  .word-spacing-all{
    word-spacing: 100vw;
  }

  .gradient-shadow{
    background: linear-gradient(to bottom, transparent 0%,#ffffff 38%, #ffffff 100%);
  }

  .shadow-box{
    box-shadow: 0px 5px 10px 4px rgba(0, 0, 0, 0.12);
  }


  .square-link .arrow-icon >>> svg rect{
    @apply duration-300;
  }

  .square-link .arrow-icon{
    @apply duration-300;
  }

  .square-link:hover .arrow-icon{
    @apply ml-2;
  }

  .square-link:hover .arrow-icon >>> svg rect{
    width: 47px;
    x: 0;
  }
</style>
