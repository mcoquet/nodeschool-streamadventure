var through = require("through")

var upper = through(function(b){ this.queue(b.toString().toUpperCase());});

process.stdin.pipe(upper).pipe(process.stdout)


