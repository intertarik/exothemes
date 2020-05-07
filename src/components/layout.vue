<template>
  <div>
    <navbar :myData="fields"/>
    <body-cmpt :myData="fields"/>
    <newsletter :myData="fields"/>
    <socials />
  </div>
</template>

<script>
import navbar from "@/components/sections/navbar.vue";
import body from "@/components/sections/body.vue";
import newsletter from "@/components/sections/newsletter.vue";
import socials from "@/components/sections/socials.vue";

export default {
  components: {
     "body-cmpt" : body,
    navbar,
    socials,
    newsletter,

  },
  data() {
    return {
      fields: {}
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.getSingle("homepage").then(document => {
        this.fields = document.data;
      });
    }
  },
  created() {
    this.getContent();
  }
};
</script>

<style>
</style>