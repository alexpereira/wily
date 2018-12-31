export = `
o-----------KNEX exports.seed = function(knex, Promise) {
o------SEQUELIZE exports.up = function(queryInterface, Sequelize) {
o-------MONGOOSE exports.up = function(connection) {
o---------COMMON   // Deletes ALL existing entries
o-----------KNEX   return knex('users').del()
o------SEQUELIZE   return queryInterface.bulkDelete('users', {})
o-------MONGOOSE   return connection.model('users').deleteMany()
o---------COMMON     .then(function () {
o---------COMMON       // Inserts seed entries
o-----------KNEX       return knex('users').insert([
o------SEQUELIZE       return queryInterface.bulkInsert('users', [
o-------MONGOOSE       return connection.model('users').insertMany([
o---------COMMON         { id: 1, username: 'user1', password: 'password' },
o---------COMMON         { id: 2, username: 'user2', password: 'password' },
o---------COMMON         { id: 3, username: 'user3', password: 'password' }
o-----------KNEX       ])
o------SEQUELIZE       ], {})
o-------MONGOOSE       ])
o---------COMMON     })
o---------COMMON }
`