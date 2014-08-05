var through = require("through")
var http = require("http")

var upper = through(function(b){ this.queue(b.toString().toUpperCase());});

var server = http.createServer(function(req,res){
	if (req.method != 'POST') { res.end("not post"); }
	req.pipe(upper).pipe(res);
});


server.listen(process.argv[2])
