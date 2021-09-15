import React, { useState, useContext } from 'react';
import { dataContext } from '../context/dataContext.js';
import { Card } from 'react-bootstrap';
import './RelatedItems.css';


const RelatedItemsCards = () => {

  const { product } = useContext(dataContext);


  return(
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="left-arrow">
          &lt;
        </button>
        <div className="carousel-content-wrapper">
        <button className="right-arrow">
          &gt;
        </button>
          <div className="carousel-content">
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <br/>
            {product.name}

          </div>
        </div>
      </div>

    </div>
  );
}


// const RelatedItemsCards = () => {

//   const { product } = useContext(dataContext);
//   console.log('product', product);

//   return(
//     <div>
//       <Card style={{ width: "22rem"}}>
//         <Card.Body>
//           <Card.Title style={{ color: "grey"}}>{product.name}</Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">
//             {product.category}
//           </Card.Subtitle>
//           <Card.Text>
//             {`$${product.default_price}`}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

export default RelatedItemsCards;