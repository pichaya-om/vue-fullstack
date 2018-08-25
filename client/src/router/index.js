import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Song from '@/components/songs/Song'
import CreateSong from '@/components/songs/CreateSong'
import EditSong from '@/components/songs/EditSong'
import ShowSong from '@/components/songs/ShowSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Song
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'songs-edit',
      component: EditSong
    },
    {
      path: '/songs/:songId',
      name: 'songs-show',
      component: ShowSong
    }
  ]
})
