import React, { useState, useContext, useEffect } from 'react';
import { dataContext } from '../context/dataContext.js';
import './RelatedItems.css'
import { CardGroup } from 'react-bootstrap';
import RelatedItemsCards from './RelatedItemsCards.jsx';
import YourOutfit from './YourOutfit.jsx';
import token from '../../../../token/token.js';
import axios from 'axios';
import CarouselTwo from './carousel2.jsx';


var RelatedItems = (props) => {

  var { product, reviews, productId } = useContext(dataContext);
  const [relatedItems, setRelatedItems] = useState([]);  //arr of all info for related styles

  const getProductStyles = async (id) => {
    const {data} = await axios.post(`products/styles`, {id: id});
    return data;
  };

  const addCategory = async (eachId) => {

    const {data} = await axios.post('/products', {productId: eachId})
    const temp = relatedItems;
    for (let i = 0; i < temp.length; i++) {
      if (parseInt(temp[i].product_id) === data.id) {
        temp[i].category = data.category
      }
    }
    setRelatedItems(temp);
    return relatedItems;
  }

  const addRatingAvg = (eachId) => {
    axios.post('/reviews', {productId: eachId})
    .then(({data}) => {
        var oneRating = [];
        data.results.forEach(item => (oneRating.push(item.rating)))
        var total = 0;
        oneRating.forEach(item => {total += item});
        var rating = parseInt(total/oneRating.length);
        return [rating, eachId];
      })
      .then((result) => {
        const temp = relatedItems;
        for (let i = 0; i < temp.length; i++) {
          if (parseInt(temp[i].product_id) === eachId) {
            temp[i].rating = result[0];
          }
        }
        setRelatedItems(temp);
      })
    .catch((err) => console.log('rating avg err:', err));
  }

  useEffect( () => {
    async function fetchData(){
      try {
        const {data} = await axios.post('/related', {productId: productId});
        let newData = data;
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
  }, [productId]);

  useEffect(() => {
    if((relatedItems.length !== 0) && !relatedItems[0].category) {
      for(let i = 0; i < relatedItems.length; i++){
        addCategory(relatedItems[i].product_id)
      }
    }

    if(relatedItems.length !== 0 && !relatedItems[0].hasOwnProperty('rating')) {
      for(let i = 0; i < relatedItems.length; i++){
        const num = parseInt(relatedItems[i].product_id);
        addRatingAvg(num)
      }
    }
  }, [relatedItems])

  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <CarouselTwo info={relatedItems} relatedProductClick={props.relatedProductClick}/>
    </div>
  );
}

export default RelatedItems;