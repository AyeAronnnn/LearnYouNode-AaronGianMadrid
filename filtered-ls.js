//Go ahead and execute it in strict mode as to alleviate using undeclared variables
'use strict'

//Declare the global module 'fs'
var fs = require('fs')

//Declare path module
var path = require('path')

//Declare folder and ext variables to use in the if statement
var folder = process.argv[2]
var ext = '.' + process.argv[3]

//Use asynchronous process 'fs.readir' with arguements (err, files)
fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})