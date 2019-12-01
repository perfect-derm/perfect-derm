<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="banner h-200px w-full" v-swiper:partners="swiperOption">
    <ul class="swiper-wrapper">
      <li class="swiper-slide h-auto" v-if="$t('footer__partners__logo_1') !== ''">
        <img :src="require('~/static' + $t('footer__partners__logo_1') + '?resize&size=220')" width="220" alt="" class="w-full h-full object-cover"/>
      </li>
      <li class="swiper-slide h-auto" v-if="$t('footer__partners__logo_2') !== ''">
        <img :src="require('~/static' + $t('footer__partners__logo_2') + '?resize&size=220')" width="220" alt="" class="w-full h-full object-cover"/>
      </li>  
      <li class="swiper-slide h-auto" v-if="$t('footer__partners__logo_3') !== ''">
        <img :src="require('~/static' + $t('footer__partners__logo_3') + '?resize&size=220')" width="220" alt="" class="w-full h-full object-cover"/>
      </li>
      <li class="swiper-slide h-auto" v-if="$t('footer__partners__logo_4') !== ''">
        <img :src="require('~/static' + $t('footer__partners__logo_4') + '?resize&size=220')" width="220" alt="" class="w-full h-full object-cover"/>
      </li>
      <li class="swiper-slide h-auto" v-if="$t('footer__partners__logo_5') !== ''">
        <img :src="require('~/static' + $t('footer__partners__logo_5') + '?resize&size=220')" width="220" alt="" class="w-full h-full object-cover"/>
      </li>
      <li class="swiper-slide h-auto" v-if="$t('footer__partners__logo_6') !== ''">
        <img :src="require('~/static' + $t('footer__partners__logo_6') + '?resize&size=220')" width="220" alt="" class="w-full h-full object-cover"/>
      </li>
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
          slidesPerView: 6,
          spaceBetween: 60,
          autoplay: {
            delay: 2000,
          }
        }
      }
    }
  }
</script>


<style scoped>
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide.h-auto{
    height: auto;
  }
</style>