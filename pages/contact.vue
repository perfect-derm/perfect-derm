<template>
  <div>
    <hr class="mb-2" />

    <div class="container flex flex-wrap mt-10">
      <div class="w-full lg:w-1/2 lg:pr-4 flex flex-wrap mb-6">
        <div class="text-left contact-desc" v-html="$options.filters.italicAsAddress(desc)"></div>
      </div>
      <div class="w-full lg:w-1/2 flex flex-wrap mb-6">
        <form class="w-full max-w-lg text-left" 
          netlify 
          data-netlify-recaptcha="true"
          netlify-honeypot="bot-message"
        >
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Imię i nazwisko
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text">
              <p class="text-gray-600 text-xs italic">Prosimy o podanie minimum imienia by wiedzieć jak możemy się do Ciebie zwracać</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                E-mail
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
              <p class="text-gray-600 text-xs italic">Email zostanie wykorzystany do kontaktu z Tobą</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Wiadomość
              </label>
              <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-24" id="message"></textarea>
            </div>
          </div>
          <div class="hidden invisible">
            <label>Only for non human activities: <input name="bot-message" /></label>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3">
              <button class="shadow bg-gray-700 hover:bg-gray-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Wyślij
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .contact-desc >>> h1{
    @apply font-light;
    @apply text-5xl;
    @apply uppercase;
    @apply mb-4;
  }

  .contact-desc >>> h2{
    @apply font-light;
    @apply text-xl;
    @apply uppercase;
    @apply mb-4;
  }

  .contact-desc >>> address,
  .contact-desc >>> p{
    @apply font-light;
    @apply mb-4;
  }
</style>

<script>
  export default {
    layout: 'simple-footer',
    computed: {
      desc: function(){
        return this.$md.render(this.$t('contact__description__description'));
      },
    },
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      }
    }
  };
</script>
