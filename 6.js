var concat = require("concat-stream");
var reverse = require("reverse-string")

process.stdin.pipe(concat(function(total){
	console.log(reverse(total.toString()));
}))
