const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.DEV_DB_NAME, process.env.DEV_DB_USER,process.env.DEV_DB_PASSWORD, {
  host: process.env.DEV_DB_HOST,
  port:'3306',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});

db.authenticate()
  .then(() => {
    console.log('Se ah realizado la conexiona DB correctamente ...');
  })
  .catch(err => {
    console.log('No pudo realizarse la conexión ...')
  })
module.exports = db;
