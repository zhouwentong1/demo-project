var http = require('http');
var url = require('url');
var path = require('path');

console.log(url.parse('http://localhost/re/re/res/1.txt'));
var s = path.resolve('.');
console.log(path.join(s, 'test', '1.txt'));

var server = http.createServer(function (request, response) {
    if(request.url != "/favicon.icon") {
        console.log(request.method);
        console.log(request.url);
        response.writeHead(200, {'Context-Type': 'text/html'});
        response.end();
    }
});
server.listen('80');
console.log('server is on 80');