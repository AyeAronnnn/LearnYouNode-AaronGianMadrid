//Go ahead and execute it in strict mode as to alleviate using undeclared variables
'use strict'

//Declare http and map variables
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  //Check POST - Request Method
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  //Pipe the request to 'through2-map' 
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  }
  //Pipe the result to response
  )).pipe(res)
})

//Listener Method for the port
server.listen(Number(process.argv[2]))