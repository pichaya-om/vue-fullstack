const {History, Bookmark, Song} = require('../models')
const _ = require('lodash')

module.exports = {
  async index(req, res) {
    try {
      const histories = await History.findAll({
        where: {
          UserId: req.user.id
        },
        include: [
          {
            model: Song
          }
        ]
      }).map(history => history.toJSON())
        .map(history => _.extend({
          historyId: history.id,
          historyCreatedAt: history.createdAt
      }, history.Song))
      res.send(histories)
    } catch (e) {
      res.status(500).send({
        error: 'Cannot find history'
      })
    }
  },
  async post(req, res) {
    try {
      const history = await History.create({
        UserId: req.user.id,
        SongId: req.body.SongId
      })
      res.send(history)
    } catch (e) {
      res.status(500).send({
        error: 'Cannot create bookmark'
      })
    }
  }
}