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
                color="teal lighten-3"
                @click="navigateTo({
                  name: 'song/'+song.id
                })">
                View
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
    navigateTo (route) {
      this.$router.push(route.name)
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
