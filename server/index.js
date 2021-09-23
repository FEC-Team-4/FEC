const express = require('express');
const axios = require('axios')
const path = require('path');
const router = require('./router.js')
const compression = require('compression')

const app = express();

app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

const port = 3000;

app.use('/', router);

app.listen(port, (err) => {
  if (err) {
    console.log("Error starting server");
  }
  console.log('Server starting on port', port)
})