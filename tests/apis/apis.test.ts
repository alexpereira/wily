import { expect } from 'chai'
import { promisify } from 'util'
import { exec as execMethod } from 'child_process'
const exec = promisify(execMethod)

// All packages from ./src/factory/code/common/package.ts
const packages = [
  'express',
  'hapi',
  'mysql',
  'mysql2',
  'mongodb',
  'knex',
  'sequelize',
  'mongoose',
  'jsonwebtoken',
  'express-session',
  'yar',
  'joi',
  'validator',
  'dotenv',
  'boom',
  'jest',
  'mocha',
  'supertest'
]

// All API combinations currently supported
const combinations = [
  'rest-express-mysql-knex-jwt-joi-mocha',
  'rest-express-mysql-knex-jwt-joi-jest',
  'rest-hapi-mysql-knex-jwt-joi-mocha',
  'rest-hapi-mysql-knex-jwt-joi-jest',
  'rest-express-mysql-sequelize-jwt-joi-mocha',
  'rest-express-mysql-sequelize-jwt-joi-jest',
  'rest-hapi-mysql-sequelize-jwt-joi-mocha',
  'rest-hapi-mysql-sequelize-jwt-joi-jest',
  'rest-express-mongodb-mongoose-jwt-joi-mocha',
  'rest-express-mongodb-mongoose-jwt-joi-jest',
  'rest-hapi-mongodb-mongoose-jwt-joi-mocha',
  'rest-hapi-mongodb-mongoose-jwt-joi-jest',
  // 'rest-express-mongodb-mongodb-jwt-joi-mocha',
  // 'rest-express-mongodb-mongodb-jwt-joi-jest',
  // 'rest-hapi-mongodb-mongodb-jwt-joi-mocha',
  // 'rest-hapi-mongodb-mongodb-jwt-joi-jest',
  // 'rest-express-mysql-knex-jwt-validator-mocha',
  // 'rest-express-mysql-knex-jwt-validator-jest',
  // 'rest-hapi-mysql-knex-jwt-validator-mocha',
  // 'rest-hapi-mysql-knex-jwt-validator-jest',
  // 'rest-express-mysql-sequelize-jwt-validator-mocha',
  // 'rest-express-mysql-sequelize-jwt-validator-jest',
  // 'rest-hapi-mysql-sequelize-jwt-validator-mocha',
  // 'rest-hapi-mysql-sequelize-jwt-validator-jest',
  // 'rest-express-mongodb-mongoose-jwt-validator-mocha',
  // 'rest-express-mongodb-mongoose-jwt-validator-jest',
  // 'rest-hapi-mongodb-mongoose-jwt-validator-mocha',
  // 'rest-hapi-mongodb-mongoose-jwt-validator-jest',
  // 'rest-express-mongodb-mongodb-jwt-validator-mocha',
  // 'rest-express-mongodb-mongodb-jwt-validator-jest',
  // 'rest-hapi-mongodb-mongodb-jwt-validator-mocha',
  // 'rest-hapi-mongodb-mongodb-jwt-validator-jest',
  // 'rest-express-mysql-knex-session-joi-mocha',
  // 'rest-express-mysql-knex-session-joi-jest',
  // 'rest-hapi-mysql-knex-session-joi-mocha',
  // 'rest-hapi-mysql-knex-session-joi-jest',
  // 'rest-express-mysql-sequelize-session-joi-mocha',
  // 'rest-express-mysql-sequelize-session-joi-jest',
  // 'rest-hapi-mysql-sequelize-session-joi-mocha',
  // 'rest-hapi-mysql-sequelize-session-joi-jest',
  // 'rest-express-mongodb-mongoose-session-joi-mocha',
  // 'rest-express-mongodb-mongoose-session-joi-jest',
  // 'rest-hapi-mongodb-mongoose-session-joi-mocha',
  // 'rest-hapi-mongodb-mongoose-session-joi-jest',
  // 'rest-express-mongodb-mongodb-session-joi-mocha',
  // 'rest-express-mongodb-mongodb-session-joi-jest',
  // 'rest-hapi-mongodb-mongodb-session-joi-mocha',
  // 'rest-hapi-mongodb-mongodb-session-joi-jest',
  // 'rest-express-mysql-knex-session-validator-mocha',
  // 'rest-express-mysql-knex-session-validator-jest',
  // 'rest-hapi-mysql-knex-session-validator-mocha',
  // 'rest-hapi-mysql-knex-session-validator-jest',
  // 'rest-express-mysql-sequelize-session-validator-mocha',
  // 'rest-express-mysql-sequelize-session-validator-jest',
  // 'rest-hapi-mysql-sequelize-session-validator-mocha',
  // 'rest-hapi-mysql-sequelize-session-validator-jest',
  // 'rest-express-mongodb-mongoose-session-validator-mocha',
  // 'rest-express-mongodb-mongoose-session-validator-jest',
  // 'rest-hapi-mongodb-mongoose-session-validator-mocha',
  // 'rest-hapi-mongodb-mongoose-session-validator-jest',
  // 'rest-express-mongodb-mongodb-session-validator-mocha',
  // 'rest-express-mongodb-mongodb-session-validator-jest',
  // 'rest-hapi-mongodb-mongodb-session-validator-mocha',
  // 'rest-hapi-mongodb-mongodb-session-validator-jest',
  // 'graphql-express-mysql-knex-jwt-joi-mocha',
  // 'graphql-express-mysql-knex-jwt-joi-jest',
  // 'graphql-hapi-mysql-knex-jwt-joi-mocha',
  // 'graphql-hapi-mysql-knex-jwt-joi-jest',
  // 'graphql-express-mysql-sequelize-jwt-joi-mocha',
  // 'graphql-express-mysql-sequelize-jwt-joi-jest',
  // 'graphql-hapi-mysql-sequelize-jwt-joi-mocha',
  // 'graphql-hapi-mysql-sequelize-jwt-joi-jest',
  // 'graphql-express-mongodb-mongoose-jwt-joi-mocha',
  // 'graphql-express-mongodb-mongoose-jwt-joi-jest',
  // 'graphql-hapi-mongodb-mongoose-jwt-joi-mocha',
  // 'graphql-hapi-mongodb-mongoose-jwt-joi-jest',
  // 'graphql-express-mongodb-mongodb-jwt-joi-mocha',
  // 'graphql-express-mongodb-mongodb-jwt-joi-jest',
  // 'graphql-hapi-mongodb-mongodb-jwt-joi-mocha',
  // 'graphql-hapi-mongodb-mongodb-jwt-joi-jest',
  // 'graphql-express-mysql-knex-jwt-validator-mocha',
  // 'graphql-express-mysql-knex-jwt-validator-jest',
  // 'graphql-hapi-mysql-knex-jwt-validator-mocha',
  // 'graphql-hapi-mysql-knex-jwt-validator-jest',
  // 'graphql-express-mysql-sequelize-jwt-validator-mocha',
  // 'graphql-express-mysql-sequelize-jwt-validator-jest',
  // 'graphql-hapi-mysql-sequelize-jwt-validator-mocha',
  // 'graphql-hapi-mysql-sequelize-jwt-validator-jest',
  // 'graphql-express-mongodb-mongoose-jwt-validator-mocha',
  // 'graphql-express-mongodb-mongoose-jwt-validator-jest',
  // 'graphql-hapi-mongodb-mongoose-jwt-validator-mocha',
  // 'graphql-hapi-mongodb-mongoose-jwt-validator-jest',
  // 'graphql-express-mongodb-mongodb-jwt-validator-mocha',
  // 'graphql-express-mongodb-mongodb-jwt-validator-jest',
  // 'graphql-hapi-mongodb-mongodb-jwt-validator-mocha',
  // 'graphql-hapi-mongodb-mongodb-jwt-validator-jest',
  // 'graphql-express-mysql-knex-session-joi-mocha',
  // 'graphql-express-mysql-knex-session-joi-jest',
  // 'graphql-hapi-mysql-knex-session-joi-mocha',
  // 'graphql-hapi-mysql-knex-session-joi-jest',
  // 'graphql-express-mysql-sequelize-session-joi-mocha',
  // 'graphql-express-mysql-sequelize-session-joi-jest',
  // 'graphql-hapi-mysql-sequelize-session-joi-mocha',
  // 'graphql-hapi-mysql-sequelize-session-joi-jest',
  // 'graphql-express-mongodb-mongoose-session-joi-mocha',
  // 'graphql-express-mongodb-mongoose-session-joi-jest',
  // 'graphql-hapi-mongodb-mongoose-session-joi-mocha',
  // 'graphql-hapi-mongodb-mongoose-session-joi-jest',
  // 'graphql-express-mongodb-mongodb-session-joi-mocha',
  // 'graphql-express-mongodb-mongodb-session-joi-jest',
  // 'graphql-hapi-mongodb-mongodb-session-joi-mocha',
  // 'graphql-hapi-mongodb-mongodb-session-joi-jest',
  // 'graphql-express-mysql-knex-session-validator-mocha',
  // 'graphql-express-mysql-knex-session-validator-jest',
  // 'graphql-hapi-mysql-knex-session-validator-mocha',
  // 'graphql-hapi-mysql-knex-session-validator-jest',
  // 'graphql-express-mysql-sequelize-session-validator-mocha',
  // 'graphql-express-mysql-sequelize-session-validator-jest',
  // 'graphql-hapi-mysql-sequelize-session-validator-mocha',
  // 'graphql-hapi-mysql-sequelize-session-validator-jest',
  // 'graphql-express-mongodb-mongoose-session-validator-mocha',
  // 'graphql-express-mongodb-mongoose-session-validator-jest',
  // 'graphql-hapi-mongodb-mongoose-session-validator-mocha',
  // 'graphql-hapi-mongodb-mongoose-session-validator-jest',
  // 'graphql-express-mongodb-mongodb-session-validator-mocha',
  // 'graphql-express-mongodb-mongodb-session-validator-jest',
  // 'graphql-hapi-mongodb-mongodb-session-validator-mocha',
  // 'graphql-hapi-mongodb-mongodb-session-validator-jest',
]

