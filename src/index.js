const http = require('http');

let user = {};
const getJsonString = (obj) => JSON.stringify(obj, null, '  ');

const server = http.createServer();
const routes = {
    '/': function(request, response) {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write('<h1>Hello</h1>');
    },
    '/about': function(request, response) {
        response.write('About Me');
    },
    '/user': function(request, response) {
        if (request.method === 'GET') {
            response.writeHead(200, { 'Content-Type': 'application/json' })
            response.write(getJsonString(user));
        } else if (request.method === 'POST') {
            user = request.body;
            response.write('Saved');
        }
    },
    '/time': function(request, response) {
        response.write(new Date().toString());
    },
    404: function(request, response) {
        response.writeHead(404);
        response.write('Not Found');
    }
};

server.on('request', function(request, response) {
    console.log('Handling', request.method, request.url);

    let body = [];
    request.on('data', function(chunk) {
        body.push(chunk);
    });
    request.on('end', function() {
        body = Buffer.concat(body).toString();
        body = body.length ? JSON.parse(body) : {};
        request.body = body;

        let handler = routes[request.url];
        handler = handler || routes[404];

        handler(request, response);

        response.end();
    });
})

server.listen(8080);
