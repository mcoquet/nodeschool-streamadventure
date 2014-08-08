var crypto = require("crypto")
var pass = process.argv[2]

process.stdin.pipe(crypto.createDecipher("aes256",pass)).pipe(process.stdout)
