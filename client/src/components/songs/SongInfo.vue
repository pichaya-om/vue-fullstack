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
        <v-btn
          v-if="isUser && !this.bookmark"
          color="orange lighten-2"
          dark small
          @click="setBookmark">
          <v-icon >bookmark</v-icon>
          Bookmark
        </v-btn>
        <v-btn
          v-if="isUser && this.bookmark"
          color="orange lighten-2"
          dark small
          @click="unBookmark">
          <v-icon >bookmark</v-icon>
          Remove
        </v-btn>
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

import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUser',
      'user'
    ])
  },
  async mounted () {
    if (!this.isUser) {
      return
    }
    try {
      const bookmarks = (await BookmarksService.index({
        SongId: this.song.id
      })).data
      if (bookmarks.length) {
        this.bookmark = bookmarks[0]
      }
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async setBookmark () {
      try {
        this.bookmark = (await BookmarksService.create({
          SongId: this.song.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.bookmarkId)
        this.bookmark = null
      } catch (err) {
        console.log(err)
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
