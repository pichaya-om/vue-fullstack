<template>
  <v-layout justify-center row>
    <v-flex xs4>
      <panel title="Register">
        <form name="register-form"
              autocomplete="off">
          <v-text-field
            label="E-mail"
            v-model="email"
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
          <div v-html="error" class="danger-alert"></div>
          <v-btn
            color="teal lighten-3"
            @click="register" dark>Register
          </v-btn>
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
    async register () {
      try {
        const response = await AuthenService.register({
          email: this.email,
          password: this.password
        })
        this.error = null
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({name: 'songs-index'})
      } catch (e) {
        this.error = e.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
