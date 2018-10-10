export = `
o---------COMMON var database = require('../utils/database')
o---------COMMON var InternalError = require('../errors/InternalError')
o---------COMMON 
o---------COMMON class UserModel {
o---------COMMON 
o---------COMMON   constructor () {
o---------COMMON 
o---------COMMON   }
o---------COMMON 
o---------COMMON   async getUsers() {
o---------COMMON     var users = []
o---------COMMON     try {
o-----------KNEX       users = await database.select().table('users')
o---------COMMON     } catch (error) {
o---------COMMON       console.error(error)
o---------COMMON       throw new InternalError()
o---------COMMON     }
o---------COMMON     return users
o---------COMMON   }
o---------COMMON 
o---------COMMON   getUser(username) {
o--------MONGODB     database.user.findOne({ where: { username }})
o----------MYSQL     database.query(\`SELECT * FROM users WHERE username = \${username}\`)
o---------COMMON   }
o---------COMMON   
o---------COMMON   insertUser(user) {
o--------MONGODB     database.user.findAll()
o----------MYSQL     database.query(\`SELECT * FROM users\`)
o---------COMMON   }
o---------COMMON   
o---------COMMON   updateUserFull(user) {
o--------MONGODB     database.user.update({ user, where: { username: user.username }})
o----------MYSQL     database.query(\`UPDATE users SET * = user WHERE username = \${user.username}\`)
o---------COMMON   }
o---------COMMON   
o---------COMMON   updateUserPartial(user) {
o--------MONGODB     database.user.update({ user, where: { username: user.username }})
o----------MYSQL     database.query(\`UPDATE users SET * = user WHERE username = \${user.username}\`)
o---------COMMON   }
o---------COMMON   
o---------COMMON   deleteUser(username) {
o--------MONGODB     database.user.delete({ where: { username: username }})
o----------MYSQL     database.query(\`DELETE FROM users WHERE username = \${username}\`)
o---------COMMON   }
o---------COMMON }
o---------COMMON 
o---------COMMON module.exports = UserModel
`