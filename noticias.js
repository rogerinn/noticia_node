var http = require('http');

var server = http.createServer(function (req, res) {

    var categoria = req.url;

    if (categoria == '/tecnologia') {
        res.end("<html><body>Portal de Tecnologia</body></html>")
    } else {
        res.end("<html><body>Portal de noticias</body></html>")
    }


});

server.listen(3000);