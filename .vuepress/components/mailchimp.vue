<template>
<div class="wrapper">

  <h1>Join our newsletter</h1>
  <p>Get a free simple template and Be the first to know our <br> latest offers and updates!</p>

   <mailchimp-subscribe
    url="https://mc.us5.list-manage.com/subscribe/post-json"
    user-id="a0a000a5156d3a64ac1416078"
    list-id="bbea81ebd4"
    @error="onError"
    @success="onSuccess"
  >
    <template v-slot="{ subscribe, setEmail, error, success, loading }" >
      <div class="formContainer">
        <form v-if="showform" @submit.prevent="subscribe">
          <input type="email" @input="setEmail($event.target.value)" placeholder="Your Email :"/>
          <button type="submit">Submit</button>
        </form>
        <div v-if="!showform" class="msgContainer">
          <div class="error" v-if="error">{{ error }}</div>
          <div class="success" v-if="success">Thank you, Please chek your inbox </div>
          <div class="" v-if="loading">Loading…</div>
      </div>
      </div>
    </template>
  </mailchimp-subscribe>
</div>
</template>

<script>
import MailchimpSubscribe from "vue-mailchimp-subscribe";

export default {
  components: {
    MailchimpSubscribe
  },
  data() {
    return {
      showform: true
    }
  },
  methods: {
    onError() {
      this.showform=false
    },
    onSuccess() {
    this.showform=false
    }
  }
};
</script>

<style scoped>
.wrapper{
  background-color: #EFF3F8;
  padding: 6em 2em;
  text-align: center;
}
h1{
  margin:0;
}
p{
  margin: 0.3em 0 1em 0;
  color: #67758d;
  font-size: 20px;
}
.formContainer{
  max-width: 500px;
  margin: 0 auto;
}
form {
  width: 100%;
  display: flex;

}
input {
  padding: 0.75em 1em;
  width: 75%;
  border: none;
  outline: none;
  color: #67758d;
    font-size: 20px;
}
input:focus{
  box-shadow:2px 2px 10px #DDDDDD;
}
input::placeholder{
  color:  darkgray;
}
button {
  padding: 0.75em 1em;
  width: 25%;
  border: none;
  outline: none;
  background-color: #3846FF;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
}
.msgContainer{
  background-color: #ffffff;
  padding: 1em 1em;
  text-align: left;
  font-size: 18px;
}
.error{
color: indianred;
}
.success{
  color: green;
}
</style>