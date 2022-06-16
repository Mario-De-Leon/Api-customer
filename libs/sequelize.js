const {Sequelize} = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('../db/models/index');

const options = {
  dialect : config.isProd  ? 'postgres' : 'mysql',
  logging: config.isProd ? false : true,
}

if (config.isProd){
    options.dialectOptions = {
    ssl :{
      rejectUnauthorized: false
    }
  }
}
const sequelize = new Sequelize(config.isProd ? config.dbUrlProduct : config.dbUrlDev, options);

setupModels(sequelize)

module.exports = sequelize
