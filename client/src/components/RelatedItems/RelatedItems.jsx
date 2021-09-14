import React from 'react';
// import './RelatedItems.css'
// import { Card } from 'react-bootstrap';
import RelatedItemsCards from './RelatedItemsCards.jsx';
import YourOutfit from './YourOutfit.jsx';

var RelatedItems = () => {
  return (
    <div>
      <h2>Related Items</h2>
      <RelatedItemsCards />
      <h2>Your Outfit</h2>
      <YourOutfit />
    </div>
  );
}

export default RelatedItems;