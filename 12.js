var duplexer = require("duplexer")
var through = require("through")


module.exports = function(counter)
{
		  var obj = {}; 

			function data (d){
				var index = d.country || false
				if (index){
					if (!obj[index]) { obj[index] = 0;}
					obj[index]++;
				}


				
			}

			function end(){
				counter.setCounts(obj);
				this.queue(null);	
			}
		  return duplexer(through(data,end),counter);
}
