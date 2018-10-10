export = `
o--------EXPRESS var { Router } = require('express')
o--------EXPRESS 
o---------COMMON var UserController = require('../controllers/user')
o---------COMMON var userController = new UserController()
o---------COMMON 
o--------EXPRESS var routes = new Router()
o--------EXPRESS 
o--------EXPRESS routes.post('/login', userController.loginUser)
o--------EXPRESS routes.post('/logout', userController.logoutUser)
o--------EXPRESS 
o--------EXPRESS routes.get('/users', userController.getUsers)
o--------EXPRESS routes.get('/users/:username', userController.getUser)
o--------EXPRESS routes.post('/users', userController.insertUser)
o--------EXPRESS routes.put('/users/:username', userController.updateUserFull)
o--------EXPRESS routes.patch('/users/:username', userController.updateUserPartial)
o--------EXPRESS routes.delete('/users/:username', userController.deleteUser)
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