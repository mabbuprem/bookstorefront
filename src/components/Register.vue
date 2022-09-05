<template>
<v-card class="mx-auto rounded-lg shopping-card2" >
    <v-form ref="form" v-model="valid" lazy-validation>
        <div>
            <v-text-field v-model="role" :rules="nameRules" label="Role" dense required outlined>
            </v-text-field>
        </div>

        <div class="first_last_name">
            <v-text-field v-model="firstname" :rules="nameRules" label="Firs tname" dense required outlined>
            </v-text-field>

        </div>
        <div>
            <v-text-field v-model="lastname" :rules="nameRules" label="Last name" dense required outlined>
            </v-text-field>
        </div>
        <div>
            <v-text-field v-model="phone_number" :rules="nameRules" label="Phone Number" dense required outlined>
            </v-text-field>
        </div>

        <div class="email">
            <v-text-field v-model="email" :rules="emailRules" label="Username"
                hint="you can use letters& numbers and perid" dense required outlined>
            </v-text-field>
        </div>

        <div class="passwords">
            <v-text-field v-model="password" :rules="nameRules" label="Password" type="password" dense required
                outlined>
            </v-text-field>
        </div>
        <div>
            <v-text-field v-model="confirm" :rules="nameRules" label="Confirm" type="password" dense required outlined>
            </v-text-field>
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
            <v-btn :disabled="!valid" color="#a03037" class="mr-4" @click="validate">
                SignUp
            </v-btn>
        </div>
        
    </v-form>
    </v-card>


</template>
<script>
import { registration } from '../services/UserService'
export default {
    name: 'RegistrationComponent',
    data: () => ({
        valid: true,
        role: '',
        firstname: '',
        lastname: '',
        phone_number: '',
        // email: '',
        password: '',
        confirm: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        checkbox: true,
    }),
    methods: {
        validate() {
            console.log(this.role)
            console.log(this.firstname)
            console.log(this.lastname)
            console.log(this.phone_number)
            console.log(this.email)
            console.log(this.password)
            console.log(this.confirm)
            let reqData = {
                role: this.role,
                first_name: this.firstname,
                last_name: this.lastname,
                phone_no: this.phone_number,
                email: this.email,
                password: this.password,
                confirm_password: this.confirm
            }
            console.log(reqData)
            registration(reqData).then((responce) => {
                console.log("Response from ", responce );
            }).catch((error) => {
                console.log(error);
            })
        },
    }
}
</script>

<style scoped>


.first_last_name {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 30px;
    /* padding: 6px 8px; */
}

.passwords {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 30px;
}

.email {
    width: 100%;
    height: 30%;
}

.create_tag {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.9999;
    padding-top: 1px;
    width: 290px;
}

.imageandpara {
    /* width: 100px;
  height: 350px;
  padding-left: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  left:40px; */

    left: 42%;
    width: 1px;
    height: 40%;
    top: 10%;
    margin-top: 10%;
    margin-left: 10%;
}

.button_signin {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}

.to_Center_Div {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 70px;
}

.central_box {
    width: 650px;
    height: 505px;
    padding: 48px 40px 36px 40px;
    margin: 0;
    border-style: solid;
    border-width: 1px;
    border-color: #9a9a9c;
    border-radius: 5px;
    box-sizing: content-box;
}

.box_with_padding {
    display: flex;
}

.Left_box {
    width: 354px;
    height: 425px;
}

.botton {
    left: 10px;
    right: 10px;
    padding-left: 350px;
    padding-top: -10px;
    margin-top: -10%;
    /* background-color: blue; */
}

.space {
    left: -100px;
    right: 100px;
    /* padding-left: 350px; */
    padding-top: 270px;
}

.para {
    /* border: 2px solid yellow; */

    left: 50%;
    bottom: 50%;
    font-size: 16px;
    font-weight: 300;
    margin-left: 15%;

}

.latters {
    color: #5f6368;
    font-size: 14px;
    line-height: 1.4286;
    position: relative;
    top: 50%;
    left: 6%;
    margin-top: -5%;
    margin-right: 10%;
    padding-top: 12%;
}

.use {
    color: #5f6368;
    font-size: 14px;
    line-height: 1.4286;
    position: relative;
    top: 50%;
    left: 6%;
    margin-top: -50%;
    margin-right: 10%;
    padding-top: 12%;
}
</style>