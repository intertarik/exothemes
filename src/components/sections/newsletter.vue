<template>
  <section id="newsletter" class="bg-gray-100 flex items-center " >
      <div class="container px-8 md:px-0 pt-32 pb-56 bg-bottom bg-no-repeat bg-cover">

        <h1 class="text-center font-mont title md:text-5xl text-4xl font-bold leading-snug mb-4">
          {{ $prismic.richTextAsPlain(myData.free_template) }}
        </h1>
        <p class="text-center text-gray-600 font-lato text-lg mb-8">
          {{ $prismic.richTextAsPlain(myData.newletter_text) }}
        </p>
        <MailchimpSubscribe />
      </div>
    </section>
</template>

<script>
import MailchimpSubscribe from '@/components/sections/MailchimpSubscribe.vue';

export default {
 components: {
     MailchimpSubscribe,
 },
 props: {
   myData: {
     type: Object
   },
 },
}
</script>

<style scoped>
    .container{
        background-image: url('../..//assets/img/form_bg.svg');
    }
</style>