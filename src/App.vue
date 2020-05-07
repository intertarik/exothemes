<template>
  <div id="app">
    <layout />
    <!-- <modal name="hello-world">
          <button @click="hide()">click</button>
    </modal>
    <button @click="show()">click</button> -->
  </div>
</template>

<script>
import layout from '@/components/layout.vue';

export default {
  components: {
    layout,
  },
  methods: {
  show () {
    this.$modal.show('hello-world');
  },
  hide () {
    this.$modal.hide('hello-world');
  }
},
  name: "App"
};
</script>

<style>
@import "assets/styles/tailwind.postcss";
</style>
