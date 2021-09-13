import React from 'react'
import Review from './Review.jsx'

const Reviews = (props) => {
  return  (
    props.reviews.map(review => <Review key={review.review_id} review={review}/>)
  )
}

export default Reviews