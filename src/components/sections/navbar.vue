<template>
  <section class=" mx-auto">
    <div class="flex md:justify-between justify-center items-center py-8 px-12">
      <a href="#" class="font-mont text-xl text-gray-900 font-bold">
        <prismic-image width="120" :field="myData.logo"/>
      </a>

      <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul class="md:flex items-center justify-between text-base text-gray-700">
            <li>
              <a
                href="#templates"
                class="p-3 text-gray-900 hover:text-gray-600 text-base font-semibold md:block transition duration-200 ease-in-out"
              >Templates</a>
            </li>
            
            <li>
              <a
                href="#process"
                class="p-3 text-gray-900 hover:text-gray-600 text-base font-semibold md:block transition duration-200 ease-in-out"
              >The Process</a>
            </li>
            
            <li>
              <a
                href="#newsletter"
                class="p-3 text-gray-900 hover:text-gray-600 text-base font-semibold md:block transition duration-200 ease-in-out"
              >Newsletter</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
  myData: {
      type: Object
    },
  },
};
</script>

<style>
</style>