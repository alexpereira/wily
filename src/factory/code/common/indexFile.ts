export = `
o---------COMMON var app = require('./src/app')
o---------COMMON var database = require('./src/utils/database')
o---------COMMON var logger = require('./src/utils/logger')
o---------COMMON 
o---------COMMON var PORT = process.env.PORT || 8080
o---------COMMON var HOSTNAME = process.env.HOSTNAME || '0.0.0.0'
o---------COMMON var SERVER_LISTENING_MESSAGE = \`Server listening on http://\${HOSTNAME}:\${PORT}/\`
o---------COMMON
o---------COMMON // Launch server
o--------EXPRESS var server = app.listen(PORT, HOSTNAME, () =>  logger.log(SERVER_LISTENING_MESSAGE))
o-----------HAPI var server = app.server({ host: HOSTNAME, port: PORT })
o---------COMMON
o---------COMMON // Shutdown server gracefully
o---------COMMON function handleExit(options, err) {
o---------COMMON   if (options.cleanup) {
o---------COMMON     var actions = [
o--------EXPRESS       server.close,
o-----------HAPI       server.stop,
o---------COMMON       database.destroy
o---------COMMON     ]
o---------COMMON     actions.forEach((close, i) => {
o---------COMMON       try {
o---------COMMON         close(() => {
o---------COMMON           if (i === actions.length - 1) process.exit()
o---------COMMON         })
o---------COMMON       } catch (err) {
o---------COMMON         if (i === actions.length - 1) process.exit()
o---------COMMON       }
o---------COMMON     })
o---------COMMON   }
o---------COMMON   if (err) errors.report(err)
o---------COMMON   if (options.exit) process.exit()
o---------COMMON }
o---------COMMON 
o---------COMMON process.on('exit', handleExit.bind(null, { cleanup: true }))
o---------COMMON process.on('SIGINT', handleExit.bind(null, { exit: true }))
o---------COMMON process.on('SIGTERM', handleExit.bind(null, { exit: true }))
o---------COMMON process.on('uncaughtException', handleExit.bind(null, { exit: true }))
`