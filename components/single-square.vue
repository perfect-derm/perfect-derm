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
            class="absolute top-0 bottom-0 z-20 p-4 text-2xl word-spacing-all leading-none mb-6"
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
          class="absolute font-light bottom-0 z-10 left-0 right-0 z-10 text-left"
          :class="{
            'gradient-shadow p-4': theme,
            'bg-white p-2 px-4 pb-0': !theme
          }"
        >
          <h2 
            v-if="theme"
            class="text-2xl word-spacing-all leading-none mb-4"
          >
            {{ title }}
          </h2>
          <span 
            class="link-unstyled hover:border-transparent uppercase flex flex-row items-center"
          >
            <span class="block mr-1">
              {{ linkTitle }}
            </span>
            <div 
              class="w-6 h-3 arrow-icon"
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


  .square-link .arrow-icon >>> svg path{
    @apply duration-300;
    @apply transition-transform;
  }

  .square-link .arrow-icon{
    @apply duration-300;
  }
  
  .arrow-icon >>> svg{
    width: 100%;
    height: 100%;
  }

  .square-link .arrow-icon >>> svg path{
    transform: translateX(-50px);
  }

  .square-link:hover .arrow-icon >>> svg path:first-child{
    transform: translateX(0px);
  }

  .square-link:hover .arrow-icon >>> svg path:last-child{
    transform: translateX(-40px) scaleX(1.2);
  }
</style>
