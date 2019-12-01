<template>
  <div>
    <ul class="flex flex-col">
      <li v-for="(n, index) in parseInt($t('$uniqueKeyIndex___tariff')) + 1" :key="index" class="flex flex-row">

        <h2 v-if="$t(`_tariff__${ index }__header_lvl`) == '1'" class="px-4 uppercase text-2xl bg-gray-400 w-full text-center">
          {{ $t(`_tariff__${ index }__title`) }}
        </h2>

        <h3 v-if="$t(`_tariff__${ index }__header_lvl`) == '2'" class="px-4 text-lg bg-gray-300 w-full text-center">
          {{ $t(`_tariff__${ index }__title`) }}
        </h3>

        <div v-if="$t(`_tariff__${ index }__header_lvl`) == '0'" class="flex flex-row bg-gray-200 w-full">
          <h4 class="text-base flex-auto text-left">
            {{ $t(`_tariff__${ index }__title`) }}
          </h4>
          <p class="px-4 flex-auto text-right">
            {{ $t(`_tariff__${ index }__price`) }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      }
    }
  };
</script>
