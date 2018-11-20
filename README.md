# wily

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/99ec3315135344859ba212480b3c6d6e)](https://app.codacy.com/app/alex.pereira/wily?utm_source=github.com&utm_medium=referral&utm_content=alexpereira/wily&utm_campaign=Badge_Grade_Dashboard)

[![Build Status][travis-badge]][travis]
[![PRs Welcome][prs-badge]][prs]
[![MIT License][license-badge]][license]

Build Node.js APIs from the command line

## Getting Started

Install **wily** globally: ``` npm install -g wily ```

Once installed, a new API can be created by calling ```wily init```, like so:

![wily gif](https://media.giphy.com/media/WS4y6MqzqEWcOLxJ88/giphy.gif)

### ✨ Supported & ~~in-progress~~ Features

| API Architecture  | Framework | Database  | ORM | ODM | Authentication | Validation | Testing 
| :-------------: | :-------------: | :-------------: | :-------------: | :-------------: | :-------------: | :-------------: | :-------------:
| [REST](https://www.w3.org/2001/sw/wiki/REST)  | [Express](https://www.npmjs.com/package/express)  | [MySQL](https://www.npmjs.com/package/mysql) | [Knex.js](https://www.npmjs.com/package/knex) | ~~[Mongoose](https://www.npmjs.com/package/mongoose)~~ | [JWT](https://www.npmjs.com/package/jsonwebtoken) | [Joi](https://www.npmjs.com/package/joi) | [Mocha](https://www.npmjs.com/package/mocha)
| ~~[GraphQL](https://graphql.org/)~~  | [hapi](https://www.npmjs.com/package/hapi) | ~~[MongoDB](https://www.npmjs.com/package/mongodb)~~  | ~~[Sequelize](https://www.npmjs.com/package/sequelize)~~ | ~~[MongoDB Driver](https://mongodb.github.io/node-mongodb-native)~~ | ~~[express-session](https://www.npmjs.com/package/express-session)~~ <br> ~~[yar (Hapi)](https://www.npmjs.com/package/yar)~~ | ~~[Validator](https://www.npmjs.com/package/validator)~~ | [Jest](https://www.npmjs.com/package/jest)

#### 📦 Built-in Packages

* [Boom](https://www.npmjs.com/package/boom)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [SuperTest](https://www.npmjs.com/package/supertest)

#### 🤓 Wily Tech

* [TypeScript](https://www.npmjs.com/package/typescript)
* [oclif](https://www.npmjs.com/package/oclif)
* [Inquirer.js](https://www.npmjs.com/package/inquirer)

[travis-badge]: https://travis-ci.com/alexpereira/wily.svg?branch=master
[travis]: https://travis-ci.com/alexpereira/wily
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/alexpereira/wily/blob/master/LICENSE

## Development (Contribute!)

If you're interested in contributing to this project, then THANK YOU! I appreciate your interest :) You can contribute to this project by working on any of the [open issues](https://github.com/alexpereira/wily/issues). You can also see which issues are not in progress on the [development](https://github.com/alexpereira/wily/projects/1) board.

Lastly, I am here to help. Please reach out with any questions. I appreciate all contributions no matter how big or small.

#### Getting Started

- Fork & clone this project
- Next, you will need to [Install TypeScript](https://www.typescriptlang.org/)
- That's it! Now you can compile this project in watch-mode by running ```tsc -w```

#### Testing your contributions

- Run ```cp tests/apis/.env.sample tests/apis/.env``` to create a copy of the dotenv sample file for tests
- Fill out the newly created dotenv file with your own values & credentials (e.g. database hosts, users and passwords)
- Run ```npm test```

NOTE: Do not modify ```tests/apis/.env.sample``` as it can expose your personal credentials if you include it in your commits

#### Susgested reads:

- [Your first open source contribution: a step-by-step technical guide](https://medium.com/@jenweber/your-first-open-source-contribution-a-step-by-step-technical-guide-d3aca55cc5a6)
- [Visual Studio Code TypeScript Development](https://code.visualstudio.com/docs/languages/typescript)
