export = `
o-----------KNEX exports.seed = function(knex, Promise) {
o-----------KNEX   // Deletes ALL existing entries
o-----------KNEX   return knex('users').del()
o-----------KNEX     .then(function () {
o-----------KNEX       // Inserts seed entries
o-----------KNEX       return knex('users').insert([
o-----------KNEX         {id: 1, username: 'user1', password: 'password'},
o-----------KNEX         {id: 2, username: 'user2', password: 'password'},
o-----------KNEX         {id: 3, username: 'user3', password: 'password'}
o-----------KNEX       ])
o-----------KNEX     })
o-----------KNEX }
`