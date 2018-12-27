export = `
o------------JWT var jwt = require('jsonwebtoken')
o-----------KNEX var database = require('../utils/database')
o---------COMMON var Boom = require('boom')
o------SEQUELIZE var { DataTypes, Model } = require('sequelize')
o---------COMMON 
o-----------KNEX class UserModel {
o------SEQUELIZE class UserModel extends Model {
o---------COMMON 
o------SEQUELIZE   static init(database) {
o------SEQUELIZE     return super.init({
o------SEQUELIZE       username: DataTypes.STRING,
o------SEQUELIZE       password: DataTypes.STRING
o------SEQUELIZE     }, {
o------SEQUELIZE       tableName: 'users',
o------SEQUELIZE       sequelize: database
o------SEQUELIZE     })
o------SEQUELIZE   }
o------SEQUELIZE 
o---------COMMON   static async authenticateUser(user) {
o---------COMMON     var match = {}
o---------COMMON     try {
o-----------KNEX       [match] = await database.select(Object.keys(user)).table('users').where(user)
o------SEQUELIZE       var { dataValues: match } = await this.findOne({ where: user, attributes: Object.keys(user) })
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
o---------COMMON   static async getUsers() {
o---------COMMON     var users = []
o---------COMMON     try {
o-----------KNEX       users = await database.select().table('users')
o------SEQUELIZE       users = await this.findAll()
o---------COMMON     } catch (error) {
o---------COMMON       process.env.DEBUG === 'true' && (console.error(error))
o---------COMMON       throw Boom.badImplementation()
o---------COMMON     }
o---------COMMON     return users
o---------COMMON   }
o---------COMMON 
o---------COMMON   static async getUser(username) {
o---------COMMON     var user = {}
o---------COMMON     try {
o-----------KNEX       [user] = await database.select().table('users').where({ username })
o------SEQUELIZE       var { dataValues: user } = await this.findOne({ where: { username } })
o---------COMMON     } catch (error) {
o---------COMMON       process.env.DEBUG === 'true' && (console.error(error))
o---------COMMON       throw Boom.badImplementation()
o---------COMMON     }
o---------COMMON     return user
o---------COMMON   }
o---------COMMON   
o---------COMMON   static async insertUser(user) {
o---------COMMON     try {
o-----------KNEX       await database.table('users').insert(user)
o-----------KNEX       user = await this.getUser(user.username)
o------SEQUELIZE       var { dataValues: user } = await this.create(user)
o---------COMMON     } catch (error) {
o---------COMMON       process.env.DEBUG === 'true' && (console.error(error))
o---------COMMON       throw Boom.badImplementation()
o---------COMMON     }
o---------COMMON     return user
o---------COMMON   }
o---------COMMON   
o---------COMMON   static async updateUser(username, user) {
o---------COMMON     try {
o-----------KNEX       await database.table('users').update(user).where({ username })
o------SEQUELIZE       await this.update(user, { where: { username } })
o---------COMMON       user = await this.getUser(user.username || username)
o---------COMMON     } catch (error) {
o---------COMMON       process.env.DEBUG === 'true' && (console.error(error))
o---------COMMON       throw Boom.badImplementation()
o---------COMMON     }
o---------COMMON     return user
o---------COMMON   }
o---------COMMON   
o---------COMMON   static async deleteUser(username) {
o---------COMMON     try {
o-----------KNEX       await database.table('users').where({ username }).del()
o------SEQUELIZE       await this.destroy({ where: { username } })
o---------COMMON     } catch (error) {
o---------COMMON       process.env.DEBUG === 'true' && (console.error(error))
o---------COMMON       throw Boom.badImplementation()
o---------COMMON     }
o---------COMMON   }
o---------COMMON }
o---------COMMON 
o---------COMMON module.exports = UserModel
`