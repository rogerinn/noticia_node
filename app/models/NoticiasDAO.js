function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('select * from `portal_noticias`', callback);
}

NoticiasDAO.prototype.getNoticia = function (callback) {
    this._connection.query('select * from `portal_noticias` where idportal_noticias = 6', callback)
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.query('INSERT INTO portal_noticias set ?', noticia, callback);
}

module.exports = function () {
    return NoticiasDAO;
}