const router = require('express').Router()
const axios = require('axios')
const apiKey = require('./../token/token.js')


//Questions
router.post('/questions', (req, res) => {
  const productId = req.body.productId;
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions', {params: {product_id: productId}, headers: {Authorization: apiKey }})
    .then((result) => res.status(200).send(result.data))
    .catch(err => console.log(err))
})

//reviews
router.post('/reviews', (req, res) => {
  const productId = req.body.productId;
  const count = req.body.count;
  const sort = req.body.sort;
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews', {params: {product_id: productId, count: count, sort: sort}, headers: {Authorization: apiKey }})
    .then((result) => res.status(200).send(result.data))
    .catch(err => console.log(err))
})
//reviews metadata
router.post('/reviews/meta', (req, res) => {
  const productId = req.body.productId;
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta', {params: {product_id: productId}, headers: {Authorization: apiKey }})
    .then((result) => res.status(200).send(result.data))
    .catch(err => console.log(err))
})
//reviews helpful
router.put('/helpful', (req, res) => {
  const productId = req.body.productId;
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/${productId}/helpful`, {}, {headers: {Authorization: apiKey }})
    .then(() => res.status(200).send('helpful submitted'))
    .catch(err => res.status(404).send(err))
})
// submit new review
router.post('/submitreview', (req, res) => {
  const productId = req.body.product_id
  const rating = req.body.rating
  const summary = req.body.summary
  const body = req.body.body
  const recommend = req.body.recommend
  const name = req.body.name
  const email = req.body.email
  const characteristics = req.body.characteristics
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews', {
    product_id: productId,
    rating: rating,
    summary: summary,
    body: body,
    recommend: recommend,
    name: name,
    email: email,
    photos: [],
    characteristics: {},
  }, {headers: {Authorization: apiKey }})
    .then(() => res.status(200).send('submitted'))
    .catch(() => res.status(404).send('error'))
})

//

module.exports = router
