import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar/NavBar.jsx';
import Products from './ProductDetail/ProductDetail.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Questions from './Questions/Questions.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import "./App.css";
import axios from 'axios';
import { dataContext } from './context/dataContext.js';
import token from '../../../token/token.js';
console.log('datacontext:', dataContext);



const App = () => {

  // const [items, setItems] = useState(['Shirt', 'pant', 'shoe', 'sock']);
  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [productId, setProductId] = useState(42366);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/styles`,{params: {count: 50}, headers: {Authorization: token}})
      .then(({data}) => setProduct(data))
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews',{params: {product_id: 42366}, headers: {Authorization: token }})
      .then((results) => setReviews(() => results))
  }, [])
  console.log('reviews from api:', reviews);
  console.log('product from api:', product);

  //setProductId helper function

  //producuts:fdiapfsdia

  return (
      <dataContext.Provider value={{
        product: product,
        reviews: reviews
        }}>
        <div className="container">
          <div className="Navbar">
            <NavBar/>
          </div>
          {/* <div className="Products">
            <ProductDetail/>
          </div> */}
          <div className="RelatedItems-OutfitCreation">
            <RelatedItems/>
          </div>
          {/* <div className="Questions-Answers">
            <Questions/>
          </div> */}
          <div className="Ratings-Reviews">
            <RatingsReviews/>
          </div>
        </div>
      </dataContext.Provider>
    );
}

export default App;