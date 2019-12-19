<template>
  <div class="">
      <h1 class="font-light text-5xl uppercase mb-10">
        {{ title }}
      </h1>

      <div class="text-center mb-4 font-light text-xl" v-html="$md.render(description)"></div>
      <div class="container">
        <ul>
          <li class="bg-secondary text-primary hover:bg-primary hover:text-secondary" v-for="(entry, idx) in dataInCategory" :key="idx">
            
            <nuxt-link class="flex justify-between mb-1 p-2" :to="entry.link">
              <span>{{ entry.title }}</span>
              <span>></span>
            </nuxt-link>
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

</style>