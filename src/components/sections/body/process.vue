<template>
  <section id="process">
    <div class="container h-full flex justify-center items-center">
      <div class="content md:py-24 px-8 md:px-0">
        <div class="text-center">
          <h1
            class="font-mont text-gray-900 text-4xl md:text-6xl font-bold leading-tight mb-5"
          >{{ $prismic.richTextAsPlain(process.the_process) }}</h1>
          <p
            class="font-lato font-normal text-gray-700 text-base md:text-2xl mb-6"
          >{{ $prismic.richTextAsPlain(process.title_description) }}</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 md:py-12">
          <div v-for="(item, index) in process.process_grid" :key="'reference-item-' + index">
            <h3 class="font-mont text-3xl font-bold text-primary mb-3">0{{item.process_number}}.</h3>
            <h5
              class="font-mont text-xl font-bold mb-1"
            >{{ $prismic.richTextAsPlain(item.process_name) }}</h5>
            <p
              class="font-lato text-base text-gray-700"
            >{{ $prismic.richTextAsPlain(item.process_description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    process: {
      type: Object
    }
  }
};
</script>

<style>
</style>