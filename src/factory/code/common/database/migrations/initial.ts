export = `
o-----------KNEX exports.up = function(knex, Promise) {
o-----------KNEX   return Promise.all([
o-----------KNEX     knex.schema.createTable('users', function (table) {
o-----------KNEX       table.increments()
o-----------KNEX       table.string('username').unique()
o-----------KNEX       table.string('password')
o-----------KNEX       table.timestamps(false, true)
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
