module.exports = function (aplication) {

    aplication.get('/noticia', function (req, res) {
        var connection = aplication.config.dbConnection();
        var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(function (erro, resultado) {
            res.render("noticias/noticia", { noticia: resultado });
        });
    });
};