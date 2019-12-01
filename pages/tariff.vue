<template>
  <div>
    <ul class="flex flex-col">
      <li v-for="(n, index) in $t('$uniqueKeyIndex___tariff') + 1" :key="index" class="flex flex-row">
        <h2 class="px-4">
          {{ $t(`_tariff__${ index }__header_lvl`) }} || {{ $t(`_tariff__${ index }__title`) }}
        </h2>
        <p class="px-4">
          {{ $t(`_tariff__${ index }__price`) }}
        </p>
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
