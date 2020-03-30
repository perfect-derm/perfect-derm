<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="w-full overflow-hidden" v-swiper:partners="swiperOption">
    <ul class="swiper-wrapper">
      <!-- <li class="swiper-c-slide w-full md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/6 h-auto" v-if="$t('footer__partners__logo_1') !== ''">
        <img :src="require('~/static' + $t('footer__partners__logo_1') + '?resize&size=220')" width="220" alt="" class="object-scale-down px-4 h-full flex-1"/>
      </li>
      <li class="swiper-c-slide w-full md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/6 h-auto" v-if="$t('footer__partners__logo_2') !== ''">
        <img :src="require('~/static' + $t('footer__partners__logo_2') + '?resize&size=220')" width="220" alt="" class="object-scale-down px-4 h-full flex-1"/>
      </li>  
      <li class="swiper-c-slide w-full md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/6 h-auto" v-if="$t('footer__partners__logo_3') !== ''">
        <img :src="require('~/static' + $t('footer__partners__logo_3') + '?resize&size=220')" width="220" alt="" class="object-scale-down px-4 h-full flex-1"/>
      </li>
      <li class="swiper-c-slide w-full md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/6 h-auto" v-if="$t('footer__partners__logo_4') !== ''">
        <img :src="require('~/static' + $t('footer__partners__logo_4') + '?resize&size=220')" width="220" alt="" class="object-scale-down px-4 h-full flex-1"/>
      </li>
      <li class="swiper-c-slide w-full md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/6 h-auto" v-if="$t('footer__partners__logo_5') !== ''">
        <img :src="require('~/static' + $t('footer__partners__logo_5') + '?resize&size=220')" width="220" alt="" class="object-scale-down px-4 h-full flex-1"/>
      </li>
      <li class="swiper-c-slide w-full md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/6 h-auto" v-if="$t('footer__partners__logo_6') !== ''">
        <img :src="require('~/static' + $t('footer__partners__logo_6') + '?resize&size=220')" width="220" alt="" class="object-scale-down px-4 h-full flex-1"/>
      </li> -->
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'cPartners',
    data () {
      return {
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: false,
          loopedSlides: 12,
          slidesPerGroup: 1,
          spaceBetween: 1,
          autoplay: {
            delay: 5000,
          },
          slideClass: 'swiper-c-slide'
        }
      }
    }
  }
</script>


<style scoped>
  .swiper-c-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    height: 100%;
    position: relative;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    -webkit-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
 }

  .swiper-c-slide.h-auto{
    height: auto;
  }
</style>