export = `
o-----------KNEX module.exports = {
o-----------KNEX   development: {
o-----------KNEX     client: 'mysql',
o-----------KNEX     connection: {
o-----------KNEX       database: process.env.DATABASE_NAME,
o-----------KNEX       user:     process.env.DATABASE_USER,
o-----------KNEX       password: process.env.DATABASE_PASS
o-----------KNEX     }
o-----------KNEX   }
o-----------KNEX }
`