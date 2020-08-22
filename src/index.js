const http = require('http');

const server = http.createServer(function(request, response) {
    if (request.url === '/') {
        response.write('Hello');
    } else if (request.url === '/about') {
        response.write('About Me');
    } else {
        response.write('Not Found');
    }
    response.end();
});

server.listen(8080);
