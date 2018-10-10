export = `
o------------JOI var joi = require('joi')
o------VALIDATOR var validator = require('validator')
o---------COMMON 
o---------COMMON function validateLogin(user) {
o------------JOI   return joi.validate(user)
o------VALIDATOR   return validator.validate(user)
o---------COMMON }
o---------COMMON 
o---------COMMON function validateUsername(user) {
o------------JOI   return joi.validate(user)
o------VALIDATOR   return validator.validate(user)
o---------COMMON }
o---------COMMON 
o---------COMMON function validateInsertUser(user) {
o------------JOI   return joi.validate(user)
o------VALIDATOR   return validator.validate(user)
o---------COMMON }
o---------COMMON 
o---------COMMON function validateUpdateUserFull(user) {
o------------JOI   return joi.validate(user)
o------VALIDATOR   return validator.validate(user)
o---------COMMON }
o---------COMMON 
o---------COMMON function validateUpdateUserPartial(user) {
o------------JOI   return joi.validate(user)
o------VALIDATOR   return validator.validate(user)
o---------COMMON }
o---------COMMON 
o---------COMMON module.exports = {
o---------COMMON   validateLogin,
o---------COMMON   validateUsername,
o---------COMMON   validateInsertUser,
o---------COMMON   validateUpdateUserFull,
o---------COMMON   validateUpdateUserPartial
o---------COMMON }
`