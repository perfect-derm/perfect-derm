<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="banner" v-swiper:mySwiper="swiperOption">
    <ul class="swiper-wrapper">
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_1__image') !== ''">
        <img :src="require('~/static' + $t('homepage__banner_1__image') + '?resize&size=1920')" alt="" class="w-full h-full object-cover"/>
        <p class="absolute top-200px left-50px">
          {{ $t('homepage__banner_1__description') }}
        </p>
      </li>
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_2__image') !== ''">
        <img :src="require('~/static' + $t('homepage__banner_2__image') + '?resize&size=1920')" alt="" class="w-full h-full object-cover"/>
        <p class="absolute top-200px left-50px">
          {{ $t('homepage__banner_2__description') }}
        </p>     
      </li>  
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_3__image') !== ''">
        <img :src="require('~/static' + $t('homepage__banner_3__image') + '?resize&size=1920')" alt="" class="w-full h-full object-cover"/>
        <p class="absolute top-200px left-50px">
          {{ $t('homepage__banner_3__description') }}
        </p>            
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
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          }
        }
      }
    }
  }
</script>


<style scoped>
  .banner {
    height: 600px;
    width: 100%;
  }

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
</style>