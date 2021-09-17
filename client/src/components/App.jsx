import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import NavBar from './NavBar/NavBar.jsx';
import ProductDetails from './ProductDetail/ProductDetails.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Questions from './Questions/Questions.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import "./App.css";
import axios from 'axios';
import { dataContext } from './context/dataContext.js';
import token from '../../../token/token.js';


const App = () => {

  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [productId, setProductId] = useState(42366);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}`,{params: {count: 50}, headers: {Authorization: token}})
      .then(({data}) => setProduct(data))
      .catch(err => console.log(err));
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews',{params: {product_id: `${productId}`}, headers: {Authorization: token }})
      .then((results) => setReviews(() => results))
      .catch(err => console.log(err));
  }, [])

  //setProductId helper function needed

  return (
      <dataContext.Provider value={{
        product: [product],
        reviews: [reviews],
        productId: [productId]
      }}>
        <Container>
            <NavBar/>
          <div className="ProductDetails">
            <ProductDetails/>
          </div>
          <div className="RelatedItems-OutfitCreation">
            <RelatedItems/>
          </div>
          {/* <div className="Questions-Answers">
            <Questions/>
          </div> */}
          <div className="Ratings-Reviews">
            <RatingsReviews productId={productId}/>
          </div>
        </Container>
      </dataContext.Provider>
    );
}

export default App;