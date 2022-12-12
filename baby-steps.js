//Go ahead and execute it in strict mode as to alleviate using undeclared variables
'use strict'

//Initially start the result as 0
let result = 0

//Utilize the process.argv global object that was given in the hints
//Start at 2 since we dont necessarily need the first 2 objects which is node and path
//Close the for loop with i++
for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

//Print out and display the overall results
console.log(result)