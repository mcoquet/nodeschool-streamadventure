var trumpet = require("trumpet")
var through = require("through")
var tr = trumpet();

var th = through(function(data){
	this.queue(data.toString().toUpperCase())		  
},function(){
	this.queue(null);
}
)
var s = tr.createStream(".loud");
s.pipe(th).pipe(s)

process.stdin.pipe(tr).pipe(process.stdout);

