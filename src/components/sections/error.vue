<template>
  <div class=" bg-red-100 py-2 px-4 rounded border border-red-400 shadow-md">
    <h5 class="font-mont text-xl font-bold block text-red-600">Error</h5>
    <p class="font-lato text-base text-red-700">Somthing wrong happend, Please refrech and resubcribe,</p>
</div>
</template>

<script>
export default {
    props: {
        error: {
            type: String
        }
    },

}
</script>

<style>

</style>