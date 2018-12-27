export = `
o------------JWT var jwt = require('jsonwebtoken')
o---------COMMON var Boom = require('boom')
o---------COMMON 
o--------EXPRESS module.exports = function(req, res, next) {
o-----------HAPI module.exports = function(request, h) {
o-----------HAPI   var { raw: { req } } = request
o------------JWT   var { headers: { authorization: token = 'Bear ' } } = req
o---------COMMON 
o---------COMMON   var user = {}
o---------COMMON   try {
o------------JWT     user = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET)
o---------COMMON   } catch (error) {
o---------COMMON     process.env.DEBUG === 'true' && (console.error(error))
o---------COMMON   }
o---------COMMON   
o---------COMMON   try {
o---------COMMON     if (Object.keys(user).length === 0) {
o---------COMMON       throw Boom.unauthorized()
o---------COMMON     }
o---------COMMON   } catch ({ message, output: { statusCode } }) {
o--------EXPRESS     return res.status(statusCode).send(message)
o-----------HAPI     return h.unauthenticated(Boom.unauthorized())
o---------COMMON   }
o---------COMMON 
o--------EXPRESS   req.auth = { credentials: { username: user.username } }
o--------EXPRESS   next()
o-----------HAPI   return h.authenticated({ credentials: { username: user.username } })
o---------COMMON }
`