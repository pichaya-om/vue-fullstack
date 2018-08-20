<template>
  <div>
    <h1> Register </h1>
    <div> Email</div>
    <input
      type="email"
      v-model="email"
      name="email" />
    <div> Password</div>
    <input
      type="password"
      v-model="password"
      name="password" />
    <br>
    <button @click="register"> Register </button>
  </div>
</template>

<script>
import AuthenService from '@/services/AuthenService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenService.register({
        email: this.email,
        password: this.password
      })
      console.log('Register button was clicked', response.data)
    }
  }
}
</script>

<style scoped>

</style>
