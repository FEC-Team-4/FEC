import React, {useContext, useState} from 'react';
import { Card } from 'react-bootstrap';
import { dataContext } from '../context/dataContext.js';


const YourOutfit = () => {

  const { product } = useContext(dataContext);
  // console.log('product', product);

  return(
    <div>
      <Card style={{ width: "22rem"}}>
        <Card.Body>
          <Card.Title style={{ color: "grey"}}>{product.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {product.category}
          </Card.Subtitle>
          <Card.Text>
            {`$${product.default_price}`}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default YourOutfit;