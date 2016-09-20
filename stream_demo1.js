var fs = require('fs');

var readStream = fs.createReadStream('1.jpg');

// 在Node.js中，流也是一个对象，我们只需要响应流的事件就可以了：
// data事件表示流的数据已经可以读取了，
// end事件表示这个流已经到末尾了，没有数据可以读取了，
// error事件表示出错了。

readStream.on('data', function (chunk) {
    console.log('DATA:');
    console.log(chunk)
});
console.log("======================");
readStream.on('end', function (chunk) {
    console.log('DATA1:');
    console.log(chunk);
});