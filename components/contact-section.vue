<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="bg-light-gray"
  >
    <div class="container flex flex-row flex-wrap mt-8">
      <h2
        class="mb-12 w-full font-bold text-32xl"
      >
        Jak nas znaleźć?
      </h2>

      <ul class="w-full flex flex-row flex-wrap xl:flex-no-wrap xl:-mx-4 justify-center lg:mb-8">
        <li class="w-full md:w-2/5 lg:w-1/3 xl:w-1/4 mx-4 mb-8 border-4 border-solid border-secondary h-300px flex flex-col justify-center items-center">
          <a 
            :href="`tel:${$t('footer__contact__email')}`"
            class="flex flex-col justify-start items-center"
          >
            <img 
              :src="require(`~/static/images/uploads/envelope.png?webp&resize&size=80`)" 
              alt="Email"
              width="70px"
              class="opacity-50 mb-2"
            />
            <h3 class="text-primary mb-2">
              Napisz do nas
            </h3>
            <hr class="w-1/3 mb-2 border-secondary border-t-2"/>
            <span class="block text-base text-primary">
              {{ $t('footer__contact__email') }}
            </span>
          </a>
        </li>
        <li class="w-full md:w-2/5 lg:w-1/3 xl:w-1/4 mx-4 mb-8 border-4 border-solid border-secondary h-300px flex flex-col justify-center items-center">
          <a 
            :href="`tel:${$t('footer__contact__telephone')}`"
            class="flex flex-col justify-start items-center"
          >
            <img 
              :src="require(`~/static/images/uploads/telephone.png?webp&resize&size=80`)" 
              alt="Telephone"
              width="70px"
              class="opacity-50 mb-2"
            />
            <h3 class="text-primary mb-2">
              Zadzwoń
            </h3>
            <hr class="w-1/3 mb-2 border-secondary border-t-2"/>
            <span class="block text-xl text-primary">
              {{ $t('footer__contact__telephone') }}
            </span>
          </a>
        </li>
        <li class="w-full md:w-2/5 lg:w-1/3 xl:w-1/4 mx-4 mb-8 border-4 border-solid border-secondary h-300px flex flex-col justify-center items-center">
          <div
            class="flex flex-col justify-start items-center"
          >
            <img 
              :src="require(`~/static/images/uploads/mark.png?webp&resize&size=80`)" 
              alt="Mark"
              width="70px"
              class="opacity-50 mb-2"
            />
            <h3 class="text-primary mb-2">
              Odwiedź nas
            </h3>
            <hr class="w-1/3 mb-2 border-secondary border-t-2"/>
            <address class="block text-base text-primary not-italic inline-format text-center" v-html="$options.filters.break($t('footer__company__adress'))"></address>
          </div>
        </li>
        <li class="w-full md:w-2/5 lg:w-1/3 xl:w-1/4 mx-4 mb-8 border-4 border-solid border-secondary h-300px flex flex-col justify-center items-center">
          <div
            class="flex flex-col justify-start items-center"
          >
            <img 
              :src="require(`~/static/images/uploads/clock.png?webp&resize&size=80`)" 
              alt="Clock"
              width="70px"
              class="opacity-50 mb-2"
            />
            <h3 class="text-primary mb-2">
              Godziny otwarcia
            </h3>
            <hr class="w-1/3 mb-2 border-secondary border-t-2"/>
            <div class="flex flex-wrap items-center text-base text-primary px-10 inline-format" v-html="$md.renderInline(this.$t('footer__opening__hours'))"></div>
          </div>
        </li>
      </ul>

      <h3 class="mb-2 lg:mb-12 flex-initial mr-8">
        Chcesz umówić wizytę?
      </h3>

      <nuxt-link
        to="contact"
        class="link-styled mb-8 lg:mb-12 flex-initial lg:mt-1"
      >
        Umów wizytę teraz
      </nuxt-link>
    </div>
  </component>
</template>

<script>
  export default {
    name: 'ContactSection',
    props: {
      'tag': {
        type: String,
        default: 'section',
        required: false
      },
    },
  }
</script>

<style scoped>
  .inline-format >>> b{
    font-weight: bold;
    flex: 1 1 auto;
  }
</style>