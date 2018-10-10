export = `
o-----------KNEX var knex = require('knex')
o-----------KNEX 
o-----------KNEX // Pooling connections: https://www.npmjs.com/package/mysql#pooling-connections
o-----------KNEX var database = knex({
o-----------KNEX   host:     process.env.DATABASE_HOST || '0.0.0.0',
o-----------KNEX   port:     process.env.DATABASE_PORT || '3306',
o-----------KNEX   database: process.env.DATABASE_NAME
o-----------KNEX   user:     process.env.DATABASE_USER || 'root',
o-----------KNEX   password: process.env.DATABASE_PASS,
o-----------KNEX })
o-----------KNEX 
o--------MONGODB var mongodb = require('mongodb')
o--------MONGODB var database = mongo.connect('mongodUrlThingy')
o--------MONGODB 
o---------COMMON module.exports = database
`