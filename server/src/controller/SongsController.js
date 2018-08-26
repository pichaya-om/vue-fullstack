const {Song} = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = {
  async index(req, res) {
    try {
      let songs = null
      const search = req.query.search
      if (search) {
        songs = await Song.findAll({
          where: {
            [Op.or]: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
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
  },
  async update(req, res) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (e) {
      res.status(500).send({
        error: 'Cannot update song'
      })
    }
  },
  async show(req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (e) {
      res.status(500).send({
        error: 'Cannot show song'
      })
    }
  },
  async delete(req, res) {
    try {
      await Song.destroy({
        where: {
          id: req.params.songId
        }
      }).then(function(rowDeleted){
        if(rowDeleted === 1){
          res.send({})
        }
      }, function(err){
        res.status(500).send({
          error: 'Cannot delete song'
        })
      });
    } catch (e) {
      res.status(500).send({
        error: 'Cannot delete song'
      })
    }
  }
}
