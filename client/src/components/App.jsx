import React from 'react';
import NavBar from './NavBar/NavBar.jsx';
import Products from './ProductDetail/ProductDetail.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Questions from './Questions/Questions.jsx';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="Navbar">
          {/* <NavBar/> */}
        </div>
        {/* <div className="Products">
          <ProductDetail/>
        </div> */}
        {/* <div className="RelatedItems-OutfitCreation">
          <RelatedItems/>
        </div> */}
        {/* <div className="Questions-Answers">
          <Questions/>
        </div> */}
        <div className="Ratings-Reviews">
          <RatingsReviews/>
        </div>
      </div>
    );
  }
}