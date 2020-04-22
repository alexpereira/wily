export = `
o-----------KNEX require('dotenv').config({ path: '../.env' })
o------SEQUELIZE require('dotenv').config()
o-------MONGOOSE require('dotenv').config()
o-------MONGOOSE var mongoose = require('mongoose')
o---------COMMON var { DATABASE_HOST, MYSQL_PORT, MONGO_PORT, DATABASE_USER, DATABASE_PASS, DATABASE_NAME } = process.env
o---------COMMON 
o-----------KNEX module.exports = {
o-----------KNEX   development: {
o-----------KNEX     client: 'mysql',
o-----------KNEX     connection: {
o-----------KNEX       host:     DATABASE_HOST,
o-----------KNEX       port:     MYSQL_PORT,
o-----------KNEX       database: DATABASE_NAME,
o-----------KNEX       user:     DATABASE_USER,
o-----------KNEX       password: DATABASE_PASS
o-----------KNEX     }
o-----------KNEX   }
o-----------KNEX }
o------SEQUELIZE module.exports = {
o------SEQUELIZE   development: {
o------SEQUELIZE     dialect: 'mysql',
o------SEQUELIZE     host:     DATABASE_HOST,
o------SEQUELIZE     port:     MYSQL_PORT,
o------SEQUELIZE     database: DATABASE_NAME,
o------SEQUELIZE     username: DATABASE_USER,
o------SEQUELIZE     password: DATABASE_PASS
o------SEQUELIZE   }
o------SEQUELIZE }
o------SEQUELIZE 
o-------MONGOOSE // Get migrations file name
o-------MONGOOSE var fs = require('fs')
o-------MONGOOSE var [ fileName ] = fs.readdirSync(\`\${__dirname}/migrations\`)
o-------MONGOOSE 
o-------MONGOOSE var { up: migrate, down: rollback } = require(\`./migrations/\${fileName}\`)
o-------MONGOOSE var { up: seed } = require('./seeds/initial')
o-------MONGOOSE 
o-------MONGOOSE var url = \`mongodb://\${DATABASE_USER}:\${DATABASE_PASS}@\${DATABASE_HOST}:\${MONGO_PORT}/\${DATABASE_NAME}?authSource=admin\`
o-------MONGOOSE
o-------MONGOOSE var actions = ['migrate', 'rollback', 'seed']
o-------MONGOOSE var action = process.argv[2]
o-------MONGOOSE
o-------MONGOOSE if (!actions.includes(action))
o-------MONGOOSE   throw Error('Unknown action')
o-------MONGOOSE else
o-------MONGOOSE   task(action)
o-------MONGOOSE
o-------MONGOOSE async function task(action) {
o-------MONGOOSE
o-------MONGOOSE   // Establish database connection
o-------MONGOOSE   var { connection } = await mongoose.connect(url, { useNewUrlParser: true })
o-------MONGOOSE
o-------MONGOOSE   // Define users schema and model
o-------MONGOOSE   connection.model('users', new mongoose.Schema({
o-------MONGOOSE     username: String,
o-------MONGOOSE     password: String
o-------MONGOOSE   }, {
o-------MONGOOSE     timestamps: true,
o-------MONGOOSE     autoCreate: true
o-------MONGOOSE   }))
o-------MONGOOSE
o-------MONGOOSE   switch (action) {
o-------MONGOOSE     case 'migrate':
o-------MONGOOSE       await migrate(connection)
o-------MONGOOSE       break
o-------MONGOOSE
o-------MONGOOSE     case 'rollback':
o-------MONGOOSE       await rollback(connection)
o-------MONGOOSE       break
o-------MONGOOSE
o-------MONGOOSE     case 'seed':
o-------MONGOOSE       await seed(connection)
o-------MONGOOSE       break
o-------MONGOOSE
o-------MONGOOSE     default:
o-------MONGOOSE       break
o-------MONGOOSE   }
o-------MONGOOSE
o-------MONGOOSE   // Close database connection
o-------MONGOOSE   await connection.close()
o-------MONGOOSE }
`