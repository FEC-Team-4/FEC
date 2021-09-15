import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';
import { Row, Col } from 'react-bootstrap';

const RatingsGraph = (props) => (
    <div className="container">
      <Row>
        <Col sm={8}>
          <StarRatings
              rating={props.avgStars}
              starRatedColor="red"
              numberOfStars={5}
              name='rating'
          />
        </Col>
        <Col sm={2}>
          <h2>{props.avgStars}</h2>
        </Col>
      </Row>
      <div> {props.recs} of buyers recommend this product</div>
    </div>
  )

export default RatingsGraph