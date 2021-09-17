import React, { useState, useContext, useEffect } from 'react';
import { dataContext } from '../context/dataContext.js';
import './RelatedItems.css'
import { CardGroup } from 'react-bootstrap';
import RelatedItemsCards from './RelatedItemsCards.jsx';
import YourOutfit from './YourOutfit.jsx';
import token from '../../../../token/token.js';
import axios from 'axios';


var RelatedItems = () => {

  var { product, reviews, productId } = useContext(dataContext);

  const [relatedList, setRelatedList] = useState([]); //array of related style id's
  const [oneRating, setOneRating] = useState([]); //array of ratings for one item (to be averaged)

  //holds final object w everything needed
  const [{id, name, price, pic, category, rating}, setRelatedItems] = useState({id: 42370, name: 'a', price: 1, pic: '', category: 'a', rating: 4});

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/styles`,{params: {count: 50}, headers: {Authorization: token}})
    .then(({data}) => setRelatedList(data.results.map(item => {
      return(
        setRelatedItems(currentState => ({
          ...currentState,
          id: item.style_id,
          name: item.name,
          price: item.original_price,
          pic: item.photos[0].thumbnail_url
        }))
      )
    })))
    .then(() => addCategory(42366))
    .then(() => getAllRatings(42366))
    .then(() => getAvg())
    .catch((err) => console.log('related items ajax err:', err))
  }, []);


  const addCategory = (currentId) => (
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${currentId}`, {headers: {Authorization: token}})
    .then(({data}) => (
      setRelatedItems(currentState => ({
        ...currentState,
        category: data.category
      }))
      ))
      .catch((err) => console.log('products ajax err:', err))
  )

  const getAllRatings = (currentId) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews`, {params: {product_id: currentId}, headers: {Authorization: token}})
    .then(({data}) => {
      var resultsOnly = data.results.map(item => (
        item.rating
      ))
      return(
        setOneRating(resultsOnly)
      );
    })
      .catch((err) => console.log('products ajax err:', err))
  }

  const getAvg = () => {
    var total = 0;
    oneRating.forEach(item => {total += item})
    setRelatedItems(currentState => ({
      ...currentState,
      rating: total/oneRating.length
    }))
  }

  // console.log(id, name, price, pic, category, rating);

  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      <h3>Related Items</h3>
        <RelatedItemsCards/>
      <h3>Your Outfit</h3>
        {/* <YourOutfit /> */}
    </div>
  );
}

export default RelatedItems;