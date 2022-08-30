
<template>
  <v-form>
    <br />
    <span
      >Enter your email address and we'll send you a link to reset your
      password</span
    >
    <br />
    <br />
     <BaseAppBar ref="baseAppbar" />
    <v-text-field
      outlined
      dense
      id="email"
      label="E-mail"
      :rules="[emailRules.required, emailRules.email_validation]"
      autocomplete="off"
      v-model="form.email"
    ></v-text-field>

    <button x-large block class="button">Reset Password</button>
    <br />
    <br />
    <router-link
        to="/signup"
        class="route-link2"
        id="move-to-signup"
        >CREATE ACCOUNT</router-link
      >
    
  </v-form>
  
</template>

<script>
import BaseAppBar from "../components/BaseAppBar";

export default {
  name: "ForgotPassword",
  components: {
    BaseAppBar,
   
  },
  data: () => ({
    form: {
      email: null,
    },
    emailRules: {
      required: (v) => !!v || "E-mail is required",
      email_validation: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
  }),
  
}

</script>

<style>
.button1 {
    background: faintGrey 0% 0% no-repeat padding-box;
    width: 352px;
    height: 5px;
    left: 727px;
    color:black;
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
  .route-link2{
    padding-left: 30px;
  }
</style>