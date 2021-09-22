import React, { useState, useEffect } from 'react'
import {Button, Form, Row, Col, Modal, Radio } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Rating } from 'react-simple-star-rating'
import axios from 'axios'

const style = {
  margin: "10px"
}
const padding = {
  padding: "10px"
}

const AddReview = (props) => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [summary, setSummary] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState('')
  const [recommend, setRecommend] = useState(false)
  const [size, setSize] = useState(null)
  const [width, setWidth] = useState(null)
  const [comfort, setComfort] = useState(null)
  const [quality, setQuality] = useState(null)
  const [length, setLength] = useState(null)
  const [fit, setFit] = useState(null)
  const [image, setImage] = useState([])


  const onSubmit = (e) => {
    e.preventDefault()
    if (review.length > 50 && summary.length < 60) {
      axios.post('/submitreview', {
        product_id: props.productId,
        rating: rating,
        summary: summary,
        body: review,
        recommend: recommend,
        name: name,
        email: email,
        photos: [],
        characteristics: {
          size: size,
          width: width,
          comfort: comfort,
          quality: quality,
          length: length,
          fit: fit
        },
    })
      .then(reset(setEmail))
      .then(reset(setName))
      .then(reset(setSummary))
      .then(reset(setReview))
      .then(reset(setRating))
      .then(setRecommend((prev) => !prev))
      .catch((err) => console.log(err))
    } else {
      alert('Please check character length of summary and review!')
    }
  }

  const reset = (cb) => {
    cb(() => '')
  }
  const addImage = (e) => {
    if (image.length < 5) {
      setImage(prev => [...prev, e.target.files[0]])
    } else {
      alert('image number exceeded')
    }
  }

  return (
    <Form style={padding}>
    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label>Email</Form.Label>
        <Form.Control value={email} onChange={(e)=> setEmail(() => e.target.value)} name="email" type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group as={Col} >
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=> setName(() => e.target.value)} name="name" placeholder="Name" />
      </Form.Group>
    </Row>
    <Row>
      <Form.Group className="mb-3">
        <Form.Label>Give us a summary!</Form.Label>
        <Form.Control value={summary} onChange={(e)=> setSummary(() => e.target.value)} name="summary"  type="title" placeholder=""/>
      </Form.Group>
    </Row>
    <Row>
      <Form.Group className="mb-3" controlId="newReview">
        <Form.Label>Write Your Review Here!</Form.Label>
        <Form.Control minLength={50} maxLength={1000} value={review} onChange={(e)=> setReview(() => e.target.value)} name="review"  as="textarea" rows={3} />
        <p>{Math.abs(review.length - 1000)} characters remaining</p>
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Label>Sizing</Form.Label>
      <Row>
        <Col><Form.Check onChange={(e)=> setSize(() => e.target.value)} inline name="group1" value={1} type="radio" label="A size too small"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setSize(() => e.target.value)} inline name="group1" value={2} type="radio" label="½ a size too small"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setSize(() => e.target.value)} inline name="group1" value={3} type="radio" label="Perfect"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setSize(() => e.target.value)} inline name="group1" value={4} type="radio" label="½ a size too big"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setSize(() => e.target.value)} inline name="group1" value={5} type="radio" label="A size too wide"></Form.Check></Col>
      </Row>
    </Row>
    <Row className="mb-3">
      <Form.Label>Width</Form.Label>
      <Row>
        <Col><Form.Check onChange={(e)=> setWidth(() => e.target.value)} inline name="group2" value={1} type="radio" label="Too narrow"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setWidth(() => e.target.value)} inline name="group2" value={2} type="radio" label="Slightly narrow"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setWidth(() => e.target.value)} inline name="group2" value={3} type="radio" label="Perfect"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setWidth(() => e.target.value)} inline name="group2" value={4} type="radio" label="Slightly wide"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setWidth(() => e.target.value)} inline name="group2" value={5} type="radio" label="Too wide"></Form.Check></Col>
      </Row>
    </Row>
    <Row className="mb-3">
      <Form.Label>Comfort</Form.Label>
      <Row>
        <Col><Form.Check onChange={(e)=> setComfort(() => e.target.value)} inline name="group3" value={1} type="radio" label="Uncomfortable"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setComfort(() => e.target.value)} inline name="group3" value={2} type="radio" label="Slightly uncomfortable"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setComfort(() => e.target.value)} inline name="group3" value={3} type="radio" label="Ok"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setComfort(() => e.target.value)} inline name="group3" value={4} type="radio" label="Comfortable"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setComfort(() => e.target.value)} inline name="group3" value={5} type="radio" label="Perfect"></Form.Check></Col>
      </Row>
    </Row>
    <Row className="mb-3">
      <Form.Label>Length</Form.Label>
      <Row>
        <Col><Form.Check onChange={(e)=> setLength(() => e.target.value)} inline name="group6" value={1} type="radio" label="Uncomfortable"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setLength(() => e.target.value)} inline name="group6" value={2} type="radio" label="Slightly uncomfortable"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setLength(() => e.target.value)} inline name="group6" value={3} type="radio" label="Ok"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setLength(() => e.target.value)} inline name="group6" value={4} type="radio" label="Comfortable"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setLength(() => e.target.value)} inline name="group6" value={5} type="radio" label="Perfect"></Form.Check></Col>
      </Row>
    </Row>
    <Row className="mb-3">
      <Form.Label>Quality</Form.Label>
      <Row>
        <Col><Form.Check onChange={(e)=> setQuality(() => e.target.value)} inline name="group4" value={1} type="radio" label="Poor"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setQuality(() => e.target.value)} inline name="group4" value={2} type="radio" label="Below average"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setQuality(() => e.target.value)} inline name="group4" value={3} type="radio" label="What I expected"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setQuality(() => e.target.value)} inline name="group4" value={4} type="radio" label="Pretty great"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setQuality(() => e.target.value)} inline name="group4" value={5} type="radio" label="Perfect"></Form.Check></Col>
      </Row>
    </Row>
    <Row className="mb-3">
      <Form.Label>Fit</Form.Label>
      <Row>
        <Col><Form.Check onChange={(e)=> setFit(() => e.target.value)} inline name="group5" value={1} type="radio" label="Runs tight"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setFit(() => e.target.value)} inline name="group5" value={2} type="radio" label="Runs slightly tight"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setFit(() => e.target.value)} inline name="group5" value={3} type="radio" label="Perfect"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setFit(() => e.target.value)} inline name="group5" value={4} type="radio" label="Runs slightly long"></Form.Check></Col>
        <Col><Form.Check onChange={(e)=> setFit(() => e.target.value)} inline name="group5" value={5} type="radio" label="Runs long"></Form.Check></Col>
      </Row>
    </Row>
    <Row className="mb-3">
      <Rating ratingValue={rating} onClick={(e)=> setRating(() => e)}/>
      <Form.Group>
        <Form.Check onChange={() => setRecommend((prev)=> !prev)} value={recommend} name="recommend" type="checkbox" label="I recommend this item" />
      </Form.Group>
    </Row>
    <Row>
      <Form.Group className="mb-3" controlId="newReview">
        <input onChange={(e) => addImage(e)} type="file"/>
      </Form.Group>
    </Row>
    <Button onClick={onSubmit} style={style} variant="primary" type="submit">
      Submit
    </Button>
    <Button onClick={() => props.cancel()} style={style} variant="primary">
      Cancel
    </Button >
  </Form>
  )
}

export default AddReview