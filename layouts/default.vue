<template>
  <div class="flex flex-col min-vh-100 w-full">
    <c-header 
      tag="header"
      class="flex-initial"
    />

    <main class="flex flex-col flex-auto">
      <nuxt class="text-center my-auto mt-0 mb-auto"/>
    </main>

    <c-footer 
      tag="footer"
      class="flex-initial"
    />
  </div>
</template>

<script>
  import Header from '~/components/header.vue';
  import Footer from '~/components/footer.vue';

  export default {
    components: {
      'c-header': Header,
      'c-footer': Footer  
    }
  }
</script>


