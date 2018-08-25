import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  create (song) {
    return Api().post('song', song)
  }
}

// AuthenService.register({
//   email: 'test@gmail.com'
//   password: '1234'
// })
