<template>
  <v-form>
    <br />
    <br />
    <v-text-field
      outlined
      dense
      label="E-mail"
      id="email"
      :rules="[emailRules.required, emailRules.email_validation]"
      required
      autocomplete="off"
      v-model="form.email"
    ></v-text-field>
    <v-text-field
      outlined
      dense
      id="password"
      label="password"
      :rules="[passwordRules.required, passwordRules.minLength]"
      v-model="form.password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="() => (showPassword = !showPassword)"
      :type="showPassword ? 'text' : 'password'"
      required
    ></v-text-field>
    <span>
      <router-link
        to="/forgetpassword"
        class="route-link1"
        id="move-to-forgetpassword"
        >forgetpassword</router-link
      >
    </span>
    <br /><br />
    <button x-large block class="button" @click="validate">Login</button>
    <!-- <div>
      <span>OR</span>
    </div>
     <div class="first_last_name">
                <button x-large block class="button5" @click="validate">FaceBook</button>
                <button x-large block class="button6" @click="validate">Google</button>
              </div> -->
  </v-form>
   
    
</template>

<script>
import { login } from '../services/UserService'
export default {
  name: "LoginUI",
  data: () => ({
    form: {
      email: '',
      password: '',
      FaceBook: '',
      Google: ''
    },
    showPassword: false,
    sending: false,
    emailRules: {
      required: (v) => !!v || "E-mail is required",
      email_validation: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
    passwordRules: {
      required: (v) => !!v || "Name is required",
      minLength: (v) => (v && v.length > 7) || "password must be 8 characters",
    },
  }),
  methods: {
        validate() {
            console.log(this.email)
            console.log(this.password)
            // this.$refs.form.validate()
            let reqData = {
                email: this.email,
                password: this.password
            }
            console.log(reqData)
            login(reqData).then((responce) => {
                console.log(responce);
                localStorage.setItem("token",responce. data.token);
                this.$router.push({path:'/dashbordbar'})
            }).catch((error) => {
                console.log(error);
            })
        },
    },
 
}
</script>

<style>
.button {
    background:brown;
    /* width: 100px;
    height: 37px;
    left: 300px;
    top: 500px;
    color: white;
    font-size: 18px; */
  }

  .route-link1{
    padding-left: 220px;
  }
  .first_last_name {
 
  gap: 50px;
  
  /* padding: 6px 8px; */
}

.button5 {
    background:blue;
    width: 125px;
    height: 37px;
    left: 727px;
    top: 500px;
    color: white;
    font-size: 18px;
  gap: 5px;
  }
  .button6 {
    background: brown;
    width: 125px;
    height: 37px;
    left: 727px;
    top: 500px;
    color: white;
    font-size: 18px;
    gap: 5px;
  }
</style>