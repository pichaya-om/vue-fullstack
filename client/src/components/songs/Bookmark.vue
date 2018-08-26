<template>
  <panel title="Bookmark">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="bookmarks">
      <template
        slot="items"
        slot-scope="props">
        <td class="text-xs-right">
          {{props.item.title}}
        </td>
        <td class="text-xs-right">
          {{props.item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  data () {
    return {
      bookmarks: [],
      headers: [
        {
          text: 'Title',
          value: 'title',
          align: 'right'
        },
        {
          text: 'Artist',
          value: 'artist',
          align: 'right'
        }
      ],
      pagination: {
        sortBy: 'bookmarkCreatedAt',
        descending: true
      }
    }
  },
  computed: {
    ...mapState([
      'isUser'
    ])
  },
  async mounted () {
    if (!this.isUser) {
      return
    }
    try {
      this.bookmarks = (await BookmarksService.index()).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>

</style>
