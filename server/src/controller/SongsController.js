const {Song} = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (e) {
      res.status(500).send({
        error: 'Cannot find songs'
      })
    }
  },
  async post(req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (e) {
     res.status(500).send({
       error: 'Cannot create song'
     })
    }
  }
}
