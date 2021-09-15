const express = require('express');
const axios = require('axios')
const path = require('path');

const app = express();
const apiKey = require('./../token/token.js')

app.use(express.json())
app.use(express.static(path.join(__dirname, '/../client/dist')));

const port = 3000;

app.post('/reviews', (req, res) => {
  const productId = req.body.productId;
  const count = req.body.count;
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews', {params: {product_id: productId, count: count}, headers: {Authorization: apiKey }})
    .then((result) => res.status(200).send(result.data))
    .catch(err => console.log(err))
})


app.listen(port, (err) => {
  if (err) {
    console.log("Error starting server");
  }
  console.log('Server starting on port', port)
})