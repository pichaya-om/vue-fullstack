<template>
  <panel title="Song Info">
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
      </v-flex>
      <v-flex xs6>
        <img class="album-image"
             :src="song.albumImageUrl"/>
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>

import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
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
