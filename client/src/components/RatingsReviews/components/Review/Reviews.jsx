import React, { useState, useContext } from 'react';
import Review from './Review.jsx'

const style = {
  overflowY: 'auto',
  height: '50vh'
}
const Reviews = (props) => {
  return  (
    <div style={style}>
    {props.reviews.map((review, index) => <Review bgCount={index} key={review.review_id} review={review}/>)}
    </div>
  )
}

export default Reviews