// TODO:NOTE: look at running these test in parallel 

describe('Testing API Combinations...', async () => {

  before( async function() {
    console.info('\n    Installing npm packages\n')
    this.timeout(60000)

    // Change directory in context
    process.chdir(__dirname)

    // Install all npm packages
    try {
      await exec(`npm install ${packages.join(' ')}`)
    } catch (error) {
      console.error(`Installing npm packages error: ${error}`)
    }
  })

  const promiseTests = combinations.map(async combination => {
    it(`Testing combination: ${combination}`, async function () {
      this.timeout(60000)
      let pass = true

      const testFramework = combination.split('-')[6]
      let testParams = ''

      if (testFramework === 'mocha') {
        testParams = '--recursive --exit'
      } else if (testFramework === 'jest') {
        testParams = '--env=node --forceExit'
      }

      // Build combination
      try {
        await exec(`../../bin/wily init --stack ${combination}`)
      } catch (error) {
        console.error(`Building ${combination} error: ${error}`)
      }

      // Run combination tests
      try {
        await exec(`./node_modules/.bin/${testFramework} ./${combination}/tests ${testParams}`)
      } catch (error) {
        console.error(`${combination} tests error: ${error}`)
        pass = false
      }
      
      // Destroy combination
      try {
        await exec(`rm -rf ./${combination}`)
      } catch (error) {
        console.error(`Destroying ${combination} error: ${error}`)
      }

      expect(pass).to.be.true
    })
  })

  await Promise.all(promiseTests)
})