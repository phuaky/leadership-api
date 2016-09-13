var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express()

app.listen(3000, function() {
  console.log('Yo yo yo, This is Irsyad reporting for duty!!');
});

app.set('view engine', 'ejs');

var staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

var data = [
  {name: 'Irsyad', score: 100},
  {name: 'Kuan Yu', score: 500}
]

app.get("/data", function(req, res) {
  res.json(data);
  // res.render('index')
});

app.get('/', function(req, res) {
  res.render('index')
})
