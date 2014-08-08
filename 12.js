var duplexer = require("duplexer")
var through = require("through")


module.exports = function(counter)
{
		  var obj = {}; 

			function data (d){
					obj[d.country] = (obj[d.country] || 0) + 1;
				}
				

			function end(){
				counter.setCounts(obj);
				this.queue(null);	
			}
		  return duplexer(through(data,end),counter);
}
