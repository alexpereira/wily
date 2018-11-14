# wily

[![PRs Welcome][prs-badge]][prs]
[![MIT License][license-badge]][license]

Build Node.js APIs from the command line

## Getting Started

Install **wily** globally: ``` npm install -g wily ```

Once installed, a new API can be created by calling ```wily init```, like so:

![wily gif](https://media.giphy.com/media/WS4y6MqzqEWcOLxJ88/giphy.gif)

### ✨ Supported & ~~in-progress~~ Features

| API Architecture  | Framework | Database  | ORM | ODM | Authentication | Testing 
| :-------------: | :-------------: | :-------------: | :-------------: | :-------------: | :-------------: | :-------------:
| [REST](https://www.w3.org/2001/sw/wiki/REST)  | [Express](https://www.npmjs.com/package/express)  | [MySQL](https://www.npmjs.com/package/mysql) | [Knex.js](https://www.npmjs.com/package/knex) | ~~[Mongoose](https://www.npmjs.com/package/mongoose)~~ | [JWT](https://www.npmjs.com/package/jsonwebtoken) | [Mocha](https://www.npmjs.com/package/mocha)
| ~~[GraphQL](https://graphql.org/)~~  | [hapi](https://www.npmjs.com/package/hapi) | ~~[MongoDB](https://www.npmjs.com/package/mongodb)~~  | ~~[Sequelize](https://www.npmjs.com/package/sequelize)~~ | ~~[MongoDB Driver](https://mongodb.github.io/node-mongodb-native)~~ | ~~[express-session](https://www.npmjs.com/package/express-session)~~ <br> ~~[yar (Hapi)](https://www.npmjs.com/package/yar)~~ | [Jest](https://www.npmjs.com/package/jest)

#### 📦 Built-in Packages

* [Boom](https://www.npmjs.com/package/boom)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [SuperTest](https://www.npmjs.com/package/supertest)

#### 🤓 Wily Tech

* [TypeScript](https://www.npmjs.com/package/typescript)
* [oclif](https://www.npmjs.com/package/oclif)
* [Inquirer.js](https://www.npmjs.com/package/inquirer)


[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/visionmedia/supertest/blob/master/LICENSE