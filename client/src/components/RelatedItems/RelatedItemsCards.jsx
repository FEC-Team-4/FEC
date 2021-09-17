import React, { useState, useContext } from 'react';
import { dataContext } from '../context/dataContext.js';
import { Card, Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import './RelatedItems.css';


const RelatedItemsCards = () => {

  const { product } = useContext(dataContext);


  return(
    <div className='d-flex align-items-stretch bd-highlight example-parent' style={{ height: '450px' }}>
      <div className="p-2 bd-highlight col-example">
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" />
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
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" />
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
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" />
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
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" />
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