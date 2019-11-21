<template>
  <div :class="mainClass">
    TESTOWY TEKST NA TŁUMACZENIA : <div v-t="'index_title'"></div>


    <p class="text-center mb-4">
      Od 12 lat zapewniamy naszym Pacjentom najwyższą jakość i profesjonalizm. <br/> 
      W ofercie naszego centrum posiadamy najnowsze skuteczne zabiegi zapewniające długotrwałe efekty.
    </p>

    <div class="text-center mb-4">
      <a href="/" class="button mx-auto">
        Oferta
      </a>
    </div>

    <section class="relative bg-gray-100 container py-4">
      <div class="flex flex-col flex-wrap md:flex-row text-center md:-mx-4">
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4">
          <cSingleSquare
            main-class="w-full bg-white p-8"
            title="Medycyna estetyczna"
          />
        </div>
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4">
          <cSingleSquare
            main-class="w-full bg-white p-8"
            title="Modelowanie sylwetki"
          />
        </div>
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4">
          <cSingleSquare
            main-class="w-full bg-white p-8"
            title="Trychologia"
          />
        </div>
      </div>
    </section>

    <section class="relative bg-gray-100 container py-4">
      <div class="flex flex-col flex-wrap md:flex-row text-center md:-mx-4">
        <div class="w-full mb-4 lg:mb-0 px-4">
          <cSingleFullRectangle
            main-class="w-full bg-white p-8"
            title="Dlaczego warto wybrać nasze centrum?"
            description=""
            link="about"
            link-title="Więcej >"
          />
        </div>
      </div>
    </section>

    <section class="relative bg-gray-100 container py-4">
      <div class="flex flex-col flex-wrap md:flex-row text-center md:-mx-4">
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4">
          <cSingleSquare
            main-class="w-full bg-white p-8"
            title="Medycyna estetyczna"
          />
        </div>
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4">
          <cSingleSquare
            main-class="w-full bg-white p-8"
            title="Modelowanie sylwetki"
          />
        </div>
        <div class="md:w-1/3 mb-4 lg:mb-0 px-4">
          <cSingleSquare
            main-class="w-full bg-white p-8"
            title="Trychologia"
          />
        </div>
      </div>
    </section>

    <section class="relative bg-gray-100 container py-4">
      MAPA
    </section>

  </div>
</template>

<script>
  import cSingleSquare from "~/components/single-square.vue";
  import cSingleFullRectangle from "~/components/single-full-rectangle.vue";

  export default {
    components: {
      cSingleSquare,
      cSingleFullRectangle
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
