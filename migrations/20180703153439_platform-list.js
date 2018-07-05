
exports.up = function(knex, Promise) {
  return knex.schema.createTable('platform', (platform) => {
    platform.increments('id')
    platform.text('name')
    platform.text('manufacturer')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('platform')
}
