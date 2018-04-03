const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist/'));

// views is directory for all template files
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/dist/index.html');
  });

app.listen(process.env.PORT || 5000);

  