const mysql = require('mysql');
const connMySql = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'rogerio0089',
        database: 'portal_noticia'
    });
}

module.exports = function () {
    return connMySql;
}