var path = require('path');

var extractFilePath = function (url) {
    var filePath;
    var fileName = 'index.html';
    var type='html';

    if (url.length > 1) {
        fileName = url.substring(1);
        type = url.substring(url.lastIndexOf('.')+1);
    }
    console.log('the file name is: ' + fileName);

    filePath = path.resolve(__dirname, 'app', fileName);

    return [filePath, type];
};

module.exports = extractFilePath;
