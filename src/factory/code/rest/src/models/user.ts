export = `
o------------JWT var jwt = require('jsonwebtoken')
o---------COMMON var database = require('../utils/database')
o---------COMMON var InternalError = require('../errors/InternalError')
o---------COMMON var BadRequest = require('../errors/BadRequest')
o---------COMMON 
o---------COMMON class UserModel {
o---------COMMON 
o---------COMMON   constructor () {
o---------COMMON   }
o---------COMMON 
o---------COMMON   async authenticateUser(user) {
o---------COMMON     var match = {}
o---------COMMON     try {
o-----------KNEX       match = await database.select(Object.keys(user)).table('users').where(user)
o-----------KNEX       match = match[0]
o---------COMMON     } catch (error) {
o---------COMMON       console.error(error.details)
o---------COMMON       throw new InternalError()
o---------COMMON     }
o---------COMMON 
o---------COMMON     if (JSON.stringify(user) !== JSON.stringify(match)) {
o---------COMMON       throw new BadRequest()
o---------COMMON     }
o---------COMMON 
o------------JWT     return jwt.sign({ username: match.username }, process.env.JWT_SECRET, { expiresIn: '1h'})
o---------COMMON   }
o---------COMMON 
o---------COMMON   async getUsers() {
o---------COMMON     var users = []
o---------COMMON     try {
o-----------KNEX       users = await database.select().table('users')
o---------COMMON     } catch (error) {
o---------COMMON       console.error(error.details)
o---------COMMON       throw new InternalError()
o---------COMMON     }
o---------COMMON     return users
o---------COMMON   }
o---------COMMON 
o---------COMMON   async getUser(username) {
o---------COMMON     var user = {}
o---------COMMON     try {
o-----------KNEX       user = await database.select().table('users').where({ username })
o-----------KNEX       user = user[0]
o---------COMMON     } catch (error) {
o---------COMMON       console.error(error.details)
o---------COMMON       throw new InternalError()
o---------COMMON     }
o---------COMMON     return user
o---------COMMON   }
o---------COMMON   
o---------COMMON   async insertUser(user) {
o---------COMMON     try {
o-----------KNEX       await database.table('users').insert(user)
o---------COMMON       user = await this.getUser(user.username)
o---------COMMON     } catch (error) {
o---------COMMON       console.error(error.details)
o---------COMMON       throw new InternalError()
o---------COMMON     }
o---------COMMON     return user
o---------COMMON   }
o---------COMMON   
o---------COMMON   async updateUser(username, user) {
o---------COMMON     try {
o-----------KNEX       await database.table('users').update(user).where({ username })
o---------COMMON       user = await this.getUser(user.username || username)
o---------COMMON     } catch (error) {
o---------COMMON       console.error(error.details)
o---------COMMON       throw new InternalError()
o---------COMMON     }
o---------COMMON     return user
o---------COMMON   }
o---------COMMON   
o---------COMMON   async deleteUser(username) {
o---------COMMON     try {
o-----------KNEX       await database.table('users').where({ username }).del()
o---------COMMON     } catch (error) {
o---------COMMON       console.error(error.details)
o---------COMMON       throw new InternalError()
o---------COMMON     }
o---------COMMON   }
o---------COMMON }
o---------COMMON 
o---------COMMON module.exports = UserModel
`