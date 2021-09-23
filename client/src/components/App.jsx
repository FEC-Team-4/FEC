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
import token from './ProductDetail/token.js';


const App = () => {

  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState(42366);

  useEffect(() => {
    axios.post('/products' , {productId: productId})
      .then(({data}) => setProduct(data))
      .catch(err => console.error(err));
  }, [])

  //setProductId helper function needed

  return (
      <dataContext.Provider value={{
        product: [product],
        productId: [productId]
      }}>
        <Container>
            <NavBar/>
          <div className="ProductDetails">
            <ProductDetails id={productId}/>
          </div>
          <div className="RelatedItems-OutfitCreation">
            <RelatedItems/>
          </div>
          <div className="Questions-Answers">
            <Questions productId={productId}/>
          </div>
          <div id="ratings" className="Ratings-Reviews">
            <RatingsReviews productId={productId}/>
          </div>
        </Container>
      </dataContext.Provider>
    );
}

export default App;