export = `
o---------COMMON var request = require('supertest')
o---------COMMON 
o---------COMMON describe('Testing API...', function () {
o---------COMMON   var server = {}
o----------MOCHA   before(function () {
o-----------JEST   beforeAll(function () {
o---------COMMON     jest.setTimeout(30000)
o---------COMMON     server = require('../../../server')
o---------COMMON   })
o---------COMMON 
o---------COMMON   var testUser = { 
o---------COMMON     username: 'test', 
o---------COMMON     password: 'test' 
o---------COMMON   }
o---------COMMON 
o---------COMMON   var updatedUser = {
o---------COMMON     username: 'newusername',
o---------COMMON     password: 'newpassword'
o---------COMMON   }
o---------COMMON 
o---------COMMON   var token = ''
o---------COMMON 
o----------MOCHA   it('[GET] /v1/ping', function(done) {
o-----------JEST   test('[GET] /v1/ping', function(done) {
o--------EXPRESS     request(server)
o-----------HAPI     request(server.listener)
o---------COMMON       .get('/v1/ping')
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[POST] /v1/users', function(done) {
o-----------JEST   test('[POST] /v1/users', function(done) {
o--------EXPRESS     request(server)
o-----------HAPI     request(server.listener)
o---------COMMON       .post('/v1/users')
o---------COMMON       .send(testUser)
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[POST] /v1/login', function(done) {
o-----------JEST   test('[POST] /v1/login', function(done) {
o--------EXPRESS     request(server)
o-----------HAPI     request(server.listener)
o---------COMMON       .post('/v1/login')
o---------COMMON       .send(testUser)
o---------COMMON       .expect(res => token = res.body.token)
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[GET] /v1/users', function(done) {
o-----------JEST   test('[GET] /v1/users', function(done) {
o--------EXPRESS     request(server)
o-----------HAPI     request(server.listener)
o---------COMMON       .get('/v1/users')
o---------COMMON       .set('Authorization', \`Bearer \${token}\`)
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[GET] /v1/users/:username', function(done) {
o-----------JEST   test('[GET] /v1/users/:username', function(done) {
o--------EXPRESS     request(server)
o-----------HAPI     request(server.listener)
o---------COMMON       .get(\`/v1/users/\${testUser.username}\`)
o---------COMMON       .set('Authorization', \`Bearer \${token}\`)
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[PUT] /v1/users/:username', function(done) {
o-----------JEST   test('[PUT] /v1/users/:username', function(done) {
o--------EXPRESS     request(server)
o-----------HAPI     request(server.listener)
o---------COMMON       .put(\`/v1/users/\${testUser.username}\`)
o---------COMMON       .set('Authorization', \`Bearer \${token}\`)
o---------COMMON       .send({ username: updatedUser.username })
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[PATCH] /v1/users/:username', function(done) {
o-----------JEST   test('[PATCH] /v1/users/:username', function(done) {
o--------EXPRESS     request(server)
o-----------HAPI     request(server.listener)
o---------COMMON       .patch(\`/v1/users/\${updatedUser.username}\`)
o---------COMMON       .set('Authorization', \`Bearer \${token}\`)
o---------COMMON       .send({ password: updatedUser.password })
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[DELETE] /v1/users/:username', function(done) {
o-----------JEST   test('[DELETE] /v1/users/:username', function(done) {
o--------EXPRESS     request(server)
o-----------HAPI     request(server.listener)
o---------COMMON       .delete(\`/v1/users/\${updatedUser.username}\`)
o---------COMMON       .set('Authorization', \`Bearer \${token}\`)
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[GET] /v1/users [UNAUTHORIZED]', function(done) {
o-----------JEST   test('[GET] /v1/users [UNAUTHORIZED]', function(done) {
o--------EXPRESS     request(server)
o-----------HAPI     request(server.listener)
o---------COMMON       .get('/v1/users')
o---------COMMON       .expect(401, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[POST] /v1/login [BAD REQUEST]', function(done) {
o-----------JEST   test('[POST] /v1/login [BAD REQUEST]', function(done) {
o--------EXPRESS     request(server)
o-----------HAPI     request(server.listener)
o---------COMMON       .post('/v1/login')
o---------COMMON       .send({ username: 'test', password: false })
o---------COMMON       .expect(400, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   after(async function () {
o-----------JEST   afterAll(async function () {
o----------MOCHA     await server.shutdown({ exit: true })
o-----------JEST     await server.shutdown({ cleanup: true })
o---------COMMON   })
o---------COMMON })
o---------COMMON `