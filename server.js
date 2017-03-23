const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static('public'));

app.get('/', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port, function(){
  console.log('Listening on port', port)
});
