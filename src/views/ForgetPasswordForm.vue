<template>
  <div class="home">
    <Password></Password>
  </div>
</template>

<script>
// @ is an alias to /src
import Password from '@/components/ForgotPassword.vue'
export default {
  name: 'LoginUser',
  components: {
    Password
  }
}
</script>