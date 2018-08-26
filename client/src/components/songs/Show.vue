<template>
  <div>
    <v-layout justify-center row>
      <v-flex xs6 class="ml-2">
        <song-info :song="song"/>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <youtube :youtube-id="song.youtubeID"/>
      </v-flex>
    </v-layout>
    <v-layout justify-center row class="mt-4">
      <v-flex xs6 class="ml-2">
        <tab :tab="song.tab"/>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <lyrics :lyrics="song.lyrics"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import SongHistoryService from '@/services/SongHistoryService'
import SongsService from '@/services/SongsService'
import SongInfo from './SongInfo'
import Youtube from './Youtube'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
  data () {
    return {
      song: null
    }
  },
  computed: {
    ...mapState([
      'isUser',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data

    if (!this.isUser) {
      return
    }
    try {
      SongHistoryService.post({
        SongId: songId
      })
    } catch (err) {
      console.log('err')
    }
  },
  components: {
    Tab,
    Lyrics,
    SongInfo,
    Youtube
  }
}
</script>

<style scoped>
</style>
