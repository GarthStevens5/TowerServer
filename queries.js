const database = require('./database-connection')

module.exports = {
  createPlatform(platform) {
    return database('platform')
    .insert(platform)
    .returning('*')
    .then(record => record[0])
  },
  readPlatforms() {
    return database('platform')
  },
  updatePlatform(id, platform){
    return database('platform')
      .update(platform)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  },
  deletePlatform(id){
    return database('platform')
      .where('id', id)
      .del()
  },
  createGame(game) {
    return database('games').select()
    .insert(game)
    .returning('*')
    .then(record => record[0])
  },
  readGames() {
    return database('games')
  },
  updateGame(id, game){
    return database('games')
      .update(game)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  },
  deleteGame(id){
    return database('games')
      .where('id', id)
      .del()
  }
}