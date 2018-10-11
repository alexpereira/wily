export = `
o------------JWT var jwt = require('jsonwebtoken')
o---------COMMON var Unauthorized = require('../errors/Unauthorized')
o---------COMMON 
o---------COMMON module.exports = function(req, res, next) {
o------------JWT   var { authorization: token } = req.headers
o------------JWT 
o------------JWT   try {
o------------JWT     if (!token) {
o------------JWT       throw new Unauthorized()
o------------JWT     }
o------------JWT 
o------------JWT     var { username } = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET)
o------------JWT     req.user = {
o------------JWT       username
o------------JWT     }
o------------JWT   } catch (error) {
o------------JWT     res.status(error.status).send(error.message)
o------------JWT     return
o------------JWT   }
o------------JWT 
o---------COMMON   next()
o---------COMMON }
`