<template>
  <div
    class="md:w-full rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-200 ease-in-out relative"
  >
    

    <div class="relatiive">
      <div v-if="template.envato_item" class="envatoIcon absolute top-0 right-0 p-3" >
        <prismic-link :field="template.purchase" class="bg-white inline-block rounded-full shadow-xl">
          <img class="w-12" src="@/assets/img/envato_icon2.svg" alt="envato_icon">
        </prismic-link>
      </div>
      <prismic-image :field="template.preview" />
    </div>

    <div class="px-6 py-6">
      <div
        class="font-mont font-bold text-xl mb-2"
      >{{ $prismic.richTextAsPlain(template.template_name) }}</div>
      <p
        class="text-gray-700 text-base"
      >{{ $prismic.richTextAsPlain(template.template_description ).slice(0, 100) }}...</p>
    </div>
    <div class="px-6 py-4 border-t">
      <span class="text-primary font-semibold pr-2">${{ $prismic.richTextAsPlain(template.price) }}</span>
      <span v-if="template.html" class="inline-block px-1 py-1 text-sm text-gray-700">HTML</span>
      <span v-if="template.stampready" class="inline-block px-1 py-1 text-sm text-gray-700">Stampready</span>
      <span v-if="template.campain_monitor" class="inline-block px-1 py-1 text-sm text-gray-700">Campain Monitor</span>
      <span v-if="template.mailchimp" class="inline-block px-1 py-1 text-sm text-gray-700">Mailchimp</span>
      <span v-if="template.mailster" class="inline-block px-1 py-1 text-sm text-gray-700">Mailster</span>
      <span v-if="template.shopify" class="inline-block px-1 py-1 text-sm text-gray-700">Shopify</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      template: {}
    };
  },
  created() {
    this.template = this.data.data;
  },
  computed: {
    firstParagraph() {
      return this.template.template_description[0];
    }
  }
};
</script>

<style scoped>
.envatoIcond {
  transform: translateY(-50%);
}
</style>