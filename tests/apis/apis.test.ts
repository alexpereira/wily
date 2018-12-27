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
]

describe('Testing API Combinations...', async () => {

  before( async function() {
    console.info('\n    Installing npm packages\n')
    this.timeout(60000)

    // Change directory in context
    try {
      process.chdir('./tests/apis')
    }
    catch (error) {
      console.error(`Changing directory in context error: ${error}`)
    }

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
      }

      // Build combination
      try {
        await exec(`../../bin/wily init --stack ${combination}`)
      } catch (error) {
        console.error(`Building combination error: ${error}`)
      }

      // Run combination tests
      try {
        await exec(`./node_modules/.bin/${testFramework} ./${combination}/tests ${testParams}`)  
      } catch (error) {
        console.error(`Combination test error: ${error}`)
        pass = false
      }
      
      // Destroy combination
      try {
        await exec(`rm -rf ./${combination}`)
      } catch (error) {
        console.error(`Destroying combination error: ${error}`)
      }

      expect(pass).to.be.true
    })
  })

  await Promise.all(promiseTests)
})