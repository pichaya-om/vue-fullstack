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
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
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
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Tab,
    Lyrics,
    SongInfo,
    Youtube,
    Panel
  }
}
</script>

<style scoped>
</style>
