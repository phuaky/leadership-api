var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express()

app.listen(3000, function() {
  console.log('Yo yo yo, This is Irsyad reporting for duty!!');
  console.log('Yo Irshyad, KY receive your loud and clear!!!');
});

app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

var score = [
  {name: 'Irsyad', score: 100},
  {name: 'Kuan Yu', score: 500}
]

app.get("/data", function(req, res) {
  res.json(score);
  // res.render('index')
});

app.get('/', function(req, res) {
  res.render('index')
})

app.post('/data', function(req, res) {
  var newScore = {
    name: req.body.name,
    score: req.body.score
  }
  score.push(newScore)
  res.json(newScore)
})

app.delete('/data/:id', function (req, res) {
  score.splice(req.params.id,1)
  res.json({message: 'success'})
})
