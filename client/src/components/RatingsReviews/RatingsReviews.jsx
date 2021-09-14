import React from 'react'
import Header from './components/Header.jsx'
import RatingsGraph from './components/RatingsGraph.jsx'
import Reviews from './components/Reviews.jsx'
import Footer from './components/Footer.jsx'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

const apiKey = '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'

const style = {
  marginLeft:"10px",
  marginRight:"10px"
}

class RatingsReviews extends React.Component {
  constructor () {
    super();
    this.state = {
      reviewCount: 2,
      currentProduct: 42366, //hard coded product id
      reviews: [],
      displayReviews: [],
      recommendations: 0,
      stars: [],
      avgStars: 0,
    }
    this.getReviews = this.getReviews.bind(this)
    this.getAgetAvgStarsvg = this.getAvgStars.bind(this)
    this.getPercRecs = this.getPercRecs.bind(this)
    this.getAllStars = this.getAllStars.bind(this)
    this.sortByLowestStars = this.sortByLowestStars.bind(this)
    this.sortByHighestStars = this.sortByHighestStars.bind(this)
    this.sortByRecent = this.sortByRecent.bind(this)
  }

  componentDidMount() {
    this.getReviews()
  }

  getReviews () {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews', {params: {product_id: this.state.currentProduct, count: this.state.reviewCount}, headers: {Authorization: apiKey }})
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

  sortByLowestStars() {
    const sorter = (a, b) => {
      return a.rating - b.rating
    }
    this.setState({reviews: this.state.reviews.sort(sorter)})
  }
  sortByHighestStars() {
    const sorter = (a, b) => {
      return b.rating - a.rating
    }
    this.setState({reviews: this.state.reviews.sort(sorter)})
  }
  sortByRecent() {
    const sorter = (a, b) => {
      return new Date(b.date) - new Date(a.date)
    }
    this.setState({reviews: this.state.reviews.sort(sorter)})
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
          Sort By
          <Button variant="outline-secondary" size="sm" style={style} onClick={this.sortByRecent}>Recent</Button>
          <Button variant="outline-secondary" size="sm" style={style}>Relevant</Button>
          <Button variant="outline-secondary" size="sm" style={style} onClick={this.sortByHighestStars}>Highest Rated</Button>
          <Button variant="outline-secondary" size="sm" style={style} onClick={this.sortByLowestStars}>Lowest Rated</Button>
          <Reviews reviews={this.state.reviews}/>
          <Footer currentItemId={this.state.currentProduct} getMoreReviews={this.getReviews} />
        </div>
        </div>
      </div>
    )
  }
}



export default RatingsReviews