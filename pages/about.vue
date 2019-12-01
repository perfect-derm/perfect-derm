<template>
  <div>
    <div>
      {{ $md.render(this.$t('about__description__description')) }}
    </div>

    <h2>
      {{ $t('about__section_title__title') }}
    </h2>  

    <div>
            {{ $md.render(this.$t('about__person_1__description')) }}
      {{ $t('about__person_1__photo') }}
    </div>

    <div>
            {{ $md.render(this.$t('about__person_2__description')) }}
      {{ $t('about__person_2__photo') }}
    </div>

    <div>
      
      {{ $md.render(this.$t('about__person_3__description')) }}
      {{ $t('about__person_3__photo') }}
    </div>
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
