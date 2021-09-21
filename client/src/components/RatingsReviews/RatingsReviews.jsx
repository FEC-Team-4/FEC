import React, { useState, useContext, useEffect } from 'react'
import Header from './components/Header.jsx'
import RatingsGraph from './components/RatingsGraph.jsx'
import Reviews from './components/Review/Reviews.jsx'
import Footer from './components/Footer.jsx'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap';
import { dataContext } from '../context/dataContext.js';

const token ='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'


const style = {
  marginLeft:"10px",
  marginRight:"10px",
  marginTop: "25px",
  marginBottom: "10px"
}
const style2 = {
  marginTop: "40px",
  overflowY:"auto"

}

const RatingsReviews = (props) => {

  const [reviews, setReviews] = useState([]);
  const [counter, setCounter] = useState(2);
  const [more, setMore] = useState(0);
  const [avgStars, setAvgStars] = useState(0);
  const [stars, setStars] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const [meta, setMeta] = useState([]);
  const [sort, setSort] = useState(null);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    getReviews();
  }, [more, sort])

  const getReviews = () => {
    axios.post('/reviews', {count: counter, productId: props.productId, sort: sort})
      .then((results) => setReviews(() => results.data.results))
      .then(() => setCounter((prev) => prev + 2))
      .then(() => counter - reviews.length > 2 ? setHide(prev => !prev) : console.log(null) )
      .catch(err => console.log('here', err))
  }

  useEffect(() => {
    axios.post('/reviews/meta', {productId: props.productId})
      .then((results) => {
        setStars(() => results.data.ratings)
        setCharacteristics(() => results.data.characteristics)
        setMeta(() => results.data)
        setRecommend(() => results.data.recommended)
      })
  }, [])

  return (
    <div className="container">
      <div className="row">
      <div className="col-sm">
        <Header />
        <RatingsGraph recommend={recommend} characteristics={characteristics} stars={stars}/>
      </div>
      <div className="col-sm">
        <span>
        <div style={style2}>Sort By</div>
        <Button variant="outline-secondary" size="sm" style={style} onClick={(e) => setSort(() => e.target.value)} value="newest">Recent</Button>
        <Button variant="outline-secondary" size="sm" style={style} onClick={(e) => setSort(() => e.target.value)} value="relevant">Relevant</Button>
        <Button variant="outline-secondary" size="sm" style={style} onClick={(e) => setSort(() => e.target.value)} value="helpful">Highest Rated</Button>
        </span>
        <Reviews reviews={reviews}/>
        <Footer currentItemId={props.productId} getMoreReviews={setMore} hide={hide}/>
      </div>
      </div>
    </div>
  )
}

export default RatingsReviews;




// class RatingsReviews extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       reviewCount: 2,
//       currentProduct: this.props.productId, //hard coded product id
//       reviews: [],
//       displayReviews: [],
//       recommendations: 0,
//       stars: [],
//       avgStars: 0,
//     }
//     this.getReviews = this.getReviews.bind(this)
//     this.getAgetAvgStarsvg = this.getAvgStars.bind(this)
//     this.getPercRecs = this.getPercRecs.bind(this)
//     this.getAllStars = this.getAllStars.bind(this)
//     this.sortByLowestStars = this.sortByLowestStars.bind(this)
//     this.sortByHighestStars = this.sortByHighestStars.bind(this)
//     this.sortByRecent = this.sortByRecent.bind(this)
//     this.sortByHelpfulness = this.sortByHelpfulness.bind(this)
//     this.displayRev = this.displayRev.bind(this)
//   }
//   componentDidMount() {
//     this.getReviews()
//   }

//   getReviews () {
//     axios.post('/reviews', {count: this.state.reviewCount, productId: this.state.currentProduct })
//       .then(({data}) => this.setState({reviews: data.results}))
//       .then(() => this. displayRev())
//       .then(() => this.getAvgStars())
//       .then(() => this.getPercRecs())
//       .then(() => this.getAllStars())
//       .catch((err) => console.error(err))
//   }

//   displayRev() {
//     if (this.state.reviewCount < this.state.reviews.length) {
//       const dispArr = [];
//       for (var i =0; i < this.state.reviewCount; i++) {
//         dispArr.push(this.state.reviews[i])
//       }
//       if (this.state.reviews.length - this.state.reviewCount > 1) {
//         this.setState({displayReviews: dispArr, reviewCount: this.state.reviewCount + 2})
//       } else {
//         this.setState({displayReviews: dispArr, reviewCount: this.state.reviewCount + 1})
//       }
//     }
//   }

//   getAvgStars () {
//     var total = 0;
//     this.state.reviews.forEach(ele => {
//       total += ele.rating
//     })
//     this.setState({avgStars: total/this.state.reviews.length})
//   }

//   getPercRecs () {
//     var total = 0;
//     this.state.reviews.forEach(ele => {
//       if (ele.recommend) total ++;
//     });
//     this.setState({recommendations: (total / this.state.reviews.length * 100).toFixed(0) + '%'})
//   }

//   getAllStars () {
//     this.state.reviews.forEach(ele => {
//       this.setState({stars: [...this.state.stars, ele.rating]})
//     })
//   }

//   sortByLowestStars() {
//     const sorter = (a, b) => {
//       return a.rating - b.rating
//     }
//     this.setState({displayReviews: this.state.displayReviews.sort(sorter)})
//   }
//   sortByHighestStars() {
//     const sorter = (a, b) => {
//       return b.rating - a.rating
//     }
//     this.setState({displayReviews: this.state.displayReviews.sort(sorter)})
//   }
//   sortByHelpfulness() {
//     const sorter = (a, b) => {
//       return b.helpfulness - a.helpfulness
//     }
//     this.setState({displayReviews: this.state.displayReviews.sort(sorter)})
//   }
//   sortByRecent() {
//     const sorter = (a, b) => {
//       return new Date(b.date) - new Date(a.date)
//     }
//     this.setState({displayReviews: this.state.displayReviews.sort(sorter)})
//   }

//   render () {
//     return (
//       <div className="container">
//         <Row>
//         <div className="col-sm">
//           <Header />
//           {/* <RatingsGraph recs={this.state.recommendations} stars={this.state.stars} avgStars={this.state.avgStars}/> */}
//         </div>
//         <div className="col-sm">
//           <Row>
//             <Col sm={2}>
//               <p style={style2}>Sort By </p>
//             </Col>
//             <Col sm={10}>
//               <Button variant="outline-secondary" size="sm" style={style} onClick={this.sortByRecent}>Recent</Button>
//               <Button variant="outline-secondary" size="sm" style={style} onClick={this.sortByHelpfulness}>Relevant</Button>
//               <Button variant="outline-secondary" size="sm" style={style} onClick={this.sortByHighestStars}>Highest Rated</Button>
//               <Button variant="outline-secondary" size="sm" style={style} onClick={this.sortByLowestStars}>Lowest Rated</Button>
//             </Col>
//           </Row>
//           <Reviews reviews={this.state.displayReviews}/>
//           <Footer currentItemId={this.state.currentProduct} getMoreReviews={this.displayRev} />
//         </div>
//         </Row>
//       </div>
//     )
//   }
// }