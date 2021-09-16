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

  var { product, reviews, productId } = useContext(dataContext);

  //holds only related style numbers
  const [relatedList, setRelatedList] = useState([]);
  //holds final object w everythign needed
  const [relatedItems, setRelatedItems] = useState({});

  //use context to pull current product ID
  //pull products related to current item
  //pull category, name, rating, price, first image for each item.
  //load that info into the cards

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/styles`,{params: {count: 50}, headers: {Authorization: token}})
    .then(({data}) => setRelatedList(data.results))
    .catch((err) => console.log('related items ajax err:', err))
    axios.get()
  }, []);


  const createRelatedItems = () => {
    const allRelatedItems = {};
    for (var i = 0; i < relatedList.length; i++) {
      const it = relatedList[i]
      allRelatedItems[it.style_id] = {
        name: it.name,
        price: it.original_price,
        pic: it.photos[0].thumbnail_url
      }
    }
    // console.log('all related items:', allRelatedItems);
    return allRelatedItems;
  }

  //does this need to run upon loading of page? maybe need to add something here.
  createRelatedItems();
  var hi = createRelatedItems();
  console.log('create', hi);
  setRelatedItems(hi);
  // const [relatedItems, setRelatedItems] = useState(allRelatedItems);

  // setRelatedItems();
  console.log('relateditems state:', relatedItems);

  // const addRating = () => {
  //   //use related items array
  //   //search for each item by their id inside of the ratings api results
  //   //average out all of the stars
  //   //assign the rating to rating: in allRelatedItems
  // }

  // const addCategory = () => {
  //   //use related items array
  //   //search for each item by their id inside of the products api results
  //   //assign the category to the category: in allRelatedItems
  // }



  // getAvgStars () {
  //   var total = 0;
  //   relatedItems.forEach(item => {
  //     total += item.rating
  //   })
  //   setRelatedItems({avgStars: total/this.state.reviews.length})
  // }


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