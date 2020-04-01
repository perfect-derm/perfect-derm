<template>
  <div class="flex flex-col min-vh-100 w-full">
    <c-header 
      tag="header"
      class="flex-initial"
    />

    <main class="flex flex-col flex-auto">
      <nuxt class="text-center my-auto mt-0 mb-auto"/>
    </main>

    <div class="container relative h-200px mb-4">
      <div class="px-20">
        <client-only placeholder="Ładowanie...">
          <c-partners />
        </client-only>
      </div>
    </div>

    <c-contact-section />

    <c-footer 
      tag="footer"
      class="flex-initial"
    />
  </div>
</template>

<script>
  import Header from '~/components/header.vue';
  import Partners from "~/components/partners.vue";
  import ContactSection from '~/components/contact-section.vue';
  import Footer from '~/components/footer.vue';

  export default {
    components: {
      'c-header': Header,
      'c-partners' : Partners,
      'c-contact-section': ContactSection,
      'c-footer': Footer  
    }
  }
</script>


