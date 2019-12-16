<template>
  <div>
    <cTextHeader 
      :title="$t('media__header__title')"
      :description="$t('media__header__description')"
      :breadcrumb="$t('media__breadcrumb__title')"
    />

    <ul class="flex flex-col">

        <li v-for="(n, index) in tableMedia" :key="index" class="flex flex-row">
            <h2 class="text-base flex-auto text-left">
              {{ tableMedia[index].title }}
            </h2>
            <div class="px-4 flex-auto text-right">
              {{ tableMedia[index].image }}
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
  import cTextHeader from "~/components/text-header.vue";

  export default {    
    components: {
      cTextHeader
    },
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      }
    },
    computed: {
      tableMedia: function () {
        let tableMedia = [];
        for(let i = 0; i <= parseInt(this.$t('$uniqueKeyIndex___media')); i++) {

          tableMedia.push({
            title: this.$t(`_media__${ i }__title`),
            image: parseInt(this.$t(`_media__${ i }__image`))
          });
        } 

        tableMedia.sort(function(a, b){
            var keyA = a.position,
                keyB = b.position;
            // Compare the 2 dates
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
        });

        return tableMedia;
      }
    }
  };
</script>
