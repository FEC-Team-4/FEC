const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

const port = 3000;

app.listen(port, (err) => {
  if (err) {
    console.log("Error starting server");
  }
  console.log('Server starting on port', port)
})