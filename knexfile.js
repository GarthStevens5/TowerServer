module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/p3games'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}