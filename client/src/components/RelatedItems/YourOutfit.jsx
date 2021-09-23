import React, { useState, useContext } from 'react';
import { dataContext } from '../context/dataContext.js';
import { Card, Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

import './RelatedItems.css';


const YourOutfit = () => {

  const { product } = useContext(dataContext);

  return(
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Text>
          Category
        </Card.Text>
        <Card.Text>
          Name
        </Card.Text>
        <Card.Text>
          Price
        </Card.Text>
        <StarRatings
              rating={3}
              starDimension="15px"
              starSpacing="0.5px"
              starRatedColor="black"
              numberOfStars={5}
              name='rating'
          />
      </Card.Body>
    </Card>
    </div>
  );
}

export default YourOutfit;