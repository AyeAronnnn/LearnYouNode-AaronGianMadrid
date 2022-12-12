//Go ahead and execute it in strict mode as to alleviate using undeclared variables
'use strict'

//Declare the global module 'fs'
var fs = require('fs')

//This will be the file to read
var file = process.argv[2]

//This is the callback function that passes two arguments (err, contents)
fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  
  //Use this from previous excercise to split strings
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})