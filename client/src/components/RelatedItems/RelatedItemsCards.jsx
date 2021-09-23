import React, { useState, useContext } from 'react';
import { dataContext } from '../context/dataContext.js';
import { Card, Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import './RelatedItems.css';


const RelatedItemsCards = (props) => {

  const { product } = useContext(dataContext);
  // console.log('info', props.info)

  return(
    <div className='d-flex align-items-stretch bd-highlight example-parent' style={{ height: '450px' }}>
      <div className="p-2 bd-highlight col-example">
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src={props.info.pic} />
          <Card.Body>
            <Card.Text>
              {props.info.category}
            </Card.Text>
            <Card.Text>
              {props.info.name}
            </Card.Text>
            <Card.Text>
              ${props.info.price}
            </Card.Text>
            <StarRatings
                  rating={1} //needs to be converted to props- issue with re-rendering
                  starDimension="15px"
                  starSpacing="0.5px"
                  starRatedColor="black"
                  numberOfStars={5}
                  name='rating'
              />
          </Card.Body>
        </Card>
      </div>
      <div className="p-2 bd-highlight col-example">
        <Card style={{ width: '15rem' }}>
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
      <div className="p-2 bd-highlight col-example">
        <Card style={{ width: '15rem' }}>
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
      <div className="p-2 bd-highlight col-example">
        <Card style={{ width: '15rem' }}>
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
    </div>
  );
}

export default RelatedItemsCards;