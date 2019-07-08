var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('Responding to a Request');
    res.end('<h1>HELLO WORLD</h1>');
});

server.listen(3000);