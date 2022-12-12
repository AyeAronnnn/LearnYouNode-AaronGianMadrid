//Go ahead and execute it in strict mode as to alleviate using undeclared variables
'use strict'

//Declare http and fs vairables
const http = require('http')
const fs = require('fs')

//Declare server method to utilize the callback function below
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  //This will assist in streaming the file to memory
  fs.createReadStream(process.argv[3]).pipe(res)
})

//Listener Method for the port
server.listen(Number(process.argv[2]))