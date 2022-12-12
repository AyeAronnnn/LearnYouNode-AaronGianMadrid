//Go ahead and execute it in strict mode as to alleviate using undeclared variables
'use strict'

//We need some sort of method such as http.get for handling 2 arguments like our URL and the callback
var http = require('http')
//Declare an event handler to hadnle data and error responses
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})
.on('error', console.error)