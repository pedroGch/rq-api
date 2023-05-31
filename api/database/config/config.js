require('dotenv').config();
const { DATABASE_URL } = process.env;

module.exports = {
  "development":{
    "username":"root",
    "password":"",
    "database":"rq_api",
    "host": "127.0.0.1",
    "dialect":"mysql"
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
