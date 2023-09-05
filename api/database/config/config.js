require('dotenv').config();

module.exports = {
  "development":{
    "username":process.env.USERMANE,
    "password":"",
    "database":process.env.DATABASE,
    "host": process.env.HOST,
    "dialect":process.env.DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "url": process.env.DATABASE_URL || "",
    "dialect": "postgres",
    "dialectOptions":{
      "ssl":{
        "required": true,
        "rejectUnauthorized": false
      }
    }
  }
}
