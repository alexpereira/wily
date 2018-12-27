export = `
o-----------KNEX var knex = require('knex')
o-----------KNEX 
o-----------KNEX var database = knex({
o-----------KNEX   client: 'mysql',
o-----------KNEX   connection: {
o-----------KNEX     host:     process.env.DATABASE_HOST,
o-----------KNEX     port:     process.env.DATABASE_PORT,
o-----------KNEX     database: process.env.DATABASE_NAME,
o-----------KNEX     user:     process.env.DATABASE_USER,
o-----------KNEX     password: process.env.DATABASE_PASS,
o-----------KNEX     debug:    process.env.DEBUG === 'true'
o-----------KNEX   }
o-----------KNEX })
o-----------KNEX 
o------SEQUELIZE var Sequelize = require('sequelize')
o------SEQUELIZE 
o------SEQUELIZE var database = new Sequelize({
o------SEQUELIZE   dialect: 'mysql',
o------SEQUELIZE   host:     process.env.DATABASE_HOST,
o------SEQUELIZE   port:     process.env.DATABASE_PORT,
o------SEQUELIZE   database: process.env.DATABASE_NAME,
o------SEQUELIZE   username: process.env.DATABASE_USER,
o------SEQUELIZE   password: process.env.DATABASE_PASS,
o------SEQUELIZE   logging:  process.env.DEBUG === 'true'
o------SEQUELIZE })
o------SEQUELIZE 
o--------MONGODB var mongodb = require('mongodb')
o--------MONGODB 
o--------MONGODB var database = mongo.connect('mongodUrlThingy')
o--------MONGODB 
o---------COMMON module.exports = database
`