require('dotenv').config();
const { DATABASE_URL } = process.env;

module.exports = {
  "development":{
    "username":"postgres",
    "password":"1234",
    "database":"development",
    "host": "127.0.0.1",
    "dialect":"postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "url": DATABASE_URL,
    "dialect": "postgres",
    "dialectOptions":{
      "ssl":{
        "required": true,
        "rejectUnauthorized": false
      }
    }
  }
}
// "development": {
//   "url": DATABASE_URL,
//   "dialect": "postgres"
// }