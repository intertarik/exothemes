<template>
  <div
    class="md:w-full rounded shadow-lg bg-white hover:shadow-xl transition duration-200 ease-in-out relative"
  >
    

    <div class="relatiive">
      <div v-if="template.data.envato_item" class="envatoIcon absolute top-0 right-0 p-3" >
        <prismic-link :field="template.data.purchase" class="bg-white inline-block rounded-full shadow-xl">
          <img class="w-12" src="@/assets/img/envato_icon2.svg" alt="envato_icon">
        </prismic-link>
      </div>
      <prismic-image :field="template.data.preview" />
    </div>

    <div class="px-6 py-6">
      <div
        class="font-mont font-bold text-xl mb-2"
      >{{ $prismic.richTextAsPlain(template.data.template_name) }}</div>
      <p
        class="text-gray-700 text-base"
      >{{ $prismic.richTextAsPlain(template.data.template_description )}}</p>
    </div>
    <div class="px-6 py-4 border-t">
      <span class="text-primary font-semibold pr-2">${{ $prismic.richTextAsPlain(template.data.price) }}</span>
      <span v-if="template.data.html" class="inline-block px-1 py-1 text-sm text-gray-700">HTML</span>
      <span v-if="template.data.stampready" class="inline-block px-1 py-1 text-sm text-gray-700">Stampready</span>
      <span v-if="template.data.campain_monitor" class="inline-block px-1 py-1 text-sm text-gray-700">Campain Monitor</span>
      <span v-if="template.data.mailchimp" class="inline-block px-1 py-1 text-sm text-gray-700">Mailchimp</span>
      <span v-if="template.data.mailster" class="inline-block px-1 py-1 text-sm text-gray-700">Mailster</span>
      <span v-if="template.data.shopify" class="inline-block px-1 py-1 text-sm text-gray-700">Shopify</span>
    </div>
    <div class="w-full bg-envato hover:bg-green-600 transition ease-in-out duration-200">
        <prismic-link :field="template.data.purchase" class=" px-6 py-4 w-full text-center text-white font-mont text-lg font-medium inline-block">
         <img src="@/assets/img/envato_button.svg" class="inline-block w-4 mr-2" alt="">  <span class="inline-block" >Purchase</span>
        </prismic-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    templateId: {
      type: Object
    }
  },
  data() {
      return {
          template: {}
      }
  },
  methods: {
      getContentById() {
      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.id', this.templateId),
        { lang : '*' }
      ).then((response) => {
        this.template = response.results[0]
      });
    },
},
created() {
    this.getContentById()
  }


};
</script>

<style>
</style>