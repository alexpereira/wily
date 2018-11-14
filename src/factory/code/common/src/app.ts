export = `
o--------EXPRESS var express = require('express')
o-----------HAPI var hapi = require('hapi') 
o-----------HAPI var PORT = process.env.SERVER_PORT || 8080
o-----------HAPI var HOST = process.env.SERVER_HOST || '0.0.0.0'
o---------COMMON 
o---------COMMON var v1UserRoutes = require('./routes/v1/user')
o-----------HAPI var verifyUser = require('./middleware/verifyUser')
o---------COMMON 
o--------EXPRESS var app = express()
o-----------HAPI var app = hapi.server({ host: HOST, port: PORT })
o-----------HAPI 
o-----------HAPI // Add verifyUser scheme
o-----------HAPI app.auth.scheme('verifyUserScheme', () => ({ authenticate: verifyUser }))
o-----------HAPI 
o-----------HAPI // Add verifyUser strategy
o-----------HAPI app.auth.strategy('verifyUser', 'verifyUserScheme')
o---------COMMON 
o--------EXPRESS app.use(express.json())
o--------EXPRESS 
o--------EXPRESS app.use(v1UserRoutes)
o-----------HAPI app.route(v1UserRoutes)
o---------COMMON 
o---------COMMON module.exports = app
`