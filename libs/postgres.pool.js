const { Pool } = require('pg');

const { config } = require('./../config/config');

const options = {}

if (config.isProd) {
  options.connectionString = config.dbUrlProduct;
  options.ssl = {
    rejectUnauthorized : false
  }
} else {
  options.connectionString =  config.dbUrlDev
}

const pool = new Pool(options);

module.exports = pool;
