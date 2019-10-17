<template>
  <div class="flex flex-column min-vh-100">

    <nav class="flex flex-wrap justify-between items-center center bg-white divider-grey relative w-100" style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
      <a href="/" class="pa3 db mr4 h-100 w4 flex-none mh0" style="flex: 0;">
        <cLogo
          theme="light"
          classes="br0 db mb0 w-100 h-auto"
        />
      </a>

      <ul class="menu flex flex-wrap b grey-3 justify-center">
        <li>
          <nuxt-link :to="'/'" class="pa2 pa3-ns no-underline db">Strona główna</nuxt-link>
        </li>
      </ul>
    </nav>

    <main class="flex-auto tc">
      <nuxt class="center mw7 pb5"/>
    </main>

    <footer class="bg-black ph3 pt4 pb1 white">

    </footer>
  </div>
</template>

<script>
  import cLogo from '~/components/logo.vue';

  export default {
    components: {
      cLogo
    },
    mounted(){
      // var street = this.address.company_street.split(/\n/);
      // this.address.company_street_line_1 = street[0];

      // if(street.length > 1){
        // this.address.company_street_line_2 = street[1];
      // }
    }
  }
</script>

<style type="text/css">
  
</style>
