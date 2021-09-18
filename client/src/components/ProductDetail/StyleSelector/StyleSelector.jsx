import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';

function StyleSelector (props) {
  // console.log(props.styles)
  return (
    <Row className="py-5">
      <p className="style">STYLE <span>Selected</span></p>
      <Col>
        <option>Select Size</option>
        <option value="1">Small</option>
        <option value="2">Medium</option>
        <option value="3">Large</option>
      </Col>
      <Col>
        <label htmlFor="quantitySelect">Quantity:</label>
        <input id="quantitySelect" type="number"
        className="form-control quantity  mb-4" name="" value="1" />
      </Col>
      <a href="#" className="btn w-100 btn-lg btn-outline-primary">Add to cart</a>
    </Row>
  )

}

export default StyleSelector;