<template>
  <div class="home">
    <DashboardUI></DashboardUI>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardUI from '@/components/DashBoardNavigation.vue'
export default {
  name: 'DashboardUI',
  components: {
    DashboardUI
  }
}
</script>