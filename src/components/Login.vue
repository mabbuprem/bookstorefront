<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-col>
      <div class="email">
        <v-text-field outlined dense autocomplete="off" v-model="email" :rules="emailRules" label="E-mail" required>
        </v-text-field>
      </div>
      <div class="password">
        <v-text-field outlined dense :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="() => (showPassword = !showPassword)" :type="showPassword ? 'text' : 'password'"
          v-model="Password" :rules="passwordRules" label="Password" required>
        </v-text-field>
      </div>
      <div class="col1">
        <router-link to="/forgetpassword">Forget Password</router-link>
      </div>

      <div style="
          top: 398px;
          left: 727px;
          width: 270px;
          height: 37px;
          background: #a03037 0% 0% no-repeat padding-box;
          border-radius: 3px;
          color: #ffffff;
          opacity: 1; ;
        ">
        <v-btn :disabled="!valid" color="#a03037" class="" @click="validate">
          Login
        </v-btn>
      </div>
      <div style="padding-top: 15px; margin-left: -10px;margin-bottom: 10px;">
        <b>-----OR-----</b>
      </div>
      <div class="button_fb_google">
          <v-btn href="https://www.facebook.com/" :disabled="!valid" color="#4266B2" class="mr-4">
            FaceBook
          </v-btn>

          <v-btn href="https://www.google.com/" :disabled="!valid" color="" class="mr-4" @click="validate">
            Google
          </v-btn>
        </div>
    </v-col>
  </v-form>
</template>
  
<script>
import { login } from '../services/UserService'
export default {
  name: "LoginComponent",
  data: () => ({
    valid: true,
    // email: "",
    Password: "",

    passwordRules: [
      (v) => !!v || "password is required",
      (v) =>
        (v && v.length <= 10) || "password must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    showPassword: false,
    showCPassword: false,
    sending: false,
  }),
  methods: {
      validate() {
      console.log(this.email)
      console.log(this.Password)
      // this.$refs.form.validate()
      let reqData = {
        email: this.email,
        password: this.Password
      }
      console.log(reqData)
      login(reqData).then((responce) => {
        console.log(responce);
        localStorage.setItem("token", responce.data.token);
        this.$router.push({ path: '/dash' })
      }).catch((error) => {
        console.log(error);
      })
    },
  }
};
</script>
  <style>
  
  
  .email {
    width: 270px;
    display: flex;
  }
  
  .password {
    width: 270px;
    display: flex;
  }
  
  
  .col1{
  padding-left: 130px;
  top: -10px;
  bottom: 100px;
}
  
  .button_fb_google {
      /* padding-bottom: 300px;
      top:100px;
      right:500px; */
      

      
  }
  </style>