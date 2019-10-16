<template>
  <div class="hidden">
    <div class="pv5 pv6-l ph3 bg-center cover" v-bind:style="{ backgroundImage: 'url(' + page.baner_image + ')' }">
      <div class="mw7 center ph3">
        <div class="db mb3">
          <div class="mw7 relative bg-fix-primary mb3 tl">
            <h1 class="f2 f1-l b di lh-title mb3 white mw6 bg-primary lh-solid">
              {{ page.baner_title }}
            </h1>
          </div>
          <div class="mw7 relative bg-fix-primary tl">
            <p class="b f4 di lh-title mb3 white mw6 bg-primary">
              {{ page.baner_subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <ul class="flex flex-column justify-center">
      <li v-for="(data, key) in page.sections" :key = "key" :class="key % 2 === 0 ? 'bg-grey-1' : 'bg-off-white'">

        <cLayoutSingle
          v-if="data.section_layout_block === 'single' || typeof data.section_layout_block === 'undefined'"
          :theme="key % 2 === 0 ? 'dark' : 'light'"
          :data="data"
        />

        <cLayoutDuo
          v-if="data.section_layout_block === 'duo'"
          :theme="key % 2 === 0 ? 'dark' : 'light'"
          :data="data"
        />

      </li>
    </ul>

  </div>
</template>

<script>
  import cLayoutSingle from '~/components/layout-single.vue';
  import cLayoutDuo from '~/components/layout-duo.vue';

  export default {
    components: {
      cLayoutSingle,
      cLayoutDuo
    },
    props: {
      'mainClass': {
        type: String,
        default: '',
        required: false
      }
    },
    head: function() {
      return {
        title: `${this.page.title}`,
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.page.description
          }
        ]
      };
    },
    mounted() {
      this.$el.classList.remove('mw7');
      this.$el.classList.remove('center');
      this.$el.classList.remove('pb5');
    },
    asyncData: async ({ app, route, payload }) => {
      return {
        page: (await app.$content("/pages").get(route.path + 'homepage')) || payload
      };
    }
  };
</script>
