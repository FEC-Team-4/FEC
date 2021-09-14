import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/dropdownbutton'
import Dropdown from 'react-bootstrap/dropdown'
import { Rating } from 'react-simple-star-rating'
import axios from 'axios'

const apiKey = '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'


const style = {
    marginLeft:"10px",
    marginRight:"10px"
  }

class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      addReview: false,
      email: '',
      name: '',
      summary: '',
      rating: '',
      recommend: false,
      review: ''
    }
    this.addReview = this.addReview.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeFalse = this.handleChangeFalse.bind(this)
    this.handleRating = this.handleRating.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  addReview() {
    this.setState({addReview: !this.state.addReview})
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleChangeFalse() {
    this.setState({ recommend: !this.state.recommend })
  }
  handleRating(e) {
    this.setState({rating: e})
  }

  onSubmit(e) {
    e.preventDefault()
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews', {
      product_id: this.props.currentItemId,
      rating: this.state.rating,
      summary: this.state.summary,
      body: this.state.review,
      recommend: this.state.recommend,
      name: this.state.name,
      email: this.state.email,
      photos: [],
      characteristics: {},
  }, {headers: {Authorization: apiKey }})
    .then(() => this.setState({
      email: '',
      name: '',
      summary: '',
      rating: '',
      review: ''}))
  }

  view () {
    if (this.state.addReview) {
      return (
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" onChange={this.handleChange} value={this.state.email} type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group as={Col} controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3">
              <Form.Label>Give us a summary!</Form.Label>
              <Form.Control onChange={this.handleChange} value={this.state.summary} name="summary"  type="title" placeholder=""/>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="newReview">
              <Form.Label>Write Your Review Here!</Form.Label>
              <Form.Control name="review" onChange={this.handleChange} value={this.state.review}  as="textarea" rows={3} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Rating onClick={this.handleRating} ratingValue={this.state.rating}/>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check onChange={this.handleChangeFalse} value={this.state.recommend} name="recommend" type="checkbox" label="I recommend this item" />
            </Form.Group>
          </Row>
          <Button onClick={this.onSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )
    } else {
      return (
        <div>
          <Button onClick={this.props.getMoreReviews} style={style}>More Reviews</Button>
          <Button onClick={this.addReview} style={style}>Add a Review +</Button>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.view()}
      </div>
    )
  }
}

export default Footer