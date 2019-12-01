<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="banner h-600px w-full flex items-end justify-center overflow-hidden" v-swiper:banner="swiperOption">
    <ul class="swiper-wrapper">
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_1__image') !== ''">
        <img :src="require('~/static' + $t('homepage__banner_1__image') + '?resize&size=1920')" alt="" class="w-full h-full object-cover"/>
        <p class="absolute top-200px left-50px text-left max-w-700px text-2xl left-auto text-grey-700" v-html="$options.filters.break($t('homepage__banner_1__description'))">></p>
      </li>
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_2__image') !== ''">
        <img :src="require('~/static' + $t('homepage__banner_2__image') + '?resize&size=1920')" alt="" class="w-full h-full object-cover"/>
        <p class="absolute top-200px text-left max-w-700px text-2xl left-auto right-50px text-grey-700" v-html="$options.filters.break($t('homepage__banner_2__description'))">></p>     
      </li>  
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_3__image') !== ''">
        <img :src="require('~/static' + $t('homepage__banner_3__image') + '?resize&size=1920')" alt="" class="w-full h-full object-cover"/>
        <p class="absolute top-200px text-left max-w-700px text-2xl left-auto right-50px text-grey-700" v-html="$options.filters.break($t('homepage__banner_3__description'))">></p>            
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
    background-color: #eee;
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
  }
</style>