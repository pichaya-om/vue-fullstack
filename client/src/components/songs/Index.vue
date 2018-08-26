<template>
  <v-layout justify-center row>
    <v-flex xs6 class="ml-2 mt-4" v-if="isUser">
      <Bookmark/>
      <History/>
    </v-flex>
    <v-flex
      :class="{
      xs6: isUser,
      xs8: !isUser
      }"
      class="xs6 ml-2 mt-4">
      <List/>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'
import History from './History'
import Bookmark from './Bookmark'
import List from './List'
export default {
  computed: {
    ...mapState([
      'isUser'
    ])
  },
  components: {
    Bookmark,
    List,
    History
  }
}
</script>

<style scoped>
</style>
