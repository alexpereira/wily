export = `
o---------COMMON require('dotenv').config()
o---------COMMON var app = require('./src/app')
o---------COMMON var database = require('./src/utils/database')
o---------COMMON 
o--------EXPRESS var PORT = process.env.SERVER_PORT || 8080
o--------EXPRESS var HOST = process.env.SERVER_HOST || '0.0.0.0'
o--------EXPRESS 
o---------COMMON var SERVER_LISTENING_MESSAGE = \`
o---------COMMON Built with ♥ by Alex Pereira
o---------COMMON Donate: paypal.me/alexpereira7 or venmo @alexpereira7
o---------COMMON 
o--------EXPRESS Server listening at http://\${HOST}:\${PORT}
o-----------HAPI Server listening at \${app.info.uri}
o---------COMMON 
o-----------REST Routes:
o-----------REST 
o-----------REST   [GET]     /v1/ping
o-----------REST   [POST]    /v1/login
o-----------REST   [POST]    /v1/users
o-----------REST   [GET]     /v1/users
o-----------REST   [GET]     /v1/users/:username
o-----------REST   [PUT]     /v1/users/:username
o-----------REST   [PATCH]   /v1/users/:username
o-----------REST   [DELETE]  /v1/users/:username
o-----------REST 
o---------COMMON \`
o--------EXPRESS var SERVER_SHUTDOWN_MESSAGE = \`Server stopped listening at http://\${HOST}:\${PORT}\`
o-----------HAPI var SERVER_SHUTDOWN_MESSAGE = \`Server stopped listening at \${app.info.uri}\`
o---------COMMON
o---------COMMON // Start server
o--------EXPRESS var server = app.listen(PORT, HOST, console.info(SERVER_LISTENING_MESSAGE))
o-----------HAPI app.start(console.info(SERVER_LISTENING_MESSAGE))
o---------COMMON
o---------COMMON // Shutdown server gracefully
o---------COMMON function handleExit(options, err) {
o---------COMMON   if (options.cleanup) {
o---------COMMON     var actions = [
o--------EXPRESS       server.close,
o-----------HAPI       app.stop,
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
o---------COMMON   
o---------COMMON   if (options.exit) process.exit()
o---------COMMON 
o---------COMMON   console.info(SERVER_SHUTDOWN_MESSAGE)
o---------COMMON }
o---------COMMON 
o---------COMMON process.on('exit', handleExit.bind(null, { cleanup: true }))
o---------COMMON process.on('SIGINT', handleExit.bind(null, { exit: true }))
o---------COMMON process.on('SIGTERM', handleExit.bind(null, { exit: true }))
o---------COMMON process.on('uncaughtException', handleExit.bind(null, { exit: true }))
o---------COMMON 
o--------EXPRESS module.exports = server
o-----------HAPI module.exports = app
`