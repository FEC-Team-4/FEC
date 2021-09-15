import React from 'react'
import { Row, Col } from 'react-bootstrap';
function StarRatings () {
  return (
    <Row className ="d-inline">
    <span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    <span className="fa fa-star checked"></span>
    </span>
    <span><a href ="#">Read All Reviews</a></span>
    </Row>
  )

}

export default StarRatings;