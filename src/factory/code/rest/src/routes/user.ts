export = `
o--------EXPRESS var { Router } = require('express')
o--------EXPRESS 
o------------JWT var verifyUser = require('../middleware/verifyUser')
o---------COMMON var UserController = require('../controllers/user')
o---------COMMON var userController = new UserController()
o---------COMMON 
o--------EXPRESS var routes = new Router()
o--------EXPRESS 
o--------EXPRESS routes.post('/users', userController.registerUser)
o--------EXPRESS routes.post('/login', userController.loginUser)
o--------EXPRESS 
o--------EXPRESS routes.get('/users', verifyUser, userController.getUsers)
o--------EXPRESS routes.get('/users/:username', verifyUser, userController.getUser)
o--------EXPRESS routes.put('/users/:username', verifyUser, userController.updateUser)
o--------EXPRESS routes.patch('/users/:username', verifyUser, userController.updateUser)
o--------EXPRESS routes.delete('/users/:username', verifyUser, userController.deleteUser)
o--------EXPRESS 
o-----------HAPI var routes = [
o-----------HAPI  { method: 'POST', path: '/login', handler: userController.loginUser },
o-----------HAPI  { method: 'POST', path: '/logout', handler: userController.logoutUser },
o-----------HAPI
o-----------HAPI  { method: 'GET', path: '/users', handler: userController.getUsers },
o-----------HAPI  { method: 'GET', path: '/users/{username}', handler: userController.getUser },
o-----------HAPI  { method: 'POST', path: '/users', handler: userController.insertUser },
o-----------HAPI  { method: 'PUT', path: '/users/{username}', handler: userController.updateUser }
o-----------HAPI  { method: 'PATCH', path: '/users/{username}', handler: userController.updateUser }
o-----------HAPI  { method: 'DELETE', path: '/users/{username}', handler: userController.deleteUser }
o-----------HAPI ]
o-----------HAPI
o---------COMMON module.exports = routes
`