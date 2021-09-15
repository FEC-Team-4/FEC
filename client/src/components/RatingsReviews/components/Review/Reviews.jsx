import React, { useState, useContext } from 'react';
import Review from './Review.jsx'

const Reviews = (props) => {

  // const [bgCount, setBgCount] = useState(0);
  return  (
    props.reviews.map((review, index) => <Review bgCount={index} key={review.review_id} review={review}/>)
  )
}

export default Reviews