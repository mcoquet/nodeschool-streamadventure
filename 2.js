var fs = require("fs")
var filepath = process.argv[2];

var fileStream = fs.createReadStream(filepath,{encoding:"utf-8"});

fileStream.pipe(process.stdout)

