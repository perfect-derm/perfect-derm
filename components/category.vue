<template>
  <div class="relative">
    <hr class="mb-2" v-if="type !== 'issue'">
    
    <div class="container text-left">
        <div class="flex flex-row flex-wrap mb-4 mt-2" v-if="type !== 'issue'">
          <a :href="('/').concat(this.$i18n.defaultLocale == this.$i18n.locale ? '' : this.$i18n.locale.concat('/'))" class="mr-2">{{ $t('homepage__breadcrumb__title') }}</a>
          <span class="block mr-2">|</span>
          <a :href="link" class="mr-2">{{ title }}</a>
        </div>

        <h1 v-if="title !== ''" class="font-light text-5xl uppercase mt-20 mb-4">
          {{ title }}
        </h1>

        <div v-if="description !== ''" class="mb-10 font-light text-xl" v-html="$md.render(description)"></div>
        
        <ul>
          <li 
            class="bg-secondary text-primary hover:bg-primary hover:text-secondary hover:svg-arrow" 
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-duration="600"
            v-for="(entry, idx) in dataInCategory" 
            :key="idx"
          >
            
            <nuxt-link class="flex justify-between mb-1 p-2" :to="entry.link">
              <span>{{ entry.title }}</span>
              <div class="flex flex-col items-center justify-center  svg-arrow" v-html="require('~/assets/arrow.svg?include')"></div>
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
  .svg-arrow >>> svg{
    width: 15px;
  }

  .hover\:svg-arrow:hover .svg-arrow >>> svg path{
    fill: white;
  }
</style>