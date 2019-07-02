module.exports = function (aplication) {
    aplication.get('/formulario_inclusao_noticia', function (req, res) {
        res.render("admin/form_add_noticia");
    });
    aplication.post('/noticias/salvar', function (req, res) {
        var noticia = req.body;
        var connection = aplication.config.dbConnection();
        var noticiasModel = new aplication.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function (erro, resultado) {
            res.redirect('/noticias')
        })
    });
};
