var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express()

app.listen(3000, function() {
  console.log('This is Irsyad reporting for duty!!');
});

app.set('view engine', 'ejs');

var data = [
  {name: 'Irsyad', score: 100},
  {name: 'Kuan Yu', score: 5}
]

app.get("/data", function(req, res) {
  res.json(data);
});
