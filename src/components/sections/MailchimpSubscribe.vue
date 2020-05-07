<template>
    <div class="mx-auto bg-white md:w-2/3 rounded">
        <mailchimp-subscribe url="https://mc.us5.list-manage.com/subscribe/post-json" user-id="a0a000a5156d3a64ac1416078" list-id="bbea81ebd4" @error="onError" @success="onSuccess" >
            
            <template v-slot="{ subscribe, setEmail, error, success, loading } ">
                <div class="w-full block py-2 px-4 border" >
                    <form v-if="showForm" @submit.prevent="subscribe"  class="flex md:flex-row flex-col justify-between items-center">
                        <input class="py-2 px-4 inline-block w-full outline-none text-lg text-gray-900 md:mb-0 mb-2" type="email" placeholder="Your Email:" @input="setEmail($event.target.value)" />
                        <button class="bg-primary text-white text-xl py-2 px-10 rounded hover:cursor-pointer inline-block w-full md:w-auto" type="submit">Subscribe</button>
                    </form>
                    <div>
                        <success v-if="success" />
                        <error v-if="error" />
                        <spinner v-if="loading"  />
                    </div>
                </div>
            </template>
            
        </mailchimp-subscribe>
    </div>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe'
import success from './success'
import error from './error'
import spinner from './spinner'

export default {
    components: {
        MailchimpSubscribe,
        success,
        error,
        spinner
    },
    data() {
        return {
            showForm:true,
            showerror:false,
        }
    },

 methods: {
    onError() {
      this.showForm = false
    },
    onSuccess() {
      this.showForm = false   
    },
  },
}
</script>

<style>

</style>