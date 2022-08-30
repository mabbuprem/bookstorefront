<template>
    <v-app>
        <v-main>
            <div class="display-card">
                <v-flex>
                    <v-row>
                        <BaseAppBar ref="baseAppbar" />
                    </v-row>

                    <v-row>
                        <h1>Forgot Your Password ?</h1>
                        <v-card class="main-card mx-auto mt-9 pl-5 pr-5">
                            <ForgotPasswordForm ref="forgotPassword" />
                        </v-card>
                    </v-row>
                </v-flex>
            </div>
        </v-main>
    </v-app>
</template>

<script>
import BaseAppBar from "../components/BaseAppBar";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
export default {
    name: "ForgotPassword",
    components: {
        BaseAppBar,
        ForgotPasswordForm,
    },
};
</script>

<style >
.main-card {
    top: 150px;
    right: 170px;
    width: 389px;
    height: 290px;
}

.display-card {
    top: 0px;
    left: 0px;
    height: 100%;
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}
</style>