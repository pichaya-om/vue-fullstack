<template>
  <v-layout justify-center row>
    <v-flex xs8>
      <panel title="Songs">
        <v-btn
          slot="action-btn"
          to="songs/create"
          color="teal accent-4"
          fab light small
          absolute right middle>
          <v-icon>add</v-icon>
        </v-btn>
        <div  v-for="song in songs"
              :key="song.id"
              class="song">
          <v-layout row>
            <v-flex xs6>
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
                @click="navigateTo('songs-show', song.id)">
                View
              </v-btn>
              <v-btn
                dark
                class="mt-4"
                color="teal lighten-3"
                @click="navigateTo('songs-edit', song.id)">
                Edit
              </v-btn>
              <v-btn
                dark
                class="mt-4"
                color="orange lighten-3"
                @click="deleteSong(song.id)">
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
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  },
  methods: {
    navigateTo (name, songId) {
      this.$router.push({
        name: name,
        params: {songId: songId}})
    },
    async deleteSong (songId) {
      if (confirm(`Are you sure you want to delete song with id ${songId} ?`)) {
        try {
          await SongsService.deleteSong(songId)
          this.$router.push({
            name: 'songs'
          })
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
    width: 90%;
    margin: 0 auto;
  }
</style>
