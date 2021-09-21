import React, { useState, useContext, useEffect } from 'react';
import { dataContext } from '../context/dataContext.js';
import './RelatedItems.css'
import { CardGroup } from 'react-bootstrap';
import RelatedItemsCards from './RelatedItemsCards.jsx';
import YourOutfit from './YourOutfit.jsx';
import token from '../../../../token/token.js';
import axios from 'axios';
import CarouselTwo from './carousel2.jsx';


var RelatedItems = () => {

  var { product, reviews, productId } = useContext(dataContext);

  const [oneRating, setOneRating] = useState([]); //array of ratings for one item (to be averaged)
  const [relatedItems, setRelatedItems] = useState([]);  //arr of all info for related styles

  const getProductStyles = async (id) => {
    const {data} = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${id}/styles`, {params: {count: 50}, headers: {Authorization: token}});
    return data;
  };

  //input needs to be each individual product id-
  const addCategory = async (currentId) => {
    const {data} = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${currentId}`, {headers: {Authorization: token}})
    const temp = relatedItems;
    for (let i = 0; i < temp.length; i++) {
      if (parseInt(temp[i].product_id) === data.id) {
        temp[i].category = data.category
      }
    }
    setRelatedItems(temp);
    return relatedItems;
  }

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
      rating: parseInt(total/oneRating.length)
    }))
  }

  useEffect( () => {
    async function fetchData(){
      try {
        const {data} = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/related`, {headers: {Authorization: token}});
        let newData = data;
        console.log('newdata', newData)
        let productStylesArr = [];

        for(let i = 0; i < newData.length; i++){
          const products = await getProductStyles(newData[i]);
          productStylesArr.push(products);
        }
        setRelatedItems(productStylesArr);
      }
      catch(err){console.log('useEffect err:', err)}
    }
    fetchData()
    getAllRatings()

  }, [productId]);

  useEffect(() => {
    if((relatedItems.length !== 0) && !relatedItems[0].category) {
      for(let i = 0; i < relatedItems.length; i++){
        addCategory(relatedItems[i].product_id)
      }
    }
    console.log('relatedItemsOutsideFunc:', relatedItems);
  }, [relatedItems])




  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      <h3>Related Items</h3>
        <RelatedItemsCards info={relatedItems}/>
      <h3>Your Outfit</h3>
        {/* <Example /> */}
        <CarouselTwo />
    </div>
  );
}

export default RelatedItems;