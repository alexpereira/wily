export = `
o------------JWT var jwt = require('jsonwebtoken')
o---------COMMON var Boom = require('boom')
o------SEQUELIZE var { DataTypes, Model } = require('sequelize')
o-------MONGOOSE var { Schema } = require('mongoose')
o---------COMMON var database = require('../utils/database')
o---------COMMON 
o-------MONGOOSE var schema = new Schema({
o-------MONGOOSE   username: String,
o-------MONGOOSE   password: String
o-------MONGOOSE }, {
o-------MONGOOSE   timestamps: true,
o-------MONGOOSE   autoCreate: true
o-------MONGOOSE })
o---------COMMON 
o-----------KNEX class UserModel {
o------SEQUELIZE class UserModel extends Model {
o-------MONGOOSE class UserModel {
o---------COMMON 
o------SEQUELIZE   static init() {
o------SEQUELIZE     return super.init({
o------SEQUELIZE       username: DataTypes.STRING,
o------SEQUELIZE       password: DataTypes.STRING
o------SEQUELIZE     }, {
o------SEQUELIZE       tableName: 'users',
o------SEQUELIZE       sequelize: database
o------SEQUELIZE     })
o------SEQUELIZE   }
o------SEQUELIZE 
o-----------KNEX   async authenticateUser(user) {
o------SEQUELIZE   static async authenticateUser(user) {
o-------MONGOOSE   static async authenticateUser(user) {
o---------COMMON     var match = {}
o---------COMMON     try {
o-----------KNEX       [match] = await database.select(Object.keys(user)).table('users').where(user)
o------SEQUELIZE       var { dataValues: match } = await this.findOne({ where: user, attributes: Object.keys(user) })
o-------MONGOOSE       var fields = Object.keys(user).join(' ') + ' -_id' // Explicitly exclude \`_id\`
o-------MONGOOSE       var match = await this.findOne(user).select(fields)
o---------COMMON     } catch (error) {
o---------COMMON       process.env.DEBUG === 'true' && (console.error(error))
o---------COMMON       throw Boom.badImplementation()
o---------COMMON     }
o---------COMMON 
o---------COMMON     if (JSON.stringify(user) !== JSON.stringify(match)) {
o---------COMMON       throw Boom.badRequest()
o---------COMMON     }
o---------COMMON 
o------------JWT     return jwt.sign({ username: match.username }, process.env.JWT_SECRET, { expiresIn: '1h'})
o---------COMMON   }
o---------COMMON 
o-----------KNEX   async getUsers() {
o------SEQUELIZE   static async getUsers() {
o-------MONGOOSE   static async getUsers() {
o---------COMMON     var users = []
o---------COMMON     try {
o-----------KNEX       users = await database.select().table('users')
o------SEQUELIZE       users = await this.findAll()
o-------MONGOOSE       users = await this.find()
o---------COMMON     } catch (error) {
o---------COMMON       process.env.DEBUG === 'true' && (console.error(error))
o---------COMMON       throw Boom.badImplementation()
o---------COMMON     }
o---------COMMON     return users
o---------COMMON   }
o---------COMMON 
o-----------KNEX   async getUser(username) {
o------SEQUELIZE   static async getUser(username) {
o-------MONGOOSE   static async getUser(username) {
o---------COMMON     var user = {}
o---------COMMON     try {
o-----------KNEX       [user] = await database.select().table('users').where({ username })
o------SEQUELIZE       var { dataValues: user } = await this.findOne({ where: { username } })
o-------MONGOOSE       var user = await this.findOne({ username })
o---------COMMON     } catch (error) {
o---------COMMON       process.env.DEBUG === 'true' && (console.error(error))
o---------COMMON       throw Boom.badImplementation()
o---------COMMON     }
o---------COMMON     return user
o---------COMMON   }
o---------COMMON   
o-----------KNEX   async insertUser(user) {
o------SEQUELIZE   static async insertUser(user) {
o-------MONGOOSE   static async insertUser(user) {
o---------COMMON     try {
o-----------KNEX       await database.table('users').insert(user)
o-----------KNEX       user = await this.getUser(user.username)
o------SEQUELIZE       var { dataValues: user } = await this.create(user)
o-------MONGOOSE       user = await this.create(user)
o---------COMMON     } catch (error) {
o---------COMMON       process.env.DEBUG === 'true' && (console.error(error))
o---------COMMON       throw Boom.badImplementation()
o---------COMMON     }
o---------COMMON     return user
o---------COMMON   }
o---------COMMON   
o-----------KNEX   async updateUser(username, user) {
o------SEQUELIZE   static async updateUser(username, user) {
o-------MONGOOSE   static async updateUser(username, user) {
o---------COMMON     try {
o-----------KNEX       await database.table('users').update(user).where({ username })
o------SEQUELIZE       await this.update(user, { where: { username } })
o-------MONGOOSE       await this.updateOne({ username }, user)
o---------COMMON       user = await this.getUser(user.username || username)
o---------COMMON     } catch (error) {
o---------COMMON       process.env.DEBUG === 'true' && (console.error(error))
o---------COMMON       throw Boom.badImplementation()
o---------COMMON     }
o---------COMMON     return user
o---------COMMON   }
o---------COMMON   
o-----------KNEX   async deleteUser(username) {
o------SEQUELIZE   static async deleteUser(username) {
o-------MONGOOSE   static async deleteUser(username) {
o---------COMMON     try {
o-----------KNEX       await database.table('users').where({ username }).del()
o------SEQUELIZE       await this.destroy({ where: { username } })
o-------MONGOOSE       await this.deleteOne({ username })
o---------COMMON     } catch (error) {
o---------COMMON       process.env.DEBUG === 'true' && (console.error(error))
o---------COMMON       throw Boom.badImplementation()
o---------COMMON     }
o---------COMMON   }
o---------COMMON }
o---------COMMON 
o-----------KNEX module.exports = UserModel
o------SEQUELIZE module.exports = UserModel
o-------MONGOOSE schema.loadClass(UserModel)
o-------MONGOOSE module.exports = database.model('users', schema)
`