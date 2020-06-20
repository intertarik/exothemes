<template>
  <div id="app">
    <layout />
  </div>
</template>

<script>
import layout from '@/components/layout.vue';

export default {
  components: {
    layout,
  },
  name: "App"
};
</script>

<style>
@import "assets/styles/tailwind.postcss";
</style>
