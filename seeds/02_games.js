module.exports.seed = (knex, Promise) => {
  return knex('games').del()
    .then(() => {
      return knex('games').insert([
        { 
          id: 1,
          title: 'Doom', 
          dev: 'id Software', 
          physOrDigi: 'Physical', 
          platform_id: 23 
        },
        { 
          id: 2, 
          title: 'Payday2', 
          dev: 'Overkill Software', 
          physOrDigi: 'Physical', 
          platform_id: 7
        },
        { 
          id: 3, 
          title: 'Killing Floor 2', 
          dev: 'Tripwire Studios', 
          physOrDigi: 'Digital', 
          platform_id: 29 }
      ])
    .then(() => knex.raw('ALTER SEQUENCE games_id_seq RESTART WITH 4;'))
    })
}