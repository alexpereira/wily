export = `
o--------EXPRESS var express = require('express')
o-----------HAPI var hapi = require('hapi')
o---------COMMON 
o---------COMMON var userRoutes = require('./routes/user')
o---------COMMON 
o--------EXPRESS var app = express()
o-----------HAPI var app = hapi
o---------COMMON 
o--------EXPRESS app.use(express.json())
o--------EXPRESS 
o--------EXPRESS app.use(userRoutes)
o-----------HAPI app.route(userRoutes)
o---------COMMON 
o---------COMMON module.exports = app
`