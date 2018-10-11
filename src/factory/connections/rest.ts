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
    from: require('../code/common/tests/routes/user'),
    to: '/tests/routes/user.test.js'
  },
  {
    from: require('../code/common/database/knexfile'),
    to: '/database/knexfile.js'
  },
  {
    from: require('../code/common/database/migrations/initial'),
    to: `/database/migrations/${YYYYMMDDHHMMSS()}_initial.js`
  },
  {
    from: require('../code/common/database/seeds/initial'),
    to: `/database/seeds/initial.js`
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
    from: require('../code/common/src/middleware/verifyUser'),
    to: '/src/middleware/verifyUser.js'
  },
  {
    from: require('../code/common/src/utils/database'),
    to: '/src/utils/database.js'
  },
  {
    from: require('../code/common/src/errors/InternalError'),
    to: '/src/errors/InternalError.js'
  },
  {
    from: require('../code/common/src/errors/BadRequest'),
    to: '/src/errors/BadRequest.js'
  },
  {
    from: require('../code/common/src/errors/Unauthorized'),
    to: '/src/errors/Unauthorized.js'
  }
]

function YYYYMMDDHHMMSS() {
  const date = new Date()

  let YYYY = date.getFullYear()
  let MM: any = (date.getMonth() + 1)
  let DD: any = (date.getDay() + 1)
  let hh: any = date.getHours()
  let mm: any = date.getMinutes()
  let ss: any = date.getSeconds()

  if (MM < 10) MM = '0' + MM
  if (DD < 10) DD = '0' + DD
  if (hh < 10) hh = '0' + hh
  if (mm < 10) mm = '0' + mm
  if (ss < 10) ss = '0' + ss

  return `${YYYY}${MM}${DD}${hh}${mm}${ss}`
}