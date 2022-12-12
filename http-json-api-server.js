//Go ahead and execute it in strict mode as to alleviate using undeclared variables
'use strict'

//Declare http variable
var http = require('http')

//Declare parsetime function that requires the argument 'time'
//and eventually returns the proper time increments
function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

//Declare unixtime function that requires the arguement 'tim'
//and eventually return the unix equivalent of the time increments
function unixtime (time) {
  return { unixtime: time.getTime() }
}

//Decklare server, parsedURL, time variables
var server = http.createServer(function (req, res) {
  //Literally just grabbed this from the hint
  var parsedUrl = new URL(req.url, 'http://example.com')
  var time = new Date(parsedUrl.searchParams.get('iso'))
  let result

  //If statement that outputs the results
  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  //Output
  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})

//Listener Method for the port
server.listen(Number(process.argv[2]))