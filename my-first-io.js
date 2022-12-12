//Go ahead and execute it in strict mode as to alleviate using undeclared variables
'use strict'

//Declare the global module 'fs'
var fs = require('fs')

//Since were reading a file that has an arguement use process.argv again like the last one
var contents = fs.readFileSync(process.argv[2])

//Split the array into substrings
var lines = contents.toString().split('\n').length - 1

//Print out the results of 'lines'
console.log(lines)
