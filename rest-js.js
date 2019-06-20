var express = require('express');
var app = express();

// var redis = require("redis"),
//     client = redis.createClient();

// client.on("error", function (err) {
//     console.log("Error " + err);
// });

function readFile() {
    var fs = require('fs');

    var contents = fs.readFileSync('./file.txt', 'utf8');
    return contents;
}

app.get('/helloworld', function (req, res) {
  res.send('Hello World!');
});

app.get('/readfile', function (req, res) {
    // fs.readFile('DATA', 'utf8', function(err, contents) {
    //     //console.log(contents);
    // });
    var contents = readFile();

    res.send('File read!');
});

// app.get('/redis', function (req, res) {
//     client.set("foo", "hello world", redis.print);

//     res.send('Redis!');
// });

// app.get('/storefile', function (req, res) {
//     var contents = readFile();
//     client.set("file", contents, redis.print);

//     res.send('File stored in Redis!');
// });

app.get('/fibonacci', function (req, res) {
    var i, n = 10000, t1 = 0, t2 = 1, nextTerm;

    for (i = 1; i <= n; ++i)
    {
        // console.log(t1 + "\n");
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }

    res.send('Fibonacci!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});