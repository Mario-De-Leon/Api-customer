const { config } = require('./../config/config');

module.exports = {
  development: {
    url: config.dbUrlDev,
    dialect: 'mysql',
  },
  production: {
    url: config.dbUrlProduct,
    dialect: 'postgres',
    ssl:{
      rejectUnauthorized: false
    }
  }
}
