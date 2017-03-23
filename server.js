var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static('public'));

app.get('/', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port, function(){
  console.log('Listening on port', port)
});
