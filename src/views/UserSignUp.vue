<template>
  <div class="home">
    <registration></registration>
  </div>
</template>

<script>
// @ is an alias to /src
import registration from '@/components/Register.vue'
export default {
  name: 'RegistrationUI',
  components: {
    registration
  }
}
</script>