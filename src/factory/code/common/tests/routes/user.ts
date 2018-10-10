export = `
o---------COMMON var request = require('supertest')
o---------COMMON 
o----------MOCHA describe('Testing API...', function () {
o----------MOCHA   var server = {}
o----------MOCHA   before(function () {
o----------MOCHA     server = require('../../server')
o----------MOCHA   })
o----------MOCHA 
o----------MOCHA   it('[GET] /users', function(done) {
o----------MOCHA     request(server)
o----------MOCHA       .get('/users')
o----------MOCHA       .expect(200, done)
o----------MOCHA   })
o----------MOCHA 
o----------MOCHA   after(function () {
o----------MOCHA     server.close()
o----------MOCHA   })
o----------MOCHA })
`