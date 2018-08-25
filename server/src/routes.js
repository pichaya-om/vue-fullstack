const AuthenController = require('./controller/AuthenController')
const AuthenControllerPolicy = require('./policies/AuthenControllerPolicy')
const SongsController = require('./controller/SongsController')

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
}
