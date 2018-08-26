const {Bookmark, Song} = require('../models')
const _ = require('lodash')

module.exports = {
  async index(req, res) {
    try {
      const UserId = req.user.id
      const SongId = req.query.SongId
      const where = {
        UserId: UserId
      }
      if (SongId) {
        where.SongId = SongId
      }
      const bookmark = await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ]
      }).map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend({
          bookmarkId: bookmark.id,
          bookmarkCreatedAt: bookmark.createdAt
      }, bookmark.Song))
      res.send(bookmark)
    } catch (e) {
      res.status(500).send({
        error: 'Cannot find bookmark'
      })
    }
  },
  async post(req, res) {
    try {
      const UserId = req.user.id
      const SongId = req.body.SongId
      const where = {
        UserId: UserId,
        SongId: SongId
      }
      const bookmark = await Bookmark.findOne({
        where: where
      })
      if(bookmark) {
        return res.status(400).send({
          error: 'Bookmark already exists'
        })
      }

      const newBookmark = await Bookmark.create(where)
      res.send(newBookmark)
    } catch (e) {
      res.status(500).send({
        error: 'Cannot create bookmark'
      })
    }
  },
  async delete(req, res) {
    try {
      const UserId = req.user.id
      const bookmarkId = req.params.bookmarkId

      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: UserId
        }
      })

      if (!bookmark) {
        return res.status(403).send({
          error: 'You do not have access to this bookmark'
        })
      }
      await bookmark.destroy()
      res.send({})
    } catch (e) {
      res.status(500).send({
        error: 'Cannot delete bookmark'
      })
    }
  }
}