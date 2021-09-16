import React, { useState, useContext, useEffect } from 'react'
import Header from './components/Header.jsx'
import RatingsGraph from './components/RatingsGraph.jsx'
import Reviews from './components/Review/Reviews.jsx'
import Footer from './components/Footer.jsx'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap';
import { dataContext } from '../context/dataContext.js';

const style = {
  marginLeft:"10px",
  marginRight:"10px",
  marginTop: "25px",
  marginBottom: "10px"
}
const style2 = {
  marginTop: "40px"
}



class RatingsReviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviewCount: 2,
      currentProduct: this.props.productId, //hard coded product id
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
    this.sortByHelpfulness = this.sortByHelpfulness.bind(this)
  }
  componentDidMount() {
    this.getReviews()
  }

  getReviews () {
    axios.post('/reviews', {count: this.state.reviewCount, productId: this.state.currentProduct })
      .then(({data}) => this.setState({reviews: data.results, reviewCount: this.state.reviewCount + 2}))
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
    this.setState({recommendations: (total / this.state.reviews.length * 100).toFixed(0) + '%'})
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
  sortByHelpfulness() {
    const sorter = (a, b) => {
      return b.helpfulness - a.helpfulness
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
        <div className="row">
        <div className="col-sm">
          <Header />
          <RatingsGraph recs={this.state.recommendations} stars={this.state.stars} avgStars={this.state.avgStars}/>
        </div>
        <div className="col-sm">
          <Row>
            <Col sm={2}>
              <p style={style2}>Sort By </p>
            </Col>
            <Col sm={10}>
              <Button variant="outline-secondary" size="sm" style={style} onClick={this.sortByRecent}>Recent</Button>
              <Button variant="outline-secondary" size="sm" style={style} onClick={this.sortByHelpfulness}>Relevant</Button>
              <Button variant="outline-secondary" size="sm" style={style} onClick={this.sortByHighestStars}>Highest Rated</Button>
              <Button variant="outline-secondary" size="sm" style={style} onClick={this.sortByLowestStars}>Lowest Rated</Button>
            </Col>
          </Row>
          <Reviews reviews={this.state.reviews}/>
          <Footer currentItemId={this.state.currentProduct} getMoreReviews={this.getReviews} />
        </div>
        </div>
      </div>
    )
  }
}


export default RatingsReviews;



// const RatingsReviews = (props) => {

//   const [reviews, setReviews] = useState([]);
//   const [counter, setCounter] = useState(2);
//   const [more, setMore] = useState(0);
//   const [avgStars, setAvgStars] = useState(0);

//   const updateAvgStars = () => {
//     var total = 0;
//     reviews.forEach(ele => {
//       total += ele.rating
//       console.log(total)
//     })
//     setAvgStars(() => total/reviews.length)
//   }

//   const sortByLowestStars = () => {
//     const sorted = [...reviews].sort((a, b) => {
//       return a.rating - b.rating;
//     });
//     setReviews(() => sorted)
//   }
//   const sortByHighestStars = () => {
//     const sorted = [...reviews].sort((a, b) => {
//       return b.rating - a.rating;
//     });
//     setReviews(() => sorted)
//   }
//   const sortByHelpfulness = () => {
//     const sorted = [...reviews].sort((a, b) => {
//       return b.helpfulness - a.helpfulness;
//     });
//     setReviews(() => sorted)
//   }
//   const sortByRecent = () => {
//     const sorted = [...reviews].sort((a, b) => {
//       return new Date(b.date) - new Date(a.date)
//     });
//     setReviews(() => sorted)
//   }

//   useEffect(() => {
//     axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews', {params: {product_id: props.productId, count: counter}, headers: {Authorization: apiKey }})
//       .then((results) => setReviews(() => results.data.results))
//       .then(() => setCounter((prev) => prev + 2))
//       .then(() => setAvgStars(() => updateAvgStars()));
//   }, [more])

//   return (
//     <div className="container">
//       <div className="row">
//       <div className="col-sm">
//         <Header />
//         <RatingsGraph avgStars={avgStars}/>
//       </div>
//       <div className="col-sm">
//         <span>
//         <div style={style2}>Sort By</div>
//         <Button variant="outline-secondary" size="sm" style={style} onClick={sortByRecent}>Recent</Button>
//         <Button variant="outline-secondary" size="sm" style={style} onClick={sortByHelpfulness}>Relevant</Button>
//         <Button variant="outline-secondary" size="sm" style={style} onClick={sortByHighestStars}>Highest Rated</Button>
//         <Button variant="outline-secondary" size="sm" style={style} onClick={sortByLowestStars}>Lowest Rated</Button>
//         </span>
//         <Reviews reviews={reviews}/>
//         <Footer currentItemId={props.productId} getMoreReviews={setMore} />
//       </div>
//       </div>
//     </div>
//   )
// }