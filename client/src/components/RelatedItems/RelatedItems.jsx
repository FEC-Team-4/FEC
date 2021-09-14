import React, { useState } from 'react';
// import './RelatedItems.css'
// import { Card } from 'react-bootstrap';
import RelatedItemsCards from './RelatedItemsCards.jsx';
import YourOutfit from './YourOutfit.jsx';


// const getReviews = () => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews', {params: {product_id: this.state.currentProduct, count: this.state.reviewCount}, headers: {Authorization: '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' }})
//     .then(({ data }) => this.setState({reviews: data.results, reviewCount: this.state.reviewCount + 2}))
//     .catch((err) => console.error(err))
// }




var RelatedItems = () => {
  return (
    <div>
      <h3>Related Items</h3>
      <RelatedItemsCards />
      <h3>Your Outfit</h3>
      <YourOutfit />
    </div>
  );
}

export default RelatedItems;