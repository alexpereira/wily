export = `
o---------COMMON {
o---PROJECT_NAME   "name": "{pn}",
o---------COMMON   "version": "1.0.0",
o---------COMMON   "description": "",
o---------COMMON   "main": "server.js",
o---------COMMON   "scripts": {
o-----------KNEX     "migrate": "node_modules/.bin/knex migrate:latest --knexfile database/knexfile.js",
o-----------KNEX     "rollback": "node_modules/.bin/knex migrate:rollback --knexfile database/knexfile.js",
o-----------KNEX     "seed": "node_modules/.bin/knex seed:run --knexfile database/knexfile.js",
o----------MOCHA     "test": "node_modules/.bin/mocha tests --recursive --exit",
o---------COMMON     "meeseeks": "echo \\"I\'m Mr. Meeseeks! Look at me!\\""
o---------COMMON   },
o---------COMMON   "author": "",
o---------COMMON   "license": "ISC",
o---------COMMON   "dependencies": {
o--------EXPRESS     "express": "*",
o-----------HAPI     "hapi": "*",
o----------MYSQL     "mysql": "*",
o--------MONGODB     "mongodb": "*",
o-----------KNEX     "knex": "*",
o------SEQUELIZE     "sequelize": "*",
o-------MONGOOSE     "mongoose": "*",
o------------JWT     "jsonwebtoken": "*",
o-----EX-SESSION     "express-session": "*",
o------------YAR     "yar": "*",
o------------JOI     "joi": "*",
o------VALIDATOR     "validator": "*",
o---------COMMON     "dotenv": "*"
o---------COMMON   },
o---------COMMON   "devDependencies": {
o-----------JEST     "jest": "*",
o----------MOCHA     "mocha": "*",
o---------COMMON     "supertest": "*"
o---------COMMON   }
o---------COMMON }
`