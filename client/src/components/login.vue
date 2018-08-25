<template>
  <v-layout align-center justify-center row>
    <v-flex xs4 >
      <div class="white elevation-2">
        <v-toolbar flat dense color="teal lighten-3" dark>
          <v-toolbar-title>
            Login
          </v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="E-mail"
            v-model="email"
          ></v-text-field>

          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>

          <div v-html="error" class="error"></div>
          <v-btn
            color="teal lighten-3"
            @click="login" dark>Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenService from '@/services/AuthenService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.error = null
      } catch (e) {
        this.error = e.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
