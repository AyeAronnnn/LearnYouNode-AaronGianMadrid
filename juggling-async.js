//Go ahead and execute it in strict mode as to alleviate using undeclared variables
'use strict'

//Use the bl and http modules from before
const http = require('http')
const bl = require('bl')

//Declare the variables
const results = []
let count = 0

//For Loop Function to print out the results
function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

//Function httpGe that revolves around the index parameter
function httpGet (index) {

  //Skip the first 2 arguements just like previous excercises 
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      //Put the data in a string and start from count variable declared
      results[index] = data.toString()
      count++

      //Print results at the 3rd count
      if (count === 3) {
        printResults()
      }
    }))
  })
}

//For Loop 
for (let i = 0; i < 3; i++) {
  httpGet(i)
}