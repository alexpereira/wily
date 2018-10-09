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
    default: 'express'
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
    choices: ['knex', 'sequelize', 'mongoose', 'native'],
    default: 'knex'
  },
  {
    type: 'list',
    name: 'auth',
    message: 'Type of authentication: ',
    choices: ['jwt', 'session cookies'],
    default: 'jwt'
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