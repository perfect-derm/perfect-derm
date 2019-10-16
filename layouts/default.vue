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
          <nuxt-link :to="'/contact'" class="pa2 pa3-ns no-underline db">Kontakt</nuxt-link>
        </li>
      </ul>
    </nav>

    <main class="flex-auto tc">
      <nuxt class="center mw7 pb5"/>
    </main>

    <footer class="bg-black ph3 pt4 pb1 white">

      <div class="mw7 center pt3">

        <div class="measure-narrow center mb4">

          <a href="/" class="no-underline db">
            <cLogo
              theme="dark"
              classes="db w4 center mb4 br0 h-auto"
            />
          </a>
        </div>

        <div class="flex-ns justify-between">

          <div>
            <h3 class="f4 b lh-title mb1 primary">Menu</h3>
            <ul class="mb3">
              <li><nuxt-link :to="'/contact'" class="link db">Kontakt</nuxt-link></li>
            </ul>
          </div>

          <div class="mb3">
            <h3 class="f4 b lh-title mb1 primary">Adres</h3>
              <address>
                <span class="db" v-html="address.company_street.split(/\n/).join('<br/>')"></span>
                {{ address.company_zip_code }} {{ address.company_city }}
              </address>
              <br/>
              {{ address.company_hours_array[0] }}<br/>
              {{ address.company_hours_array[1] }}
          </div>

          <div>
            <h3 class="f4 b lh-title mb2 primary">Kontakt</h3>
            <ul class="mhn2 flex flex-column items-start">
              <li class="dib ph2 raise">
                <a v-if="contact.facebook" :href="contact.facebook" class="link bg-white black db relative br-100 pa2 mb3">
                  <svg width="16px" height="16px" class="db">
                    <use xlink:href="#facebook"></use>
                  </svg>
                </a>
              </li>
              <li class="dib ph2">
                <a v-if="contact.telephone" :href="'tel:' + contact.telephone.split(' ').join('')" class="link tel db relative b pa1 mb3">
                  {{ contact.telephone }}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <p class="tc grey-2 center f6 mt4 mb0">{{ new Date().getFullYear() }} © {{ address.company_name }}</p>

    </footer>
  </div>
</template>

<script>
  import cLogo from '~/components/logo.vue';

  export default {
    components: {
      cLogo
    },
    computed: {
      address() {
        return this.$store.getters.address
      },
      contact() {
        return this.$store.getters.contact
      }
    },
    data: () => ({
      company_street_line_1: '',
      company_street_line_2: ''
    }),
    mounted(){
      var street = this.address.company_street.split(/\n/);
      this.address.company_street_line_1 = street[0];

      if(street.length > 1){
        this.address.company_street_line_2 = street[1];
      }
    }
  }
</script>

<style type="text/css">
  .menu a{
    font-size: 16px;
  }

  @media(min-width: 768px){
    .menu a{
      font-size: 22px;
    }
  }

  .menu .nuxt-link-exact-active{
    box-shadow: inset 0 -4px 0 #F1C007;
  }

  @media (max-width: 768px) {
    .divider-grey ul a:focus,.divider-grey ul a:hover {
      box-shadow: none;
    }
  }

  .special a{
    color: #2C57E8;
  }

  .tel{
    color: #da2222;
  }
</style>
