import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar/NavBar.jsx';
import Products from './ProductDetail/ProductDetail.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Questions from './Questions/Questions.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import "./App.css";
import {dataContext} from './context/dataContext.js';
console.log('datacontext:', dataContext);

const App = () => {
  const [items, setItems] = useState(['Shirt', 'pant', 'shoe', 'sock']);


  return (
      <dataContext.Provider value={{items}}>
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