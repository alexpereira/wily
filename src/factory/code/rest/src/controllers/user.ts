export = `
o---------COMMON var UserModel = require('../models/user')
o---------COMMON var userValidation = require('../validation/user')
o---------COMMON 
o---------COMMON class UserController {
o---------COMMON 
o---------COMMON   constructor() {
o---------COMMON     this.userModel = new UserModel()
o---------COMMON 
o---------COMMON     this.registerUser = this.registerUser.bind(this)
o---------COMMON     this.loginUser = this.loginUser.bind(this)
o---------COMMON     this.getUsers = this.getUsers.bind(this)
o---------COMMON     this.getUser = this.getUser.bind(this)
o---------COMMON     this.updateUser = this.updateUser.bind(this)
o---------COMMON     this.deleteUser = this.deleteUser.bind(this)
o---------COMMON   }
o---------COMMON 
o---------COMMON   async registerUser(req, res) {
o---------COMMON     var { body: user } = req
o---------COMMON 
o---------COMMON     try {
o---------COMMON       userValidation.validateRegister(user)
o---------COMMON     } catch (error) {
o---------COMMON       res.status(error.status).send(error.message)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     try {
o---------COMMON       user = await this.userModel.insertUser(user)
o---------COMMON     } catch (error) {
o---------COMMON       res.status(error.status).send(error.message)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     res.status(200).send(user)
o---------COMMON   }
o---------COMMON 
o---------COMMON   async loginUser(req, res) {
o---------COMMON     var { body: user } = req
o---------COMMON 
o---------COMMON     try {
o---------COMMON       userValidation.validateLogin(user)
o---------COMMON     } catch (error) {
o---------COMMON       res.status(error.status).send(error.message)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     var token = ''
o---------COMMON     try {
o---------COMMON       token = await this.userModel.authenticateUser(user)
o---------COMMON     } catch (error) {
o---------COMMON       res.status(error.status).send(error.message)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     res.status(200).send({ token })
o---------COMMON   }
o---------COMMON 
o---------COMMON   async getUsers(req, res) {
o---------COMMON     var users = []
o---------COMMON     try {
o---------COMMON       users = await this.userModel.getUsers()
o---------COMMON     } catch (error) {
o---------COMMON       res.status(error.status).send(error.message)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     res.status(200).send(users)
o---------COMMON   }
o---------COMMON 
o---------COMMON   async getUser(req, res) {
o---------COMMON     var { username } = req.params
o---------COMMON 
o---------COMMON     try {
o---------COMMON       userValidation.validateUsername(username)
o---------COMMON     } catch (error) {
o---------COMMON       res.status(error.status).send(error.message)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     var user = {}
o---------COMMON     try {
o---------COMMON       user = await this.userModel.getUser(username)
o---------COMMON     } catch (error) {
o---------COMMON       res.status(error.status).send(error.message)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     res.status(200).send(user)
o---------COMMON   }
o---------COMMON 
o---------COMMON   async updateUser(req, res) {
o---------COMMON     var { method, body: user, params: { username } } = req
o---------COMMON 
o---------COMMON     try {
o---------COMMON       user = userValidation.validateUser(user)
o---------COMMON     } catch (error) {
o---------COMMON       res.status(error.status).send(error.message)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     if (method == 'PATCH') {
o---------COMMON       for (var field in user) { 
o---------COMMON         if (user[field] === null) {
o---------COMMON           delete user[field]
o---------COMMON         }
o---------COMMON       }
o---------COMMON     }
o---------COMMON 
o---------COMMON     try {
o---------COMMON       user = await this.userModel.updateUser(username, user)
o---------COMMON     } catch (error) {
o---------COMMON       res.status(error.status).send(error.message)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     res.status(200).send(user)
o---------COMMON   }
o---------COMMON 
o---------COMMON   async deleteUser(req, res) {
o---------COMMON     var { username } = req.params
o---------COMMON 
o---------COMMON     try {
o---------COMMON       userValidation.validateUsername(username)
o---------COMMON     } catch (error) {
o---------COMMON       res.status(error.status).send(error.message)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     try {
o---------COMMON       await this.userModel.deleteUser(username)
o---------COMMON     } catch (error) {
o---------COMMON       res.status(error.status).send(error.message)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     res.status(200).send({})
o---------COMMON   }
o---------COMMON }
o---------COMMON 
o---------COMMON module.exports = UserController
`