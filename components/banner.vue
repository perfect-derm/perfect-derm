<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="banner h-450px sm:h-600px w-full flex items-end justify-center overflow-hidden" v-swiper:banner="swiperOption">
    <ul class="swiper-wrapper">
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_1__image') !== ''">
        <img :src="require(`~/static${$t('homepage__banner_1__image')}?resize&size=1920`)" alt="" class="w-full h-full object-cover opacity-50 md:opacity-100"/>
        <div class="absolute top-auto left-auto right-auto container">
          <div class="flex flex-row text-left md:max-w-1/2">
            <div class="relative flex flex-col justify-center mr-16 swiper-pagination swiper-pagination-bullets"></div>
            <div class="flex flex-col">
              <h1 class="h1 text-5xl md:text-6xl uppercase mb-5 leading-none" v-html="$options.filters.break($t('homepage__banner_1__title'))"></h1>            
              <div 
                class="text-base md:text-4xl font-normal italic text-gray-700 mb-8"
                v-if="$te('homepage__banner_1__description')"
                v-html="$md.render(this.$t('homepage__banner_1__description'))"
              ></div>
              <div class="flex-initial w-full">
                <a 
                  v-if="$te('homepage__banner_1__button')"
                  :href="$t('homepage__banner_1__link')"
                  class="no-underline border-b-2 border-gray-700 pb-1 uppercase text-sm"
                >
                  {{ $t('homepage__banner_1__button') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_2__image') !== ''">
        <img :src="require(`~/static${$t('homepage__banner_2__image')}?resize&size=1920`)" alt="" class="w-full h-full object-cover opacity-50 md:opacity-100"/>
        <div class="absolute top-auto left-auto right-auto container">
          <div class="flex flex-row-reverse text-left md:max-w-1/2 md:ml-auto">
            <div class="relative flex flex-col items-end justify-center ml-16 swiper-pagination swiper-pagination-bullets"></div>
            <div class="flex flex-col">
              <h2 class="h1 text-5xl md:text-6xl uppercase mb-5 leading-none" v-html="$options.filters.break($t('homepage__banner_2__title'))"></h2>            
              <div 
                class="text-base md:text-4xl font-normal italic text-gray-700 mb-8"
                v-if="$te('homepage__banner_2__description')" 
                v-html="$md.render(this.$t('homepage__banner_2__description'))"
              ></div>
              <div class="flex-initial w-full">
                <a 
                  v-if="$te('homepage__banner_2__button')"
                  :href="$t('homepage__banner_2__link')"
                  class="no-underline border-b-2 border-gray-700 pb-1 uppercase text-sm"
                >
                  {{ $t('homepage__banner_2__button') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>  
      <li class="swiper-slide h-auto" v-if="$t('homepage__banner_3__image') !== ''">
        <img :src="require(`~/static${$t('homepage__banner_3__image')}?resize&size=1920`)" alt="" class="w-full h-full object-cover opacity-50 md:opacity-100"/>
        <div class="absolute top-auto left-auto right-auto container">
          <div class="flex flex-row text-left md:max-w-1/2">
            <div class="relative flex flex-col justify-center mr-16 swiper-pagination swiper-pagination-bullets"></div>
            <div class="flex flex-col">
              <h2 class="h1 text-5xl md:text-6xl uppercase mb-5 leading-none" v-html="$options.filters.break($t('homepage__banner_3__title'))"></h2>            
              <div 
                class="text-base md:text-4xl font-normal italic text-gray-700 mb-8"
                v-if="$te('homepage__banner_3__description')"
                v-html="$md.render(this.$t('homepage__banner_3__description'))"
              ></div>
              <div class="flex-initial w-full">
                <a 
                  v-if="$te('homepage__banner_3__button')"
                  :href="$t('homepage__banner_3__link')"
                  class="no-underline border-b-2 border-gray-700 pb-1 uppercase text-sm"
                >
                  {{ $t('homepage__banner_3__button') }}
                </a>
              </div>
            </div>
          </div>
        </div>     
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    data () {
      return {
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          // autoplay: {
          //   delay: 4000,
          // },
          pagination: {
            el: '.swiper-pagination',
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
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination.relative{
    position: relative;
  }
  
  .swiper-pagination > .swiper-pagination-bullet {
    background-color: red;
  }

  .swiper-slide.h-auto{
    height: auto;
  }

  .swiper-pagination >>> .swiper-pagination-bullet.swiper-pagination-bullet-active{
    background: #000;
    width: 50px;
  }

  .swiper-pagination >>> .swiper-pagination-bullet{
    border-radius: 0;
    height: 6px;
    width: 40px;
    margin-bottom: 10px;
  }
</style>