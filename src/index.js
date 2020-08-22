const http = require('http');

const user = {
    name: 'Ranjani',
    age: 25
};
const getJsonString = (obj) => JSON.stringify(obj, null, '  ');

const server = http.createServer(function(request, response) {
    console.log('Handling', request.method, request.url);
    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write('<h1>Hello</h1>');
    } else if (request.url === '/about') {
        response.write('About Me');
    } else if (request.url === '/user') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.write(getJsonString(user));
    } else {
        response.writeHead(404);
        response.write('Not Found');
    }
    response.end();
});

server.listen(8080);
