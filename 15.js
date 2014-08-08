var crypto = require("crypto")
var cypher = process.argv[2]
var pass = process.argv[3]

var tar = require("tar")
var zlib = require("zlib")
var Tarparser = tar.Parse();

var through = require("through");


Tarparser.on("entry",function(e){
	var shasum = crypto.createHash("md5");	
	if (e.type == "File"){
	e.on("data",function(d){
		shasum.update(d);
	})
	e.on("end",function(){
		console.log(shasum.digest("hex"),e.path)		
	})
	}
})

process.stdin.pipe(crypto.createDecipher(cypher,pass)).pipe(zlib.createGunzip()).pipe(Tarparser)
