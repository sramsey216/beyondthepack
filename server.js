var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Hostel = require('./api/models/hostelModel'),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/hostelRoutes');
routes(app);

// Basic error handling
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
  res.status(500).send({error: res.error});
});

app.listen(port);

console.log('Beyond The Pack REST API server started on: ' + port);