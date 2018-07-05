module.exports.seed = (knex, Promise) => {
  return knex('platform').del()
    .then(() => {
      return knex('platform').insert([
        { id: 1, name: 'PS4', manufacturer: 'Sony' },
        { id: 2, name: 'Nintendo Switch', manufacturer: 'Nintendo' },
        { id: 3, name: 'PC', manufacturer: 'Microsoft' },
      ])
    .then(() => knex.raw('ALTER SEQUENCE platform_id_seq RESTART WITH 4;'))
    })
}
