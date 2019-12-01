<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="banner h-600px w-full flex items-end justify-center overflow-hidden" v-swiper:banner="swiperOption">
    <ul class="swiper-wrapper">
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_1__image') !== ''">
        <img :src="require('~/static' + $t('homepage__banner_1__image') + '?resize&size=1920')" alt="" class="w-full h-full object-cover"/>
        <div class="absolute top-200px left-50px right-auto">
          <h2 class="text-left max-w-700px text-3xl text-grey-700" v-html="$options.filters.break($t('homepage__banner_1__title'))"></h2>            
          <p class="text-left max-w-700px text-2xl text-grey-600">
            {{ $md.render(this.$t('homepage__banner_1__description')) }}
          </p>
        </div>
      </li>
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_2__image') !== ''">
        <img :src="require('~/static' + $t('homepage__banner_2__image') + '?resize&size=1920')" alt="" class="w-full h-full object-cover"/>
        <div class="absolute top-200px left-auto right-50px">
          <h2 class="text-left max-w-700px text-3xl text-grey-700" v-html="$options.filters.break($t('homepage__banner_2__title'))"></h2>            
          <p class="text-left max-w-700px text-2xl text-grey-600">
            {{ $md.render(this.$t('homepage__banner_2__description')) }}
          </p>
        </div>    
      </li>  
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_3__image') !== ''">
        <img :src="require('~/static' + $t('homepage__banner_3__image') + '?resize&size=1920')" alt="" class="w-full h-full object-cover"/>
        <div class="absolute top-200px left-auto right-50px">
          <h2 class="text-left max-w-700px text-3xl text-grey-700" v-html="$options.filters.break($t('homepage__banner_3__title'))"></h2>            
          <p class="text-left max-w-700px text-2xl text-grey-600">
            {{ $md.render(this.$t('homepage__banner_3__description')) }}
          </p>
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