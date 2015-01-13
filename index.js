var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Node!')
})

var server = app.listen(23333, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Saying hello to Node at http://%s:%s', host, port)

})