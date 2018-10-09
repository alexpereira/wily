export = `
o----------MYSQL var mysql = require('mysql')
o--------MONGODB var mongodb = require('mongodb')
o---------COMMON 
o----------MYSQL var database = mysql.connect(poolThingy)
o--------MONGODB var database = mongo.connect('mongodUrlThingy')
o---------COMMON 
o---------COMMON module.exports = database
`