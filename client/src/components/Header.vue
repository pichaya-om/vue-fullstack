<template>
  <v-toolbar fixed color="teal lighten-3" dark>
    <v-toolbar-title
      class="teal lighten-3 home"
      @click="navigateTo({name: 'home'})">
      TabTracker
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark
             @click="navigateTo({name: 'songs'})">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark v-if="!$store.state.isUser"
             @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>
      <v-btn flat dark v-if="!$store.state.isUser"
             @click="navigateTo({name: 'login'})">
        Log In
      </v-btn>
      <v-btn flat dark v-if="$store.state.isUser"
             @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route.name)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
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
