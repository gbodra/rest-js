var express = require('express');
var app = express();

app.get('/helloworld', function (req, res) {
  res.send('Hello World!');
});


app.get('/readfile', function (req, res) {
    var fs = require('fs');

    // fs.readFile('DATA', 'utf8', function(err, contents) {
    //     //console.log(contents);
    // });

    var contents = fs.readFileSync('./file.txt', 'utf8');
    //console.log(contents);

    res.send('File read!');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});