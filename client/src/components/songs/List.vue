<template>
  <panel title="Songs">
    <v-btn
      slot="action-btn"
      to="songs/create"
      color="orange accent-2"
      light>
      <v-icon>add</v-icon> New Song
    </v-btn>
    <div  v-for="song in songs"
          :key="song.id"
          class="song">
      <v-layout row align-center>
        <v-flex xs6 >
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>
          <v-btn
            dark
            class="mt-4"
            color="teal lighten-1"
            :to="{name: 'songs-show',
                params: {songId: song.id}}">
            View
          </v-btn>
          <v-btn
            dark
            class="mt-4"
            color="teal lighten-3"
            :to="{name: 'songs-edit',
                params: {songId: song.id}}">
            Edit
          </v-btn>
          <v-btn
            dark
            class="mt-4"
            color="orange lighten-3"
            @click="deleteSong(song)">
            Delete
          </v-btn>
        </v-flex>
        <v-flex xs6>
          <img class="album-image"
               :src="song.albumImageUrl"/>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  },
  methods: {
    async deleteSong (song) {
      if (confirm(`Are you sure you want to delete ${song.title} ?`)) {
        try {
          await SongsService.deleteSong(song)
          location.reload()
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
}
</script>

<style scoped>
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }
  .song-title {
    font-size: 22px;
  }
  .song-artist {
    font-size: 14px;
  }
  .song-genre {
    font-size: 12px;
  }
  .album-image{
    width: fit-content;
    height: auto;
    margin: 0 auto;
  }
</style>
