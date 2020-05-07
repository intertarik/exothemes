<template>
  <div>
    <h1> <prismic-rich-text :field="fields.heading"/></h1>
    <p>{{ $prismic.richTextAsPlain(fields.text) }}</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: {}
    };
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('homepage')
        .then((document) => {
          this.fields = document.data
        })
    }
  },
  created() {
    this.getContent();
  }
};
</script>

