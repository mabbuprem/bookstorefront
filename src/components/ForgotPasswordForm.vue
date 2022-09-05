<template>

  <v-form>
    <BaseAppBar ref="baseAppbar" />
    <br />
    <span>Enter your email address and we'll send you a link to reset your
      password</span>
    <br />
    <br />
    <v-text-field outlined dense id="email" label="E-mail" :rules="[emailRules.required, emailRules.email_validation]"
      autocomplete="off" v-model="email"></v-text-field>

    <div class="reset_button">
      <v-btn :disabled="!valid" color="#a03037" class="mr-4" @click="validate">
                Reset password
            </v-btn>
    </div>
    <br />
    <br />
    <div class="createAccount">
      <v-btn href="http://localhost:8080/admin" elevation="0.5" >CREATE ACCOUNT</v-btn>
    </div>

  </v-form>

</template>

<script>
 import { forgetPass } from '@/services/UserService'
import BaseAppBar from "../components/BaseAppBar";

export default {
  name: "ForgotPassword",
  components: {
    BaseAppBar,

  },
  data: () => ({
    
      valid: true,
      email: null,
    
    emailRules: {
      required: (v) => !!v || "E-mail is required",
      email_validation: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
  }),
  methods: {
    validate() {
      console.log(this.email)
      let reqData = {
        email: this.email,
      }
      console.log(reqData)
      forgetPass(reqData).then((responce) => {
        console.log(responce);
      }).catch((error) => {
        console.log(error);
      })
    },

  }
}

</script>

<style>
.button1 {
  background: faintGrey 0% 0% no-repeat padding-box;
  width: 352px;
  height: 5px;
  left: 727px;
  color: black;
  font-size: 18px;
}

.button {
  background: brown 0% 0% no-repeat padding-box;
  width: 352px;
  height: 37px;
  left: 727px;
  color: white;
  font-size: 18px;
}

.route-link2 {
  padding-left: 30px;
}

.createAccount {
  background-color: #f9f9f8;
  width: 390px;
  height: 100px;
  margin-top: -20px;
  margin-left: -20px;
  padding: 50px;
  margin-bottom: 100px;
  /* margin: 50px; */
}

.reset_button {
  top: 379px;
  left: 559px;
  width: 350px;
  height: 37px;
  /* UI Properties */
  background: #a03037 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
}
</style>