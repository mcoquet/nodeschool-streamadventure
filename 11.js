var duplexer = require("duplexer")
var spawn = require("child_process").spawn;

module.exports = function(cmd,args){
	var proc = spawn(cmd,args);
	var x = duplexer(proc.stdin,proc.stdout);
	return x;
}
