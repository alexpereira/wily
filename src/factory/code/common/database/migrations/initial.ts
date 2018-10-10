export = `
o-----------KNEX exports.up = function(knex, Promise) {
o-----------KNEX   return Promise.all([
o-----------KNEX     knex.schema.createTable('users', function (table) {
o-----------KNEX       table.increments()
o-----------KNEX       table.string('username')
o-----------KNEX       table.string('password')
o-----------KNEX       table.timestamps()
o-----------KNEX     })
o-----------KNEX   ])
o-----------KNEX }
o-----------KNEX 
o-----------KNEX exports.down = function(knex, Promise) {
o-----------KNEX   return Promise.all([
o-----------KNEX     knex.schema.dropTable('users')
o-----------KNEX   ])
o-----------KNEX }
`
