export = `
o---------COMMON var UserModel = require('../models/user')
o---------COMMON var userValidation = require('../validation/user')
o---------COMMON 
o---------COMMON class UserController {
o---------COMMON 
o---------COMMON   constructor() {
o---------COMMON     this.loginUser = this.loginUser.bind(this)
o---------COMMON     this.logoutUser = this.logoutUser.bind(this)
o---------COMMON     this.getUsers = this.getUsers.bind(this)
o---------COMMON     this.getUser = this.getUser.bind(this)
o---------COMMON     this.insertUser = this.insertUser.bind(this)
o---------COMMON     this.updateUserFull = this.updateUserFull.bind(this)
o---------COMMON     this.updateUserPartial = this.updateUserPartial.bind(this)
o---------COMMON     this.deleteUser = this.deleteUser.bind(this)
o---------COMMON   }
o---------COMMON 
o---------COMMON   loginUser(req, res) {
o---------COMMON     var { body } = req
o---------COMMON     var valid = userValidation.validateLogin(body)
o---------COMMON 
o---------COMMON     if (!valid) throw new Error('INVALID!')
o---------COMMON 
o---------COMMON     // assign jwt
o---------COMMON     var jwt = 'cool'
o---------COMMON     res.status(200).send(jwt)
o---------COMMON   }
o---------COMMON 
o---------COMMON   logoutUser(req, res) {
o---------COMMON     req.logout()
o---------COMMON     res.status(200).send()
o---------COMMON   }
o---------COMMON 
o---------COMMON   async getUsers(req, res) {
o---------COMMON     var userModel = new UserModel()
o---------COMMON     var users = []
o---------COMMON     try {
o---------COMMON       users = await userModel.getUsers()
o---------COMMON     } catch (error) {
o---------COMMON       res.status(error.status).send(error.message)
o---------COMMON       return
o---------COMMON     }
o---------COMMON     res.status(200).send(users)
o---------COMMON   }
o---------COMMON 
o---------COMMON   getUser(req, res) {
o---------COMMON     var { body } = req
o---------COMMON     var valid = userValidation.validateUsername(body)
o---------COMMON 
o---------COMMON     if (!valid) throw new Error('INVALID!')
o---------COMMON 
o---------COMMON     var user = new UserModel().getUser()
o---------COMMON     res.status(200).send(user)
o---------COMMON   }
o---------COMMON 
o---------COMMON   insertUser(req, res) {
o---------COMMON     var { body } = req
o---------COMMON     var valid = userValidation.validateInsertUser(body)
o---------COMMON 
o---------COMMON     if (!valid) throw new Error('INVALID!')
o---------COMMON 
o---------COMMON     var user = new UserModel().insertUser(body)
o---------COMMON     res.status(200).send(user)
o---------COMMON   }
o---------COMMON 
o---------COMMON   updateUserFull(req, res) {
o---------COMMON     var { body } = req
o---------COMMON     var valid = userValidation.validateUpdateUserFull(body)
o---------COMMON 
o---------COMMON     if (!valid) throw new Error('INVALID!')
o---------COMMON 
o---------COMMON     var user = new UserModel().updateUserFull(body)
o---------COMMON     res.status(200).send(user)
o---------COMMON   }
o---------COMMON 
o---------COMMON   updateUserPartial(req, res) {
o---------COMMON     var { body } = req
o---------COMMON     var valid = userValidation.validateUpdateUserPartial(body)
o---------COMMON 
o---------COMMON     if (!valid) throw new Error('INVALID!')
o---------COMMON 
o---------COMMON     var user = new UserModel().updateUserPartial(body)
o---------COMMON     res.status(200).send(user)
o---------COMMON   }
o---------COMMON 
o---------COMMON   deleteUser(req, res) {
o---------COMMON     var { body } = req
o---------COMMON     var valid = userValidation.validateUsername(body)
o---------COMMON 
o---------COMMON     if (!valid) throw new Error('INVALID!')
o---------COMMON 
o---------COMMON     var user = new UserModel().deleteUser()
o---------COMMON     res.status(200).send(user)
o---------COMMON   }
o---------COMMON }
o---------COMMON 
o---------COMMON module.exports = UserController
`