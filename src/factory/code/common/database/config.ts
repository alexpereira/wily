export = `
o-----------KNEX require('dotenv').config({ path: '../.env' })
o------SEQUELIZE require('dotenv').config()
o---------COMMON 
o---------COMMON module.exports = {
o---------COMMON   development: {
o-----------KNEX     client: 'mysql',
o------SEQUELIZE     dialect: 'mysql',
o-----------KNEX     connection: {
o-----------KNEX       host:     process.env.DATABASE_HOST,
o-----------KNEX       port:     process.env.DATABASE_PORT,
o-----------KNEX       database: process.env.DATABASE_NAME,
o-----------KNEX       user:     process.env.DATABASE_USER,
o-----------KNEX       password: process.env.DATABASE_PASS
o-----------KNEX     }
o------SEQUELIZE     host:     process.env.DATABASE_HOST,
o------SEQUELIZE     port:     process.env.DATABASE_PORT,
o------SEQUELIZE     database: process.env.DATABASE_NAME,
o------SEQUELIZE     username: process.env.DATABASE_USER,
o------SEQUELIZE     password: process.env.DATABASE_PASS
o---------COMMON   }
o---------COMMON }
`