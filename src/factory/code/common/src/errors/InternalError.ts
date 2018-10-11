export = `
o---------COMMON module.exports = class InternalError {
o---------COMMON   constructor(status) {
o---------COMMON     this.message = 'INTERNAL ERROR'
o---------COMMON     this.status = status || 500
o---------COMMON   }
o---------COMMON }
`