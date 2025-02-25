const Sequelize = require('sequelize');
require('dotenv').config();
const DB_NAME = 'travel_db';

// let sequelize = process.env.JAWSDB_URL;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: process.env.DB_HOST,
//       dialect: 'mysql',
//       port: 3306,
//     },
//   );
// }

const sequelize = process.env.JAWSDB_URL
	? new Sequelize(process.env.JAWSDB_URL)
	: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, 
    {
			host: process.env.DB_HOST,
			dialect: 'mysql',
			port: 3306,
	  });

module.exports = sequelize;


