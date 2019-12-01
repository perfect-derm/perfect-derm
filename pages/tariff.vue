<template>
  <div>
    <ul class="flex flex-col">
      <li v-for="(n, index) in parseInt($t('$uniqueKeyIndex___tariff'))" :key="index" class="flex flex-row">

        <h2 v-if="$t('header_lvl') == '1'" class="px-4">
          {{ $t(`_tariff__${ index }__title`) }}
        </h2>

        <h3 v-if="$t('header_lvl') == '2'" class="px-4">
          {{ $t(`_tariff__${ index }__title`) }}
        </h3>

        <div v-if="$t('header_lvl') == '0'" class="flex flex-row ">
          <h4>
            {{ $t(`_tariff__${ index }__title`) }}
          </h4>
          <p class="px-4">
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
