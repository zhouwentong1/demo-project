var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');

// process 应该包含标准输入、标准输出的意思、如果没有标准输入，就默认为根目录
var root = path.resolve(process.argv[2] || '.');
console.log("static path is : " + root);
var server = http.createServer(function (request, response) {
    var requestUrl = request.url;
    var pathname = url.parse(requestUrl).pathname;
    var s = path.join(root, pathname);
    fs.stat(s, function (err, data) {
        // 如果没有错误并且是一个文件的话
        if (!err && data.isFile()) {
            console.log('200' + request.url);
            response.writeHead(200);
            // 将流重定向到 response 里面去
            fs.createReadStream(s).pipe(response);
        } else if (!err && data.isDirectory() && !__filename.indexOf("idea")) {
            var filePath = s.substr(0, s.length - 1);
            walk(filePath, response);
        } else {
            console.error(err);
        }
    })

});
server.listen('80');

console.log("server is on~");
fileList = [];
function walk(path, response) {
    var fs = require('fs');
    var dirList = fs.readdirSync(path);
    dirList.forEach(function (item) {
        if (fs.statSync(path + '\\' + item).isDirectory()) {
            walk(path + '\\' + item);
        } else {
            fs.createReadStream(path + '\\' + item).pipe(response);
        }
    });
}