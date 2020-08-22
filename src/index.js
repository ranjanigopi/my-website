const http = require('http');

const server = http.createServer(function(request, response) {
    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write('<h1>Hello</h1>');
    } else if (request.url === '/about') {
        response.write('About Me');
    } else {
        response.writeHead(404);
        response.write('Not Found');
    }
    response.end();
});

server.listen(8080);
