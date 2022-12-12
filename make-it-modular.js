//Go ahead and execute it in strict mode as to alleviate using undeclared variables
'use strict'

//Declare the filterFunction with 'filterFn'
var filterFn = require('./solution_filter.js')

//Declare the dir and filterStr variables to use in function below
var dir = process.argv[2]
var filterStr = process.argv[3]

//Utilize an error handler that can output errors if any issue arises
filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

//Print out results
  list.forEach(function (file) {
    console.log(file)
  })
})