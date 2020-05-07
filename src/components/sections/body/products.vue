<template>
  <section id="templates" class="md:pt-0 pt-8 px-8 md:px-0 md:pb-24">
    <div class="container">
      <div class="grid md:grid-cols-3 grid-cols-1 md:gap-12 gap-0">
        <div v-for="template in templates" :key="template.id">
          <productCard @click.native="showModal(template.id)" :data="template" class="mb-8 md:mb-0 cursor-pointer" />
        </div>
        <modal :width="430" height="auto" :scrollable="true" name="productModal" @before-open="beforeOpen">
          <productModal :templateId="templateIdInModal" />
        </modal>
      </div>
    </div>
  </section>
</template>

<script>
import productCard from "@/components/sections/body/productCard.vue";
import productModal from "@/components/sections/body/productModal.vue";

export default {
  components: {
    productCard,
    productModal,
  },

  data() {
    return {
      templates: null,
      templateIdInModal:null
    };
  },
  methods: {
    getContent() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "templates"), {
          orderings: "[my.templates.date desc]"
        })
        .then(response => {
          this.templates = response.results;
        });
    },
    showModal (id) {
      this.$modal.show('productModal', {id :id });
    },
    hideModal () {
      this.$modal.hide('productModal');
    },
    beforeOpen (event) {
      console.log(event.params.id);
      this.templateIdInModal = event.params.id
    }
  }
  ,
  created() {
    this.getContent();
  }
};
</script>

<style>
</style>