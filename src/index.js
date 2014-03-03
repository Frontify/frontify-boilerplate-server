var restify = require('restify');
var fs = require('fs');
var file = __dirname + '/../api.json';

var server = restify.createServer();

// read json configuration
fs.readFile(file, 'utf8', function (err, data) {
    data = JSON.parse(data);
    data.forEach(function(item) { 
        switch (item.method) {
            case 'GET':
                server.get(item.route, require(item.file).process);
                break;
            case 'POST':
                server.post(item.route, require(item.file).process);
                break;
            case 'DELETE':
                server.del(item.route, require(item.file).process);
                break;
            case 'PUT':
                server.put(item.route, require(item.file).process);
                break;
        }
    });
});

server.listen(3000, function() {
    console.log('%s listening at %s', server.name, server.url);
});