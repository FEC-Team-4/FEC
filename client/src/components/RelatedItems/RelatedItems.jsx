import React, { useState, useContext, useEffect } from 'react';
import { dataContext } from '../context/dataContext.js';
// import './RelatedItems.css'
// import { Card } from 'react-bootstrap';
import RelatedItemsCards from './RelatedItemsCards.jsx';
import YourOutfit from './YourOutfit.jsx';
import token from '../../../../token/token.js';
import axios from 'axios';




var RelatedItems = () => {
  var productId = 42370;

  const { product } = useContext(dataContext);
  const { reviews } = useContext(dataContext);
  var { productId } = useContext(dataContext);

  console.log('product', product);
  console.log('reviews', reviews);
  console.log('productId', productId);

  const [relatedList, setRelatedList] = useState([]);
  const [relatedItems, setRelatedItems] = useState({});

  //use context to pull current product ID
  //pull products related to current item
    //pull category, name, rating, price, first image for each item.
      //load that info into the cards


  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/styles`,{params: {count: 50}, headers: {Authorization: token}})
      .then(({data}) => setRelatedList(data))
      .then(() => console.log('results:', results))
      .catch((err) => console.log('related items ajax err:', err))
  }, []);

  // getAvgStars () {
  //   var total = 0;
  //   relatedItems.forEach(item => {
  //     total += item.rating
  //   })
  //   setRelatedItems({avgStars: total/this.state.reviews.length})
  // }

  console.log('related list from relateditems:', relatedList.results);

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