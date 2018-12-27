export = `
o-----------KNEX exports.seed = function(knex, Promise) {
o------SEQUELIZE exports.up = function(queryInterface, Sequelize) {
o--------COMMMON   // Deletes ALL existing entries
o-----------KNEX   return knex('users').del()
o------SEQUELIZE   return queryInterface.bulkDelete('users', {})
o---------COMMON     .then(function () {
o---------COMMON       // Inserts seed entries
o-----------KNEX       return knex('users').insert([
o------SEQUELIZE       return queryInterface.bulkInsert('users', [
o---------COMMON         { id: 1, username: 'user1', password: 'password' },
o---------COMMON         { id: 2, username: 'user2', password: 'password' },
o---------COMMON         { id: 3, username: 'user3', password: 'password' }
o-----------KNEX       ])
o------SEQUELIZE       ], {})
o---------COMMON     })
o---------COMMON }
`