export = `
o---------COMMON var winston = require('winston')
o---------COMMON 
o---------COMMON var consoleFormatter = require('./logger/formatter/console')
o---------COMMON 
o---------COMMON var { format } = winston
o---------COMMON 
o---------COMMON var logger = winston.createLogger({
o---------COMMON   level: 'info',
o---------COMMON   format: format.json()
o---------COMMON })
o---------COMMON 
o---------COMMON module.exports = logger
`