<template>
  <div>
    <cImageHeader 
      :title="$t('tariff__header__title')"
      :image="$t('tariff__header__image')"
      :breadcrumb="$t('tariff__breadcrumb__title')"
    />

    <div class="container my-4">
      
      <ul class="flex flex-col">

        <li v-for="(n, index) in tableTariff" :key="index" class="flex flex-row" :class="{'sticky top-0': tableTariff[index].headerLvl !== 3, 'top-0': tableTariff[index].headerLvl === 1, 'top-35': tableTariff[index].headerLvl === 2}">
          <h2 v-if="tableTariff[index].headerLvl == 1" class="px-4 uppercase text-2xl bg-gray-400 w-full text-center px-2">
            {{ tableTariff[index].title }}
          </h2>

          <h3 v-if="tableTariff[index].headerLvl == 2" class="px-4 text-lg bg-gray-300 w-full text-center px-2">
          {{ tableTariff[index].title }}
          </h3>

          <div v-if="tableTariff[index].headerLvl == 3" class="flex flex-row bg-gray-200 w-full py-2 px-2">
            <h4 class="text-base flex-auto text-left">
              {{ tableTariff[index].title }}
            </h4>
            <div v-if="tableTariff[index].headerLvl == 3" class="px-4 flex-auto text-right">
              {{ tableTariff[index].price }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import cImageHeader from "~/components/image-header.vue";

  export default {
    components: {
      cImageHeader
    },
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      }
    },
    // data: function(){
    //   return {
    //      tariffTable: this.tariffTableCalc
    //   }
    // },
    computed: {
      tableTariff: function () {
        let tableTariff = [];
        for(let i = 0; i <= parseInt(this.$t('$uniqueKeyIndex___tariff')); i++) {

          tableTariff.push({
            headerLvl: parseInt(this.$t(`_tariff__${ i }__header_lvl`)),
            title: this.$t(`_tariff__${ i }__title`),
            price: (parseInt(this.$t(`_tariff__${ i }__header_lvl`)) == 3) ? this.$t(`_tariff__${ i }__price`)  : '',
            position: parseInt(this.$t(`_tariff__${ i }__position`))
          });
        } 

        tableTariff.sort(function(a, b){
            var keyA = a.position,
                keyB = b.position;
            // Compare the 2 dates
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
        });

        return tableTariff;
      }
    }
  };
</script>
