<template>
  <v-toolbar fixed color="teal lighten-3" dark>
    <v-toolbar-title
      class="teal lighten-3 home"
      @click="navigateTo({name: 'home'})">
      TabTracker
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark v-if="!$store.state.isUser"
             @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>
      <v-btn flat dark v-if="!$store.state.isUser"
             @click="navigateTo({name: 'login'})">
        Login
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route.name)
    }
  }
}
</script>

<style scoped>
  .home {
    cursor: pointer;
  }

  .home:hover {
    color: #009688
  }
</style>
