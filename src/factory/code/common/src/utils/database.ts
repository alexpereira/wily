export = `
o---------COMMON var { DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASS, DATABASE_NAME, DEBUG } = process.env
o-------MONGOOSE var mongoose = require('mongoose')
o-----------KNEX var knex = require('knex')
o-----------KNEX 
o-----------KNEX var database = knex({
o-----------KNEX   client: 'mysql',
o-----------KNEX   connection: {
o-----------KNEX     host:     DATABASE_HOST,
o-----------KNEX     port:     DATABASE_PORT,
o-----------KNEX     database: DATABASE_NAME,
o-----------KNEX     user:     DATABASE_USER,
o-----------KNEX     password: DATABASE_PASS,
o-----------KNEX     debug:    DEBUG === 'true'
o-----------KNEX   }
o-----------KNEX })
o-----------KNEX 
o------SEQUELIZE var Sequelize = require('sequelize')
o------SEQUELIZE 
o------SEQUELIZE var database = new Sequelize({
o------SEQUELIZE   dialect: 'mysql',
o------SEQUELIZE   host:     DATABASE_HOST,
o------SEQUELIZE   port:     DATABASE_PORT,
o------SEQUELIZE   database: DATABASE_NAME,
o------SEQUELIZE   username: DATABASE_USER,
o------SEQUELIZE   password: DATABASE_PASS,
o------SEQUELIZE   logging:  DEBUG === 'true'
o------SEQUELIZE })
o------SEQUELIZE 
o-------MONGOOSE // Form mongodb url
o-------MONGOOSE var url = \`mongodb://\${DATABASE_USER}:\${DATABASE_PASS}@\${DATABASE_HOST}:\${DATABASE_PORT}/\${DATABASE_NAME}?authSource=admin\`
o-------MONGOOSE 
o-------MONGOOSE // Establish database connection
o-------MONGOOSE mongoose.connect(url, { useNewUrlParser: true })
o-------MONGOOSE 
o-------MONGOOSE // Get connection as database
o-------MONGOOSE var { connection: database } = mongoose
o-------MONGOOSE 
o---------COMMON module.exports = database
`