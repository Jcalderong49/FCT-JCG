const mysql = require('mysql');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'bbdd-calderongarrotejavier'
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;
