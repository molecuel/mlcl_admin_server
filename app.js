var express = require('express');
var app = express();

var oneDay = 86400000;

app.use(express.static(__dirname + '/bower_components/mlcl_admin', { maxAge: oneDay }));
var server = app.listen(process.env.PORT || 3000, '::', function(err) {
  console.log('MOLECUEL admin listening on port %d', server.address().port);
});
