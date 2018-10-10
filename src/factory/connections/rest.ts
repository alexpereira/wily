export = [
  {
    from: require('../code/common/README'),
    to: '/README.md'
  },
  {
    from: require('../code/common/package'),
    to: '/package.json'
  },
  {
    from: require('../code/common/dotenv'),
    to: '/.env'
  },
  {
    from: require('../code/common/server'),
    to: '/server.js'
  },
  {
    from: require('../code/common/src/app'),
    to: '/src/app.js'
  },
  {
    from: require('../code/rest/src/controllers/user'),
    to: '/src/controllers/user.js'
  },
  {
    from: require('../code/rest/src/models/user'),
    to: '/src/models/user.js'
  },
  {
    from: require('../code/rest/src/routes/user'),
    to: '/src/routes/user.js'
  },
  {
    from: require('../code/common/src/validation/user'),
    to: '/src/validation/user.js'
  },
  {
    from: require('../code/common/src/middleware/authentication'),
    to: '/src/middleware/authentication.js'
  },
  {
    from: require('../code/common/src/utils/database'),
    to: '/src/utils/database.js'
  },
  {
    from: require('../code/common/src/errors/InternalError'),
    to: '/src/errors/InternalError.js'
  }
]