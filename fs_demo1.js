var fs = require('fs');

/**
 * 读取文件，异步读取
 */
fs.readFile('1.xlsx',function (err, data) {
    if (err) {
        console.log(err);
    } else {
        var s = data.toString('utf-8');
        console.log("success");
        console.log(data.length);
    }
});

/**
 * 将文件写入，异步写入
 * @type {string}
 */
var data = "hello world";
fs.writeFile('test.txt', data, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

/**
 * 通过 stat 获取文件相关的信息
 */
fs.stat('test.txt', function (err, stat) {
    if(err) {
        console.log(err);
    } else {
        console.log(stat.isFile());
        console.log(stat.isDirectory());
        if(stat.isFile()) {
            console.log(stat.size);
            console.log(stat.birthtime);
            console.log(stat.mtime);
        }
    }
});