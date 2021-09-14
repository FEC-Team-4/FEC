import React, { useState, useContext } from 'react';
import {dataContext} from '../context/dataContext.js';
import { Card } from 'react-bootstrap';


const RelatedItemsCards = () => {

  const { items } = useContext(dataContext);

  return(
    <div>
      <Card style={{ width: "22rem"}}>
        <Card.Body>
          <Card.Title style={{ color: "grey"}}>{items[0]}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Sample Subtitle
          </Card.Subtitle>
          <Card.Text>
            Sample text at bottom of card.
          </Card.Text>
          <Card.Link href="#">Sample link text</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}


export default RelatedItemsCards;