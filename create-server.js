var http = require('http')

http.createServer(function(req, res){
    res.end("Welcome to the web of jay")
}).listen(9000)