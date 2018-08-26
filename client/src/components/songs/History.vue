<template>
  <panel title="Recently Viewed Songs" class="mt-2">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="songs">
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
import SongHistoryService from '@/services/SongHistoryService'
export default {
  data () {
    return {
      songs: [],
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
        sortBy: 'historyCreatedAt',
        descending: true
      }
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
      this.songs = (await SongHistoryService.index()).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>

</style>
