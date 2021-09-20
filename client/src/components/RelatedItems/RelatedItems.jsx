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

  const [oneRating, setOneRating] = useState([]); //array of ratings for one item (to be averaged)
  const [relatedItems, setRelatedItems] = useState([]);  //arr of all info for related styles

  const getProductStyles = async (id) => {
    const {data} = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${id}/styles`, {params: {count: 50}, headers: {Authorization: token}});
    return data;
  };

  const addCategory = async (currentId) => {
    const {data} = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${currentId}`, {headers: {Authorization: token}})
    for (let i = 0; i < relatedItems.length; i++) {
      if (parseInt(relatedItems[i].product_id) === data.id) {
        setRelatedItems(relatedItems[i].category = data.category);
      }
    }
  }

  useEffect( () => {
    async function fetchData(){
      try {
        const {data} = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/related`, {headers: {Authorization: token}});
        let newData = [...new Set(data)];  //no duplicates
        let productStylesArr = [];
        // await addCategory(...data);
        for(let i = 0; i < newData.length; i++){
          const products = await getProductStyles(newData[i]);
          productStylesArr.push(products);
        }
        setRelatedItems(productStylesArr);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[productId]);

  addCategory(42367); //how do we get this to run on its own?
  console.log('relatedItemsOutsideFunc:', relatedItems);

  //below functions need to be updated after above issue is solved.



    // .then(({data}) => (
    //   setRelatedItems(currentState => ({
    //     ...currentState,
    //     category: data.category
    //   }))
    //   ))
    //   .catch((err) => console.log('products ajax err:', err))


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