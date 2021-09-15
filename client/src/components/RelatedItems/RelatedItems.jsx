import React, { useState } from 'react';
// import './RelatedItems.css'
// import { Card } from 'react-bootstrap';
import RelatedItemsCards from './RelatedItemsCards.jsx';
import YourOutfit from './YourOutfit.jsx';


var RelatedItems = () => {
  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      <h3>Related Items</h3>
      <RelatedItemsCards/>
      <h3>Your Outfit</h3>
      <YourOutfit />
    </div>
  );
}

export default RelatedItems;