<template>
  <v-toolbar
    fixed dark
    color="teal lighten-3">
    <router-link
      tag="v-toolbar-title"
      class="teal lighten-3 home"
      :to="{name: 'songs-index'}">
      TabTracker
    </router-link>
    <v-toolbar-items>
      <v-btn
        flat dark
        :to="{name: 'songs-index'}">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer class="hidden-xs-only"></v-spacer>
    <v-toolbar-items v-if="(this.$route.name=='songs-index')">
      <v-text-field
        single-line
        light
        solo
        append-icon="search"
        placeholder="Find song..."
        v-model="search">
      </v-text-field>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        flat dark
        v-if="!$store.state.isUser"
        :to="{name: 'login'}">
        Log In
      </v-btn>
      <v-btn
        flat dark
        v-if="!$store.state.isUser"
        :to="{name: 'register'}">
        Register
      </v-btn>
      <v-btn
        flat dark
        v-if="$store.state.isUser"
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: null
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'login'
      })
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs-index'
      }
      if (this.search != null) {
        route.query = {
          search: this.search
        }
        console.log('reload: ', this.search)
        this.$router.push(route)
      }
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>
  .home {
    cursor: pointer;
  }

  .home:hover {
    color: #009688
  }

  .v-input {
    margin-top: 10px;
  }

</style>
