export = `
o--------EXPRESS var express = require('express')
o-----------HAPI var hapi = require('hapi')
o---------COMMON 
o---------COMMON var v1UserRoutes = require('./routes/v1/user')
o---------COMMON 
o--------EXPRESS var app = express()
o-----------HAPI var app = hapi
o---------COMMON 
o--------EXPRESS app.use(express.json())
o--------EXPRESS 
o--------EXPRESS app.use(v1UserRoutes)
o-----------HAPI app.route(v1UserRoutes)
o---------COMMON 
o---------COMMON module.exports = app
`