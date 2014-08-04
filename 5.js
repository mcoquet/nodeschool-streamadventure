var through = require("through")
var split = require("split")
var even = false;
var upper = through(function(buf)
					 { 
							
								buf = buf.toString(); 
								if(even)
								{ 
									buf = buf.toUpperCase(); 
								} 
								else{
									buf = buf.toLowerCase()
								}
								this.queue(buf+"\n");
								//console.log(buf)
								even = !even; 
					 });

process.stdin.pipe(split()).pipe(upper).pipe(process.stdout);


