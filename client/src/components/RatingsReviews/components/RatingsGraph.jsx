import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';
import { Row, Col } from 'react-bootstrap';

const RatingsGraph = (props) => (
    <div className="container">
      <Row>
        <Col sm={7}>
          <StarRatings
              rating={props.avgStars}
              starRatedColor="#93D2DF"
              numberOfStars={5}
              name='rating'
          />
        </Col>
        <Col sm={2}>
          <h1>{props.avgStars.toFixed(1)}</h1>
        </Col>
      </Row>
      <Col>
      <div> <i>{props.recs} of buyers recommend this product</i></div>
      </Col>
    </div>
  )

export default RatingsGraph