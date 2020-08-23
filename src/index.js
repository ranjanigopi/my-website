const http = require('http');

let user = {};
const getJsonString = (obj) => JSON.stringify(obj, null, '  ');

const server = http.createServer();

server.on('request', function(request, response) {
    console.log('Handling', request.method, request.url);

    let body = [];
    request.on('data', function(chunk) {
        body.push(chunk);
    });
    request.on('end', function() {
        body = Buffer.concat(body).toString();
        body = body.length ? JSON.parse(body) : {};

        if (request.url === '/') {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.write('<h1>Hello</h1>');
        } else if (request.url === '/about') {
            response.write('About Me');
        } else if (request.url === '/user' && request.method === 'GET') {
            response.writeHead(200, { 'Content-Type': 'application/json' })
            response.write(getJsonString(user));
        } else if (request.url === '/user' && request.method === 'POST') {
            user = body;
            response.write('Saved');
        } else {
            response.writeHead(404);
            response.write('Not Found');
        }
        response.end();
    });
})

server.listen(8080);
