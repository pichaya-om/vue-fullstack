<template>
  <v-layout row>
    <v-flex xs5 class="ml-2">
      <panel title="Song Info">
        <v-text-field
          label="Title"
          v-model="song.title"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Artist"
          v-model="song.artist"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Genre"
          v-model="song.genre"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Album"
          v-model="song.album"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Album Image Url"
          v-model="song.albumImageUrl"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="YouTube ID"
          v-model="song.youtubeID"
          required
          :rules="[required]"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs7>
      <panel title="Tabs & Lyrics" class="ml-2">
        <v-text-field
          label="Tab"
          v-model="song.tab"
          required
          :rules="[required]"
          multi-line
        ></v-text-field>

        <v-text-field
          label="Lyrics"
          v-model="song.lyrics"
          required
          :rules="[required]"
          multi-line
        ></v-text-field>

      </panel>
      <v-btn
        class="mt-4"
        color="teal lighten-3"
        @click="create" dark>Create Song
      </v-btn>
      <div class="error-custom" v-if="error">
        {{error}}
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeID: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsPresent = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsPresent) {
        this.error = 'Please fill in all the fields'
        return
      }
      try {
        await SongService.create(this.song)
        this.$router.push({
          name: 'songs-index'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.error-custom {
  color: red;
}
</style>
