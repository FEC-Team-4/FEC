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
console.log('datacontext:', dataContext);



const App = () => {

  // const [items, setItems] = useState(['Shirt', 'pant', 'shoe', 'sock']);
  const [products, setProducts] = useState();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products',{params: {count: 50}, headers: {Authorization: token}})
      .then((results) => setProducts(() => results))
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews',{params: {product_id: 42366}, headers: {Authorization: token }})
      .then((results) => setReviews(() => results))
  }, [])


  //producuts:fdiapfsdia

  return (
      <dataContext.Provider value={{products}}>
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
            <RatingsReviews/>
          </div>
        </Container>
      </dataContext.Provider>
    );
}

export default App;