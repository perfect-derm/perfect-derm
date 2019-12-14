<template>
  <div class="">
      <h1>
        {{ title }}
      </h1>

      <div class="text-center mb-4 font-light text-xl" v-html="$md.render(description)"></div>
      <div>
        <ul>
          <li v-for="(entry, idx) in offerInCategory" :key="idx">
            {{ entry.title }}
            {{ entry.link }}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'cCategory',
    props: {
      'title': {
        type: String,
        default: '',
        required: false
      },
      'description': {
        type: String,
        default: '',
        required: false
      },
      'category': {
        type: String,
        default: '0',
        required: false
      }
    },
    computed: {
      offerInCategory: function () {
        let data = [];
        const indexOfCollection = parseInt(this.$i18n.t('$uniqueKeyIndex___offer'));

        for(let index = 0; index <= parseInt(indexOfCollection); index++){      
          if(this.$i18n.t(`_offer__${index}__category`) == this.category){
            data.push({
              title: this.$i18n.t(`_offer__${index}__title`),
              link: this.$i18n.t(`_offer__${index}__slug`)
            })
          }
        }

        return data
      }
    }
  }
</script>


<style scoped>

</style>