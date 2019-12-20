<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="banner h-450px sm:h-600px w-full flex items-end justify-center overflow-hidden" v-swiper:banner="swiperOption">
    <ul class="swiper-wrapper">
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_1__image') !== ''">
        <img :src="require('~/static' + $t('homepage__banner_1__image') + '?resize&size=1920')" alt="" class="w-full h-full object-cover opacity-50 md:opacity-100"/>
        <div class="absolute top-auto left-auto right-auto mx-2 container">
          <div class="container text-white text-left">
            <h1 class="h1 md:max-w-1/2 text-5xl md:text-6xl uppercase mb-5" v-html="$options.filters.break($t('homepage__banner_1__title'))"></h1>            
            <div 
              class="md:max-w-1/2 text-base md:text-4xl font-normal"
              v-if="$te('homepage__banner_1__description')"
              v-html="$md.render(this.$t('homepage__banner_1__description'))"
            ></div>
          </div>
        </div>
      </li>
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_2__image') !== ''">
        <img :src="require('~/static' + $t('homepage__banner_2__image') + '?resize&size=1920')" alt="" class="w-full h-full object-cover opacity-50 md:opacity-100"/>
        <div class="absolute top-auto left-auto right-auto mx-2 container">
          <div class="container text-white text-left">
            <h2 class="h1 lg:max-w-1/2 text-5xl md:text-6xl uppercase mb-5 ml-auto" v-html="$options.filters.break($t('homepage__banner_2__title'))"></h2>            
            <div 
              class="md:max-w-1/2 text-base md:text-4xl font-normal ml-auto"
              v-if="$te('homepage__banner_2__description')" 
              v-html="$md.render(this.$t('homepage__banner_2__description'))"
            ></div>
          </div>
        </div>    
      </li>  
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_3__image') !== ''">
        <img :src="require('~/static' + $t('homepage__banner_3__image') + '?resize&size=1920')" alt="" class="w-full h-full object-cover opacity-50 md:opacity-100"/>
        <div class="absolute top-auto left-auto right-auto mx-2 container">
          <div class="container text-white text-left">
            <h2 class="h1 md:max-w-1/2 text-5xl md:text-6xl uppercase mb-5" v-html="$options.filters.break($t('homepage__banner_3__title'))"></h2>            
            <div 
              class="md:max-w-1/2 text-base md:text-4xl font-normal"
              v-if="$te('homepage__banner_3__description')"
              v-html="$md.render(this.$t('homepage__banner_3__description'))"
            ></div>
          </div>
        </div>          
      </li>
    </ul>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
  export default {
    name: 'cBanner',
    data () {
      return {
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          autoplay: {
            delay: 4000,
          },
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true
          }
        }
      }
    }
  }
</script>


<style scoped>
  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-pagination > .swiper-pagination-bullet {
    background-color: red;
  }

  .swiper-slide.h-auto{
    height: auto;
  }

  .swiper-pagination >>> .swiper-pagination-bullet.swiper-pagination-bullet-active{
    background: #ccc;
  }

  .swiper-pagination >>> .swiper-pagination-bullet{
    border-radius: 0;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>