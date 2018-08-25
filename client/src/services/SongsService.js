import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  create (song) {
    return Api().post('songs', song)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  update (song) {
    return Api().put(`songs/${song.id}`, song)
  },
  deleteSong (songId) {
    return Api().delete(`songs/${songId}`)
  }
}
