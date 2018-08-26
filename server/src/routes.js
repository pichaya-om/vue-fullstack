const AuthenController = require('./controller/AuthenController')
const AuthenControllerPolicy = require('./policies/AuthenControllerPolicy')
const IsAuthen = require('./policies/IsAuthen')
const SongsController = require('./controller/SongsController')
const BookmarksController = require('./controller/BookmarksController')
const HistoriesController = require('./controller/HistoriesController')

module.exports = (app) => {
  app.post('/register',
    AuthenControllerPolicy.register,
    AuthenController.register)

  app.post('/login',
    AuthenController.login)

  app.get('/songs',
    SongsController.index)

  app.post('/songs',
    SongsController.post)

  app.get('/songs/:songId',
    SongsController.show)

  app.put('/songs/:songId',
    SongsController.update)

  app.delete('/songs/:songId',
    SongsController.delete)

  app.get('/bookmarks',
    IsAuthen,
    BookmarksController.index)

  app.post('/bookmarks',
    IsAuthen,
    BookmarksController.post)

  app.delete('/bookmarks/:bookmarkId',
    IsAuthen,
    BookmarksController.delete)

  app.get('/histories',
    IsAuthen,
    HistoriesController.index)

  app.post('/histories',
    IsAuthen,
    HistoriesController.post)
}
