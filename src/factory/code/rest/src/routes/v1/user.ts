export = `
o--------EXPRESS var { Router } = require('express')
o--------EXPRESS 
o--------EXPRESS var verifyUser = require('../../middleware/verifyUser')
o---------COMMON var UserController = require('../../controllers/user')
o---------COMMON var userController = new UserController()
o---------COMMON 
o--------EXPRESS var routes = new Router()
o--------EXPRESS 
o--------EXPRESS routes.get('/v1/ping', (_, res) => res.status(200).send('pong'))
o--------EXPRESS 
o--------EXPRESS routes.post('/v1/users', userController.registerUser)
o--------EXPRESS routes.post('/v1/login', userController.loginUser)
o--------EXPRESS 
o--------EXPRESS routes.get('/v1/users', verifyUser, userController.getUsers)
o--------EXPRESS routes.get('/v1/users/:username', verifyUser, userController.getUser)
o--------EXPRESS routes.put('/v1/users/:username', verifyUser, userController.updateUser)
o--------EXPRESS routes.patch('/v1/users/:username', verifyUser, userController.updateUser)
o--------EXPRESS routes.delete('/v1/users/:username', verifyUser, userController.deleteUser)
o--------EXPRESS 
o-----------HAPI var routes = [
o-----------HAPI   { method: 'GET', path: '/v1/ping', handler: (_, h) => h.response('pong').code(200) },
o-----------HAPI 
o-----------HAPI   { method: 'POST', path: '/v1/users', handler: userController.registerUser },
o-----------HAPI   { method: 'POST', path: '/v1/login', handler: userController.loginUser },
o-----------HAPI
o-----------HAPI   { method: 'GET', path: '/v1/users', config: { auth: 'verifyUser', handler: userController.getUsers } },
o-----------HAPI   { method: 'GET', path: '/v1/users/{username}', config: { auth: 'verifyUser', handler: userController.getUser } },
o-----------HAPI   { method: 'PUT', path: '/v1/users/{username}', config: { auth: 'verifyUser', handler: userController.updateUser } },
o-----------HAPI   { method: 'PATCH', path: '/v1/users/{username}', config: { auth: 'verifyUser', handler: userController.updateUser } },
o-----------HAPI   { method: 'DELETE', path: '/v1/users/{username}', config: { auth: 'verifyUser', handler: userController.deleteUser  }}
o-----------HAPI ]
o-----------HAPI
o---------COMMON module.exports = routes
`