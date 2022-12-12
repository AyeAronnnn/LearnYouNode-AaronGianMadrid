//Go ahead and execute it in strict mode as to alleviate using undeclared variables
'use strict'

//Declare the net module as stated within the hints
const net = require('net')

//This zeroFill function determines if a zero is necessary in front of the printed results
function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

//This now function will help format the date output
function now () {
  const d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

//Declare server method for createServer callback
const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

//Listener Method for the port
server.listen(Number(process.argv[2]))