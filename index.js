//
// OW2 Play API mock
//
// Christophe Hamerling
// @chamerling
//
var express = require('express')
  , app = express();
  
var path = '/play/api/v1';
var host = 'localhost';
var port = 3333;
var me = 'http://' + host + ':' + port + path;

var data = require('./data');

var _path = function(segment) {
  return path + segment;
}

var bearer = function(req, res, next) {
  console.log('Header auth', req.headers.authorization);
  if (!req.headers.authorization) {
    res.send(403);
  }
}
//app.use(bearer);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get('/', function(req, res) {
  res.redirect(path);
});

app.get(_path(''), function(req, res) {
  res.json({info : 'OW2-Play API mock'});
});

// get all topics
app.get(_path('/topics'), function(req, res) {
  res.json(data.topics);
});

// get a topic
app.get(_path('/topics/:id'), function(req, res) {
  res.json(data.topic);
});

// get all patterns
app.get(_path('/patterns'), function(req, res) {
  res.json(data.patterns);
});

// get a pattern
app.get(_path('/patterns/:id'), function(req, res) {
  res.json(data.pattern);
});

// create a pattern
app.post(_path('/patterns'), function(req, res) {
  // TODO : Check params
  res.json(201, data.pattern);
});

// delete a pattern
app.delete(_path('/patterns/:id'), function(req, res) {
  res.send(204);
});

// get all subscriptions
app.get(_path('/subscriptions'), function(req, res) {
  res.json(data.subscriptions);
});

// get a subscription
app.get(_path('/subscriptions/:id'), function(req, res) {
  res.json(data.subscription);
});

// create a subscription
app.post(_path('/subscriptions'), function(req, res) {
  // TODO : Check input parameters
  res.json(201, data.subscription);
});

// delete a subscription
app.delete(_path('/subscriptions/:id'), function(req, res) {
  res.send(204);
});

// publish
app.post(_path('/publish'), function(req, res) {
  // TODO : Check input data
  res.send(200);
});

app.listen(port, function(err) {
  console.log('OW2-Play API mock is started at', me);
});
