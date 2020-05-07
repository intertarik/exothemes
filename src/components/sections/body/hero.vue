<template>
  <section id="header" class="bg-white">
    <div class="container px-12 md:px-0">
      <div class="h-auto flex justify-center text-center">
        <div class="md:w-3/4 w-full md:py-20">
          <div>
            <h1
              class="font-mont text-gray-900 text-3xl md:text-7xl font-bold leading-tight mb-5"
            >{{ $prismic.richTextAsPlain(heading.heading) }}</h1>
            <p
              class="font-lato font-normal text-gray-700 text-base md:text-2xl mb-6"
            >{{ $prismic.richTextAsPlain(heading.text) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: {
      type: Object
    }
  },
  data() {
    return {

    }
  },
};
</script>

<style>
</style>