const http = require('http');

const fs = require('fs');

// let path = require('path');
const extract = require('./extract');

const mime = require('mime');

let handleError = function (err, res) {

    res.writeHead(404);
    
    fs.readFile(extract('/error.html')[0], function (err, data) {
        res.end(data);
    });
};

let server = http.createServer(function (req, res) {
    console.log('Responding to a Request');

    let data = extract(req.url);
    let filePath = data[0];
    let type = data[1];

    fs.readFile(filePath, function (err, data) {
        if (err) {
            handleError(err, res);
            return;
        }

        res.setHeader('Content-Type', mime.getType(type));
        res.end(data);
    })
});

server.listen(3000);