<template>
  <div class="home">
    <Dashboard></Dashboard>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/DashBoardNavigation.vue'
export default {
  name: 'DashboardUI',
  components: {
    Dashboard
  }
}
</script>