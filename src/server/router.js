const routes = {
    GET: {},
    POST: {}
};

module.exports.routeHandler = function(request, response) {
    const handler = routes[request.method][request.url]
    if (handler) {
        handler(request, response);
        return true;
    }
    return false;
}


module.exports.get = function(route, handler) {
    routes.GET[route] = handler;
}

module.exports.post = function(route, handler) {
    routes.POST[route] = handler;
}
