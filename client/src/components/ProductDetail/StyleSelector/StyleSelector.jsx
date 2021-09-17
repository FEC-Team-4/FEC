import React from 'react'
import { Row, Col } from 'react-bootstrap';

function StyleSelector () {
  return (
    <Row className="py-5">
      <Col>
      <label htmlFor="sizeSelect">Size</label>
      <select name="sizeSelect" id="sizeSelect"
      className="custom-select form-control  mb-4">
        <option value="">Size</option>
        <option value="1">Small</option>
        <option value="2">Medium</option>
        <option value="3">Large</option>
      </select>
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