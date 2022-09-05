<template>
  <v-flex>
    <div id="app">
      <v-app id="inspire">
        <Appbar ref="appbar" />
        <v-row>
        </v-row>
      </v-app>
    </div>
  </v-flex>
</template>

<script>
import Appbar from "../components/AppBar";
export default {
  name: "DashBoard",
  data: () => ({
        drawer: false,
        group: null,
      }),
      props: {
        
       bookId:Number
    },
  components: {
    Appbar,
  },
};
</script>

<style lang ="scss" scoped>
#app {
    max-width: 94%;
  }
</style>