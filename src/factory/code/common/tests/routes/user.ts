export = `
o---------COMMON var request = require('supertest')
o---------COMMON 
o---------COMMON describe('Testing API...', function () {
o---------COMMON   var server = {}
o----------MOCHA   before(function () {
o-----------JEST   beforeAll(function () {
o---------COMMON     server = require('../../server')
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
o----------MOCHA   it('[POST] /users', function(done) {
o-----------JEST   test('[POST] /users', function(done) {
o---------COMMON     request(server)
o---------COMMON       .post('/users')
o---------COMMON       .send(testUser)
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[POST] /login', function(done) {
o-----------JEST   test('[POST] /login', function(done) {
o---------COMMON     request(server)
o---------COMMON       .post('/login')
o---------COMMON       .send(testUser)
o---------COMMON       .expect(res => token = res.body.token)
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[GET] /users', function(done) {
o-----------JEST   test('[GET] /users', function(done) {
o---------COMMON     request(server)
o---------COMMON       .get('/users')
o---------COMMON       .set('Authorization', \`Bearer \${token}\`)
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[GET] /users/:username', function(done) {
o-----------JEST   test('[GET] /users/:username', function(done) {
o---------COMMON     request(server)
o---------COMMON       .get(\`/users/\${testUser.username}\`)
o---------COMMON       .set('Authorization', \`Bearer \${token}\`)
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[PUT] /users/:username', function(done) {
o-----------JEST   test('[PUT] /users/:username', function(done) {
o---------COMMON     request(server)
o---------COMMON       .put(\`/users/\${testUser.username}\`)
o---------COMMON       .set('Authorization', \`Bearer \${token}\`)
o---------COMMON       .send({ username: updatedUser.username })
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[PATCH] /users/:username', function(done) {
o-----------JEST   test('[PATCH] /users/:username', function(done) {
o---------COMMON     request(server)
o---------COMMON       .patch(\`/users/\${updatedUser.username}\`)
o---------COMMON       .set('Authorization', \`Bearer \${token}\`)
o---------COMMON       .send({ password: updatedUser.password })
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[DELETE] /users/:username', function(done) {
o-----------JEST   test('[DELETE] /users/:username', function(done) {
o---------COMMON     request(server)
o---------COMMON       .delete(\`/users/\${updatedUser.username}\`)
o---------COMMON       .set('Authorization', \`Bearer \${token}\`)
o---------COMMON       .expect(200, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[GET] /users [UNAUTHORIZED]', function(done) {
o-----------JEST   test('[GET] /users [UNAUTHORIZED]', function(done) {
o---------COMMON     request(server)
o---------COMMON       .get('/users')
o---------COMMON       .expect(401, done)
o---------COMMON   })
o---------COMMON 
o----------MOCHA   it('[POST] /login [BAD REQUEST]', function(done) {
o-----------JEST   test('[POST] /login [BAD REQUEST]', function(done) {
o---------COMMON     request(server)
o---------COMMON       .post('/login')
o---------COMMON       .send({ username: 'test', password: false })
o---------COMMON       .expect(400, done)
o---------COMMON   })
o---------COMMON 
o---------COMMON   after(function (done) {
o-----------JEST   afterAll(function (done) {
o---------COMMON     server.close(done)
o---------COMMON   })
o---------COMMON })
o---------COMMON `