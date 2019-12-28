<template>
  <div class="container text-left">
      <h1 v-if="title !== ''" class="font-light text-5xl uppercase mt-20 mb-4">
        {{ title }}
      </h1>

      <div v-if="description !== ''" class="mb-10 font-light text-xl" v-html="$md.render(description)"></div>
      
      <ul>
        <li class="bg-secondary text-primary hover:bg-primary hover:text-secondary hover:svg-arrow" v-for="(entry, idx) in dataInCategory" :key="idx">
          
          <nuxt-link class="flex justify-between mb-1 p-2" :to="entry.link">
            <span>{{ entry.title }}</span>
            <div class="flex flex-col items-center justify-center  svg-arrow" v-html="require('~/assets/arrow.svg?include')"></div>
          </nuxt-link>
        </li>
      </ul>
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
      },
      'type': {
        type: String,
        default: 'offer',
        required: false
      }
    },
    computed: {
      dataInCategory: function () {
        let data = [];
        const indexOfCollection = parseInt(this.$i18n.t(`$uniqueKeyIndex___${this.type}`));
        let pageLink = '';

        for(let index = 0; index <= parseInt(indexOfCollection); index++){      
          if(this.type === 'offer' && this.$i18n.t(`_${this.type}__${index}__category`) == this.category){
            pageLink= ('/').concat(this.$i18n.defaultLocale == this.$i18n.locale ? '' : this.$i18n.locale.concat('/')).concat('offer/').concat(this.$i18n.t(`_${this.type}__${index}__slug`));

            data.push({
              title: this.$i18n.t(`_${this.type}__${index}__title`),
              link: pageLink
            })
          }
          
          if(this.type === 'issue') {
            pageLink = ('/').concat(this.$i18n.defaultLocale == this.$i18n.locale ? '' : this.$i18n.locale.concat('/')).concat('issue/').concat(this.$i18n.t(`_${this.type}__${index}__slug`));
            data.push({
              title: this.$i18n.t(`_${this.type}__${index}__title`),
              link: pageLink
            })
          }
        }

        return data
      }
    }
  }
</script>


<style scoped>
  .svg-arrow >>> svg{
    width: 15px;
  }

  .hover\:svg-arrow:hover .svg-arrow >>> svg path{
    fill: white;
  }
</style>