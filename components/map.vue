<template>
    <div
        v-on:click="scrollOn" 
        v-on:mouseleave="scrollOff" 
        class="w-full"
        :class="{ 'scrolloff' : !isActiveScroll}"
    >
        <iframe 
            title="Map"
            src="https://www.google.com/maps/embed?pb=!4v1575155399996!6m8!1m7!1sNmlhrajdgBamd2OIsHn66A!2m2!1d51.07365981305686!2d17.03713444438351!3f266.9652663649762!4f-0.18106545990522704!5f0.4648442111742271" 
            width="100%" 
            height="450"  
            allowfullscreen=""
            style="border:0;"
        ></iframe>
    </div>
</template>

<script>
  export default {
    name: 'cBanner',
    data: function() {
        return {
            isActiveScroll: false
        }
    },
    methods: {
        scrollOn: function (event) {
            this.isActiveScroll = true;
        },
        scrollOff: function (event) {
            this.isActiveScroll = false;
        }
    }
  }
</script>

<style scoped>
    .scrolloff iframe   {
        pointer-events: none ;
    }
</style>