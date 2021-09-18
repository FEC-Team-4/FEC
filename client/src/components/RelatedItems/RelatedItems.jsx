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
  console.log('productid', productId);
  const [listRelated, setListRelated] = useState([]); //arr of related style ID's
  const [oneRating, setOneRating] = useState([]); //array of ratings for one item (to be averaged)
  const [relatedItems, setRelatedItems] = useState([]);  //arr of all info for related styles

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/related`, {headers: {Authorization: token}})
    .then(({data}) => setListRelated(data))
    .then(() => createRelatedList())
    .catch((err) => console.log('related items ajax err:', err))

    // axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/styles`,{params: {count: 50}, headers: {Authorization: token}})
    // .then(({data}) => data.results.map(item => {
    //   let newObj = {
    //     id: item.style_id,
    //     name: item.name,
    //     price: item.original_price,
    //     pic: item.photos[0].thumbnail_url
    //   }
    //   let arr = relatedItems.concat(newObj);
    //   console.log('data results', data.results)
    //   return(
    //     setRelatedItems(arr)
    //   )
    // }))

    // .then(() => addCategory(42366))
    // .then(() => getAllRatings(42366))
    // .then(() => getAvg())
    .catch((err) => console.log('related items ajax err:', err))
  }, [productId]); //maybe 2nd argument should change here?


  const createRelatedList = () => {
    listRelated.map(style => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${style}/styles`,{params: {count: 50}, headers: {Authorization: token}})
      .then(({data}) => {
        let item = data.results[0];
        let newObj = {
          id: item.style_id,
          name: item.name,
          price: item.original_price,
          pic: item.photos[0].thumbnail_url
        }
        let arr = relatedItems.concat(newObj);
        return setRelatedItems(arr);
      })
      .catch((err) => console.log('products ajax err:', err))
      })
    }

    console.log('list of related ids:', listRelated);
    console.log('relatedItemsList', relatedItems);
  // const addCategory = (currentId) => (
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${currentId}`, {headers: {Authorization: token}})
  //   .then(({data}) => (
  //     setRelatedItems(currentState => ({
  //       ...currentState,
  //       category: data.category
  //     }))
  //     ))
  //     .catch((err) => console.log('products ajax err:', err))
  // )

  // const getAllRatings = (currentId) => {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews`, {params: {product_id: currentId}, headers: {Authorization: token}})
  //   .then(({data}) => {
  //     var resultsOnly = data.results.map(item => (
  //       item.rating
  //     ))
  //     return(
  //       setOneRating(resultsOnly)
  //     );
  //   })
  //     .catch((err) => console.log('products ajax err:', err))
  // }

  // const getAvg = () => {
  //   var total = 0;
  //   oneRating.forEach(item => {total += item})
  //   setRelatedItems(currentState => ({
  //     ...currentState,
  //     rating: parseInt(total/oneRating.length)
  //   }))
  // }



  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      <h3>Related Items</h3>
        <RelatedItemsCards info={relatedItems}/>
      <h3>Your Outfit</h3>
        {/* <YourOutfit /> */}
    </div>
  );
}

export default RelatedItems;