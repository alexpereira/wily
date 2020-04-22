export = `
o-----------KNEX exports.up = function(knex, Promise) {
o------SEQUELIZE exports.up = function(queryInterface, Sequelize) {
o-------MONGOOSE exports.up = function(connection) {
o-----------KNEX   return Promise.all([
o-----------KNEX     knex.schema.createTable('users', function (table) {
o-----------KNEX       table.increments()
o-----------KNEX       table.string('username').unique()
o-----------KNEX       table.string('password')
o-----------KNEX       table.timestamps(false, true)
o-----------KNEX     })
o-----------KNEX   ])
o------SEQUELIZE   return queryInterface.createTable('users', {
o------SEQUELIZE     id: {
o------SEQUELIZE       autoIncrement: true,
o------SEQUELIZE       primaryKey: true,
o------SEQUELIZE       type: Sequelize.INTEGER
o------SEQUELIZE     },
o------SEQUELIZE     username: {
o------SEQUELIZE       type: Sequelize.STRING,
o------SEQUELIZE       unique: true,
o------SEQUELIZE     },
o------SEQUELIZE     password: Sequelize.STRING,
o------SEQUELIZE     createdAt: {
o------SEQUELIZE       type: Sequelize.DATE,
o------SEQUELIZE       defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
o------SEQUELIZE     },
o------SEQUELIZE     updatedAt: Sequelize.DATE
o------SEQUELIZE   })
o-------MONGOOSE   return connection.model('users').init()
o---------COMMON }
o---------COMMON 
o-----------KNEX exports.down = function(knex, Promise) {
o------SEQUELIZE exports.down = function(queryInterface) {
o-------MONGOOSE exports.down = function(connection) {
o-----------KNEX   return Promise.all([
o-----------KNEX     knex.schema.dropTable('users')
o-----------KNEX   ])
o------SEQUELIZE   return queryInterface.dropTable('users')
o-------MONGOOSE   return connection.dropCollection('users')
o---------COMMON }
`