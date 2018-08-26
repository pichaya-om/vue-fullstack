<template>
  <v-layout justify-center row>
    <v-flex xs4 >
      <panel title="Log In">
        <form>
          <v-text-field
            label="E-mail"
            v-model="email"
          ></v-text-field>

          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>

          <div v-html="error" class="danger-alert"></div>
          <v-btn
            color="teal lighten-3"
            @click="login" dark>Login</v-btn>
        </form>
      </panel>
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
        this.$router.push({name: 'songs-index'})
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
