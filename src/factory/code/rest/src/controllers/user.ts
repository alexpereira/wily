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
o--------EXPRESS   async registerUser(req, res) {
o-----------HAPI   async registerUser(request, h) {
o--------EXPRESS     var { body: user } = req
o-----------HAPI     var { body: user } = request
o---------COMMON 
o---------COMMON     try {
o---------COMMON       userValidation.validateRegister(user)
o---------COMMON     } catch (error) {
o--------EXPRESS       res.status(error.status).send(error.message)
o-----------HAPI       h.response(error.message).code(error.status)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     try {
o---------COMMON       user = await this.userModel.insertUser(user)
o---------COMMON     } catch (error) {
o--------EXPRESS       res.status(error.status).send(error.message)
o-----------HAPI       h.response(error.message).code(error.status)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o--------EXPRESS     res.status(200).send(user)
o-----------HAPI     h.response(user).code(200)
o---------COMMON   }
o---------COMMON 
o--------EXPRESS   async loginUser(req, res) {
o-----------HAPI   async loginUser(request, h) {
o--------EXPRESS     var { body: user } = req
o-----------HAPI     var { body: user } = request
o---------COMMON 
o---------COMMON     try {
o---------COMMON       userValidation.validateLogin(user)
o---------COMMON     } catch (error) {
o--------EXPRESS       res.status(error.status).send(error.message)
o-----------HAPI       h.response(error.message).code(error.status)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     var token = ''
o---------COMMON     try {
o---------COMMON       token = await this.userModel.authenticateUser(user)
o---------COMMON     } catch (error) {
o--------EXPRESS       res.status(error.status).send(error.message)
o-----------HAPI       h.response(error.message).code(error.status)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o--------EXPRESS     res.status(200).send({ token })
o-----------HAPI     h.send(responseken }).code(200)
o---------COMMON   }
o---------COMMON 
o--------EXPRESS   async getUsers(req, res) {
o-----------HAPI   async getUsers(request, h) {
o---------COMMON     var users = []
o---------COMMON     try {
o---------COMMON       users = await this.userModel.getUsers()
o---------COMMON     } catch (error) {
o--------EXPRESS       res.status(error.status).send(error.message)
o-----------HAPI       h.response(error.message).code(error.status)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o--------EXPRESS     res.status(200).send(users)
o-----------HAPI     h.response(users).code(200)
o---------COMMON   }
o---------COMMON 
o--------EXPRESS   async getUser(req, res) {
o-----------HAPI   async getUser(request, h) {
o--------EXPRESS     var { params: { username } } = req
o-----------HAPI     var { params: { username } } = request
o---------COMMON 
o---------COMMON     try {
o---------COMMON       userValidation.validateUsername(username)
o---------COMMON     } catch (error) {
o--------EXPRESS       res.status(error.status).send(error.message)
o-----------HAPI       h.response(error.message).code(error.status)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     var user = {}
o---------COMMON     try {
o---------COMMON       user = await this.userModel.getUser(username)
o---------COMMON     } catch (error) {
o--------EXPRESS       res.status(error.status).send(error.message)
o-----------HAPI       h.response(error.message).code(error.status)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o--------EXPRESS     res.status(200).send(user)
o-----------HAPI     h.response(user).code(200)
o---------COMMON   }
o---------COMMON 
o--------EXPRESS   async updateUser(req, res) {
o-----------HAPI   async updateUser(request, h) {
o--------EXPRESS     var { method, body: user, params: { username } } = req
o-----------HAPI     var { method, body: user, params: { username } } = request
o---------COMMON 
o---------COMMON     try {
o---------COMMON       user = userValidation.validateUser(user)
o---------COMMON     } catch (error) {
o--------EXPRESS       res.status(error.status).send(error.message)
o-----------HAPI       h.response(error.message).code(error.status)
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
o--------EXPRESS       res.status(error.status).send(error.message)
o-----------HAPI       h.response(error.message).code(error.status)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o--------EXPRESS     res.status(200).send(user)
o-----------HAPI     h.response(user).code(200)
o---------COMMON   }
o---------COMMON 
o--------EXPRESS   async deleteUser(req, res) {
o-----------HAPI   async deleteUser(request, h) {
o--------EXPRESS     var { params: { username } } = req
o-----------HAPI     var { params: { username } } = request
o---------COMMON 
o---------COMMON     try {
o---------COMMON       userValidation.validateUsername(username)
o---------COMMON     } catch (error) {
o--------EXPRESS       res.status(error.status).send(error.message)
o-----------HAPI       h.response(error.message).code(error.status)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o---------COMMON     try {
o---------COMMON       await this.userModel.deleteUser(username)
o---------COMMON     } catch (error) {
o--------EXPRESS       res.status(error.status).send(error.message)
o-----------HAPI       h.response(error.message).code(error.status)
o---------COMMON       return
o---------COMMON     }
o---------COMMON 
o--------EXPRESS     res.status(200).send({})
o-----------HAPI     h.response({}).code(200)
o---------COMMON   }
o---------COMMON }
o---------COMMON 
o---------COMMON module.exports = UserController
`