const http = require('http');
const fs = require('fs');
const path = require('path');
const file = require('./file');
const router = require('./router');

let user = {};
const getJsonString = (obj) => JSON.stringify(obj, null, '  ');

const server = http.createServer();

router.get('/about', function(request, response) {
    response.write('About Me');
});
router.get('/user', function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write(getJsonString(user));
});
router.post('/user', function(request, response) {
    user = request.body;
    response.write('Saved');
});
router.get('/time', function(request, response) {
    response.write(new Date().toString());
});

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

        if (request.url === '/') {
            request.url = '/index.html';
        }

        if (!file.fileHandler(request, response) && !router.routeHandler(request, response)) {
            response.writeHead(404);
            response.write('Not Found');
        }

        response.end();
    });
})

server.listen(8080);
