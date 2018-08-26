const {sequelize, Song, User, Bookmark, History} = require('../src/models')

const Promise = require('bluebird')
const songs = require('./songs')
const users = require('./users')
const bookmarks = require('./bookmarks')
const histories = require('./histories')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )
    await Promise.all(
      songs.map(song => {
        Song.create(song)
      })
    )
    await Promise.all(
      bookmarks.map(book => {
        Bookmark.create(book)
      })
    )
    await Promise.all(
      histories.map(hist => {
        History.create(hist)
      })
    )
  })
