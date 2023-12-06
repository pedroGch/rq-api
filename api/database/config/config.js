require('dotenv').config();

module.exports = {
  // "development":{
  //   "url": process.env.URL_PROD,
  //   "dialect": process.env.DIALECT_PROD,
  //   "dialectOptions":{
  //     "ssl":{
  //       "required": true,
  //       "rejectUnauthorized": false
  //     }
  //   }
  // },
  "development":{
    "username": "root",
    "password": null,
    "database": "rq_api",
    "host": "127.0.0.1",
    "dialect": "mysql"
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
