import React from 'react';
// import './RelatedItems.css'
import { Card } from 'react-bootstrap';
import RelatedItemsCards from './components/RelatedItemsCards.jsx';
import YourOutfit from './components.YourOutfit.jsx';

function RelatedItems() {
  return(
    <div>
      <RelatedItemsCards />
      <YourOutfit />
    </div>
  );
}

export default RelatedItems;