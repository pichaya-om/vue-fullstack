const AuthenController = require('./controller/AuthenController')

const AuthenControllerPolicy = require('./policies/AuthenControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenControllerPolicy.register,
    AuthenController.register)

  app.post('/login',
    AuthenController.login)
}
