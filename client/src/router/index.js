import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/songs/Index'
import SongsCreate from '@/components/songs/Create'
import SongsEdit from '@/components/songs/Edit'
import SongsShow from '@/components/songs/Show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'songs-index',
      component: Songs
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
      path: '/songs/create',
      name: 'songs-create',
      component: SongsCreate
    },
    {
      path: '/songs/:songId',
      name: 'songs-show',
      component: SongsShow
    },
    {
      path: '/songs/:songId/edit',
      name: 'songs-edit',
      component: SongsEdit
    }
  ]
})
