import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StarRating from 'react-star-ratings'

const bg = {
  padding: "15px",
  backgroundColor: '#f3f3f3',
  borderRadius: '10px'
}

const bg2 = {
  padding: "15px",
  borderRadius: '10px'
}

const Review = (props) => {
  const [feedback, setFeedback] = useState(false);
  const [date, setDate] = useState(new Date(props.review.date.split('T')[0].split('-')[0],
    props.review.date.split('T')[0].split('-')[1] - 1,
    props.review.date.split('T')[0].split('-')[2]).toLocaleString('default',
    {month: 'long', day: 'numeric', year: 'numeric'}));
  const [see, setSee] = useState(false);

  const ifRec = () => {
    if (props.review.recommend) {
      return (
        <p> &#10004; I recommend this product</p>
      )
    }
  }

  const thanks = () => {
    if (feedback) {
      return (
        <p>
          Thanks for your feedback :)
        </p>
      )
    } else {
      return (
        <div>
        <p><i>Helpful? <a href="#" onClick={helpful} >Yes</a> ({props.review.helpfulness}) </i> ||
          <a href="#">Report</a></p>
        </div>
      )
    }
  }
  const showMore = () => {
    if (props.review.body.length > 250) {
      return (
        <div>
          <p className="text-justify">{props.review.body.substring(0, 250)}</p>
          <i>Read More</i>
        </div>
      )
    } else {
      return (
        <p className="text-justify">{props.review.body}</p>
      )
    }
  }

  const helpful = () => {
    axios.put('/helpful', {productId: props.review.review_id})
    .then(() => setFeedback(() => true))
    }

  const addColor = () => {
    if (props.bgCount % 2 === 0) {
      return (
        <div style={bg2}>
          <div className="py-2">
            <StarRating
              rating={props.review.rating}
              numberOfStars={5}
              starDimension="20px"
              starSpacing="1px"
              starRatedColor="#93D2DF"
            />
          </div>
          <p className="user">User: {props.review.reviewer_name} | {date} </p>
          <h4>{props.review.summary}</h4>
          {showMore()}
          {ifRec()}
          {thanks()}
        </div>
      )
    } else {
      return (
        <div style={bg}>
          <div className="py-2">
          <StarRating
            rating={props.review.rating}
            numberOfStars={5}
            starDimension="20px"
            starSpacing="1px"
            starRatedColor="#93D2DF"
          />
        </div>
        <p className="user">User: {props.review.reviewer_name} | {date}</p>
          <h4>{props.review.summary}</h4>
          <p className="text-justify">{props.review.body}</p>
          {thanks()}
        </div>
      )
    }
  }
  return (
    <div>
      {addColor()}
    </div>
    )
  }

export default Review
