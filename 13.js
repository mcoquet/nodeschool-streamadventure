var combine = require("stream-combiner");
var through = require("through");
var split = require("split");
var zlib = require("zlib")

module.exports = function(){
		  
		  var currentGenre = false;

		  function data(d){
				if (d != "") 
				{
					var o = JSON.parse(d);

					if (o.type=="genre"){
						if (currentGenre)
						{
							this.queue(JSON.stringify(currentGenre)+"\n");
						}
						currentGenre = o;
						delete currentGenre.type
						currentGenre.books = [];
					}
					else
					{
						currentGenre.books.push(o.name);
					}
				}
		  }


		  function end(){
				this.queue(JSON.stringify(currentGenre)+"\n");
				this.queue(null);
		  }


		  var agregate = through(data,end);
		  return combine(split(),agregate,zlib.createGzip());

}
