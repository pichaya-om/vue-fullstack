import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenService.register({
//   email: 'test@gmail.com'
//   password: '1234'
// })
