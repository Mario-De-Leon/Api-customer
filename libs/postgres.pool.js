const { Pool } = require('pg');

const { config } = require('./../config/config');
let URI = ''
if (config.isProd) {
  URI = config.dbUrlProduct;
} else {
  URI = config.dbUrlDev
}




const pool = new Pool({ connectionString: URI });

module.exports = pool;
