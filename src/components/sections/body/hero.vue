<template>
  <section id="header" class="relative">
    <div class="skewed bg-gray-200"></div>
    <div class="container px-12 md:px-0">
      <div class="h-auto flex">
        <div class="md:w-2/4 w-full md:py-16">
          <div ref="heroContent">
            <h1
              class="heroContent font-mont text-gray-900 text-3xl md:text-6xl font-bold leading-tight mb-5"
            >{{ $prismic.richTextAsPlain(heading.heading) }}</h1>
            <p
              class="heroContent font-lato font-normal text-gray-700 text-base md:text-2xl mb-6"
            >{{ $prismic.richTextAsPlain(heading.text) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: {
    heading: {
      type: Object
    }
  },
mounted () {
  // const box = this.$refs;

  gsap.from('.heroContent', {opacity: 0, y: -50, duration: 1, stagger:0.6});
  console.log('hello')
},
};
</script>

<style scoped>
.skewed {
  position: absolute;
  top: -25%;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -99;
}
</style>