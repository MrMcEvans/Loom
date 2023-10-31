require('dotenv').config();

const Sequelize = require('sequelize');


const sequelize = process.env.JAWSDB_MARIA_URL?
    new Sequelize(process.env.JAWSDB_MARIA_URL) :
  new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      dialect: 'mariadb',
      dialectOptions: {
        decimalNumbers: true,
      },
      storage: './session.mariadb',
    });

module.exports = sequelize;
