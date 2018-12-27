import { ProjectStack } from '../types'

export const projectStack = [
  {
    type: 'list',
    name: 'server',
    message: 'Server: ',
    choices: ['rest', /*'graphql'*/],
    default: 'rest'
  },
  {
    type: 'list',
    name: 'framework',
    message: 'Framework: ',
    choices: ['express', 'hapi'],
    default: 'express',
  },
  {
    type: 'list',
    name: 'database',
    message: 'Database: ',
    choices: ['mysql', /*'mongodb'*/],
    default: 'mysql'
  },
  {
    type: 'list',
    name: 'orm',
    message: 'ORM: ',
    choices: ['knex', 'sequelize'],
    default: 'knex',
    when: (answers: ProjectStack) => answers.database === 'mysql'
  },
  /*{
    type: 'list',
    name: 'odm',
    message: 'ODM: ',
    choices: ['mongoose', 'native-mongodb'],
    default: 'mongoose',
    when: (answers: ProjectStack) => answers.database === 'mongodb'
  },*/
  {
    type: 'list',
    name: 'auth',
    message: 'Authentication: ',
    choices: ['jwt', /*'express-session'*/],
    default: 'jwt',
    when: (answers: ProjectStack) => answers.framework === 'express'
  },
  {
    type: 'list',
    name: 'auth',
    message: 'Authentication: ',
    choices: ['jwt', /*'yar'*/],
    default: 'jwt',
    when: (answers: ProjectStack) => answers.framework === 'hapi'
  },
  {
    type: 'list',
    name: 'validation',
    message: 'validation: ',
    choices: ['joi', /*'validator'*/],
    default: 'joi'
  },
  {
    type: 'list',
    name: 'test',
    message: 'test: ',
    choices: ['mocha', 'jest'],
    default: 'mocha'
  }
]