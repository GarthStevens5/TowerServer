
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', (games) => {
    games.increments()
    games.text('title')
    games.text('dev')
    games.text('physOrDigi')
    games.integer('platform_id').references('platform.id').onDelete('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games')
}
