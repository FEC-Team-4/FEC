import React from 'react'
import Header from './components/Header.jsx'
import RatingsGraph from './components/RatingsGraph.jsx'
import Reviews from './components/Reviews.jsx'
import Footer from './components/Footer.jsx'
import axios from 'axios'

// Need to pass down the current product ID from the main component
class RatingsReviews extends React.Component {
  constructor () {
    super();
    this.state = {
      reviewCount: 2,
      currentProduct: 42366, //hard coded product id
      reviews: [],
      recommendations: 0,
      stars: [],
      avgStars: 0,
    }
    this.getReviews = this.getReviews.bind(this)
    this.getAgetAvgStarsvg = this.getAvgStars.bind(this)
    this.getPercRecs = this.getPercRecs.bind(this)
    this.getAllStars = this.getAllStars.bind(this)
  }

  componentDidMount() {
    this.getReviews()
  }

  getReviews () {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews', {params: {product_id: this.state.currentProduct, count: this.state.reviewCount}, headers: {Authorization: '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' }})
      .then(({ data }) => this.setState({reviews: data.results, reviewCount: this.state.reviewCount + 2}))
      .then(() => this.getAvgStars())
      .then(() => this.getPercRecs())
      .then(() => this.getAllStars())
      .catch((err) => console.error(err))
  }

  getAvgStars () {
    var total = 0;
    this.state.reviews.forEach(ele => {
      total += ele.rating
    })
    this.setState({avgStars: total/this.state.reviews.length})
  }

  getPercRecs () {
    var total = 0;
    this.state.reviews.forEach(ele => {
      if (ele.recommend) total ++;
    });
    this.setState({recommendations: total / this.state.reviews.length * 100 + '%'})
  }

  getAllStars () {
    this.state.reviews.forEach(ele => {
      this.setState({stars: [...this.state.stars, ele.rating]})
    })
  }

  render () {
    return (
      <div className="container">
          <Header />
        <div className="row">
        <div className="col-sm">
          <RatingsGraph recs={this.state.recommendations} stars={this.state.stars} avgStars={this.state.avgStars}/>
        </div>
        <div className="col-sm">
          <Reviews reviews={this.state.reviews}/>
          <Footer getMoreReviews={this.getReviews} />
        </div>
        </div>
      </div>
    )
  }
}



export default RatingsReviews;