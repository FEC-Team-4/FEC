import React from 'react'
import axios from 'axios'
import token from '../token'
import StarRatings from 'react-star-ratings';
import { Row, Col } from 'react-bootstrap';
import './StarRatings.css'

class Productratings extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        ratings: 0,
        avgRating: 0
      }
      this.getRatings = this.getRatings.bind(this)
      this.roundedAvg = this.roundedAvg.bind(this)
  }

  componentDidMount() {
    this.getRatings();
  }

  getRatings() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta/', {
      params: {
        product_id: this.props.id
      },
      headers: {Authorization: token}
    })
    .then(results => this.roundedAvg(results.data.ratings))
    .catch(error => console.log(error))
  }

  roundedAvg(rating) {
    const ratings = Object.entries(rating);
    let weightedRating = 0;
    let totalRatings = 0;
    for (const [key, value] of ratings) {
      totalRatings += Number(value);
      weightedRating += key * Number(value);
    }
    const finalAvg = ratings.length ? (Math.round(weightedRating / totalRatings * 4) / 4).toFixed(2) : 0;
    console.log(totalRatings)
    this.setState( {
      ratings: totalRatings,
      avgRating: finalAvg
    } )
  }

  render() {
    return this.state.ratings > 0 ?
    (
      <>
        <StarRatings
          rating={Number(this.state.avgRating)}
          starDimension="14px"
          starSpacing="2px"
        />
        <span className ="read-reviews"><a href ="#">Read All {this.state.ratings} Reviews</a></span>

      </>
    ) : null;
  }


}

export default Productratings;