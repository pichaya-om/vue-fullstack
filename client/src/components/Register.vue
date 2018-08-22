<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan dark">
          <v-toolbar-title>
            Register
          </v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
        <input
          type="email"
          v-model="email"
          name="email" />
        <br>
        <input
          type="password"
          v-model="password"
          name="password" />
        <br>
        <div v-html="error" class="error"/>
        <br>
        <button class="cyan"
                @click="register"> Register </button>
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
    async register () {
      try {
        await AuthenService.register({
          email: this.email,
          password: this.password
        })
        this.error = null
      } catch (e) {
        this.error = e.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red
  }
</style>
