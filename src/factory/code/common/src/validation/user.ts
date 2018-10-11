export = `
o------------JOI var Joi = require('joi')
o------VALIDATOR var validator = require('validator')
o---------COMMON var BadRequest = require('../errors/BadRequest')
o---------COMMON 
o---------COMMON function validateRegister(user) {
o---------COMMON   try {
o------------JOI     Joi.attempt(user, Joi.object({
o------------JOI       username: Joi.string().required(),
o------------JOI       password: Joi.string().required()
o------------JOI     }))
o---------COMMON   } catch (error) {
o---------COMMON     console.error(error.details)
o---------COMMON     throw new BadRequest()
o---------COMMON   }
o---------COMMON }
o---------COMMON 
o---------COMMON function validateLogin(user) {
o---------COMMON   try {
o------------JOI     Joi.attempt(user, Joi.object({
o------------JOI       username: Joi.string().required(),
o------------JOI       password: Joi.string().required()
o------------JOI     }))
o---------COMMON   } catch (error) {
o---------COMMON     console.error(error.details)
o---------COMMON     throw new BadRequest()
o---------COMMON   }
o---------COMMON }
o---------COMMON 
o---------COMMON function validateUsername(username) {
o---------COMMON   try {
o------------JOI     Joi.attempt(username, Joi.string())
o---------COMMON   } catch (error) {
o---------COMMON     console.error(error.details)
o---------COMMON     throw new BadRequest()
o---------COMMON   }
o---------COMMON }
o---------COMMON 
o---------COMMON function validateUser(user) {
o---------COMMON   try {
o------------JOI     user = Joi.validate(user, Joi.object({
o------------JOI       username: Joi.string().default(null),
o------------JOI       password: Joi.string().default(null)
o------------JOI     }), (_, value) => value)
o---------COMMON   } catch (error) {
o---------COMMON     console.error(error.details)
o---------COMMON     throw new BadRequest()
o---------COMMON   }
o---------COMMON   return user
o---------COMMON }
o---------COMMON 
o---------COMMON module.exports = {
o---------COMMON   validateUser,
o---------COMMON   validateLogin,
o---------COMMON   validateRegister,
o---------COMMON   validateUsername
o---------COMMON }
`