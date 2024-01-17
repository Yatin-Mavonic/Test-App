const mysql = require('mysql2');

require('dotenv').config();

if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
  console.error('missing required env variables for database configuration');
} 

const db_config = {
  host: process.env.DB_HOST ,  
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

const Pool = mysql.createPool(db_config);

Pool.getConnection((error) => {
  if (error) {
    console.error('Error Connecting to Database: ' + error);
  } else {
    console.log('Connection to database successfull');
  }
});

module.exports = Pool.promise();



