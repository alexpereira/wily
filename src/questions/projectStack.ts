import { ProjectStack } from '../types'

export const projectStack = [
  {
    type: 'list',
    name: 'server',
    message: 'Type of server: ',
    choices: ['rest', 'graphql'],
    default: 'rest'
  },
  {
    type: 'list',
    name: 'framework',
    message: 'Type of framework: ',
    choices: ['express', 'hapi'],
    default: 'express',
  },
  {
    type: 'list',
    name: 'database',
    message: 'Type of database: ',
    choices: ['mysql', 'mongodb'],
    default: 'mysql'
  },
  {
    type: 'list',
    name: 'orm',
    message: 'Type of ORM: ',
    choices: ['knex', 'sequelize'],
    default: 'knex',
    when: (answers: ProjectStack) => answers.database == 'mysql'
  },
  {
    type: 'list',
    name: 'orm',
    message: 'Type of ORM: ',
    choices: ['mongoose', 'native mongodb'], // TODO: handle 'native mongodb'
    default: 'mongoose',
    when: (answers: ProjectStack) => answers.database == 'mongodb'
  },
  {
    type: 'list',
    name: 'auth',
    message: 'Type of authentication: ',
    choices: ['jwt', 'express-session'],
    default: 'jwt',
    when: (answers: ProjectStack) => answers.framework == 'express'
  },
  {
    type: 'list',
    name: 'auth',
    message: 'Type of authentication: ',
    choices: ['jwt', 'yar'],
    default: 'jwt',
    when: (answers: ProjectStack) => answers.framework == 'hapi'
  },
  {
    type: 'list',
    name: 'validation',
    message: 'Type of validation: ',
    choices: ['joi', 'validator'],
    default: 'joi'
  },
  {
    type: 'list',
    name: 'test',
    message: 'Type of test: ',
    choices: ['mocha', 'jest'],
    default: 'mocha'
  }
]