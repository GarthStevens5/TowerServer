module.exports.seed = (knex, Promise) => {
  return knex('platform').del()
    .then(() => {
      return knex('platform').insert([
        { id: 1, name: 'NES', manufacturer: 'Nintendo' },
        { id: 2, name: 'SNES', manufacturer: 'Nintendo' },
        { id: 3, name: 'N64', manufacturer: 'Nintendo' },
        { id: 4, name: 'GameCube', manufacturer: 'Nintendo' },
        { id: 5, name: 'Wii', manufacturer: 'Nintendo' },
        { id: 6, name: 'Wii U', manufacturer: 'Nintendo' },
        { id: 7, name: 'Switch', manufacturer: 'Nintendo' },
        { id: 8, name: 'Game Boy', manufacturer: 'Nintendo' },
        { id: 9, name: 'Game Boy Color', manufacturer: 'Nintendo' },
        { id: 10, name: 'Game Boy Advance', manufacturer: 'Nintendo' },
        { id: 11, name: 'NDS', manufacturer: 'Nintendo' },
        { id: 12, name: '3DS', manufacturer: 'Nintendo' },
        { id: 13, name: 'Virtual Boy', manufacturer: 'Nintendo' },
        { id: 14, name: 'Genesis', manufacturer: 'Sega' },
        { id: 15, name: 'Sega CD', manufacturer: 'Sega' },
        { id: 16, name: 'Sega 32X', manufacturer: 'Sega' },
        { id: 17, name: 'Saturn', manufacturer: 'Sega' },
        { id: 18, name: 'Dreamcast', manufacturer: 'Sega' },
        { id: 19, name: 'Game Gear', manufacturer: 'Sega' },
        { id: 20, name: 'PlayStation', manufacturer: 'Sony' },
        { id: 21, name: 'PlayStation 2', manufacturer: 'Sony' },
        { id: 22, name: 'PlayStation 3', manufacturer: 'Sony' },
        { id: 23, name: 'PlayStation 4', manufacturer: 'Sony' },
        { id: 24, name: 'PlayStation Portable', manufacturer: 'Sony' },
        { id: 25, name: 'PlayStation Vita', manufacturer: 'Sony' },
        { id: 26, name: 'Xbox', manufacturer: 'Microsoft' },
        { id: 27, name: 'Xbox 360', manufacturer: 'Microsoft' },
        { id: 28, name: 'Xbox One', manufacturer: 'Microsoft' },
        { id: 29, name: 'PC', manufacturer: 'Microsoft' },
        { id: 30, name: 'Atari 2600', manufacturer: 'Atari' },
        { id: 31, name: 'Atari 5200', manufacturer: 'Atari' },
        { id: 32, name: 'Arari 7200', manufacturer: 'Atari' },
        { id: 33, name: 'Atari Jaguar', manufacturer: 'Atari' },
        { id: 34, name: 'Atari Lynx', manufacturer: 'Atari' },
        { id: 35, name: 'Atari VCS', manufacturer: 'Atari' },
      ])
      .then(() => knex.raw('ALTER SEQUENCE games_id_seq RESTART WITH 36;'))
    })
}
