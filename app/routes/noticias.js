module.exports = function (aplication) {

    aplication.get('/noticias', function (req, res) {
        var connection = aplication.config.dbConnection();
        var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function (erro, resultado) {
            res.render("noticias/noticias", { noticias: resultado });
        });
    });
};