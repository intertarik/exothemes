<template>
    <div>
        <hero :heading="myData" />
        <products />
        <process :process="myData" />
    </div>
</template>

<script>
    import hero from '@/components/sections/body/hero.vue';
    import products from '@/components/sections/body/products.vue';
    import process from '@/components/sections/body/process.vue';

export default {
    components: {
        hero,
        products,
        process,
    },
    data() {
        return {
            text: null
        }
    },
    props: {
        myData: {
            type: Object
        },
    },
}
</script>

<style>

</style>