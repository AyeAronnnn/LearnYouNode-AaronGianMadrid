//Go ahead and execute it in strict mode as to alleviate using undeclared variables
'use strict'

//Declare http as well as buffer list module
const http = require('http')
const bl = require('bl')

//use the same get request from a previous homework
//Use the stream piped hint from the hints
http.get(process.argv[2], function (response) {
  //Pipe the stream to the bl module with the arguements err and data
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    //I believe this returns the output as an array?
    console.log(data.length)
    console.log(data)
  }))
})