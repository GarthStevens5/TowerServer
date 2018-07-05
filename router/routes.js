const express = require("express")
const router = express.Router()
const queries = require('../queries')

router.get('/', (req, res, next) => {
  res.send({ message: 'This isnt the endpoint you were looking for.' })
    .catch(next)
})

router.post("/newgame", (req, res, next) => {
  queries.createGame(req.body)
  .then(game => {
    res.status(201).json({game})
  })
  .catch(next)
})

router.get('/games', (req, res, next) => {
  queries.readGames()
    .then(items => { res.json({ items }) })
    .catch(next)
})

router.put("/games/:id", (req, res, next) => {
  queries.updateGame(req.params.id, req.body)
    .then(game => {
      res.json({game})
  })
  .catch(next)
})

router.delete("/games/delete/:id", (req, res, next) => {
  queries.deleteGame(req.params.id)
    .then(() => {
      res.status(204).json({deleted: true})
  })
  .catch(next)
})

router.post('/newplatform', (req, res, next) => {
  queries.createPlatform(req.body)
    .then(platform => res.status(201).json({platform}))
    .catch(next)
})

router.get('/platforms', (req, res, next) => {
  queries.readPlatforms()
    .then(platforms => {
      res.json({
        platforms
      })
    })
    .catch(next)
})

router.put("/platforms/:id", (req, res, next) => {
  queries.updatePlatform(req.params.id, req.body)
    .then(platform => {
      res.json({platform})
  })
  .catch(next)
})

router.delete("/platforms/delete/:id", (req, res, next) => {
  queries.deletePlatform(req.params.id)
    .then(() => {
      res.status(204).json({deleted: true})
  })
  .catch(next)
})

// router.get('/games/:platformid', (req, res, next) => {
//   queries.readPlatformGames(req.params.platformid)
//     .then(items => {
//       res.json({
//         items
//       })
//     })
//     .catch(next)
// })

module.exports = router
