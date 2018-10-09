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
    from: require('../code/common/indexFile'),
    to: '/index.js'
  },
  {
    from: require('../code/common/app'),
    to: '/src/app.js'
  },
  {
    from: require('../code/rest/controllers/user'),
    to: '/src/controllers/user.js'
  },
  {
    from: require('../code/rest/models/user'),
    to: '/src/models/user.js'
  },
  {
    from: require('../code/rest/routes/user'),
    to: '/src/routes/user.js'
  },
  {
    from: require('../code/common/validation/user'),
    to: '/src/validation/user.js'
  },
  {
    from: require('../code/common/middleware/authentication'),
    to: '/src/middleware/authentication.js'
  },
  {
    from: require('../code/common/utils/database'),
    to: '/src/utils/database.js'
  },
  {
    from: require('../code/common/utils/logger'),
    to: '/src/utils/logger.js'
  }
]