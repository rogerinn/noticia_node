module.exports = function(){

    this.getNoticias = function(connection, callback){
        connection.query('select * from `portal_noticias`', callback);
    }
    this.getNoticia = function(connection, callback){
        connection.query('select * from `portal_noticias` where idportal_noticias = 2', callback)
    }
    this.salvarNoticia = function(noticia, connection, callback){
        connection.query('INSERT INTO portal_noticias set ?', noticia, callback);
    }
    return this;
}