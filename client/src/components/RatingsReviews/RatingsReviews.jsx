import React, { useState, useContext, useEffect } from 'react'
import Header from './components/Header.jsx'
import RatingsGraph from './components/RatingsGraph.jsx'
import Reviews from './components/Review/Reviews.jsx'
import Footer from './components/Footer.jsx'
import axios from 'axios'
import './RatingsReviews.css'
import { Row, Col, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { dataContext } from '../context/dataContext.js';

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
  }, [more, sort, props.productId])

  const getReviews = () => {
    axios.post('/reviews', {count: counter, productId: props.productId, sort: sort})
      .then((results) => setReviews(() => results.data.results))
      .then(() => setCounter((prev) => prev + 2))
      .then(() => counter - reviews.length > 2 ? setHide(prev => !prev) : setHide(prev => (prev)))
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
  }, [props.productId])

  return (
    <div className="container">
      <div className="row">
      <div className="col-sm">
        <Header />
        <RatingsGraph currentItemId={props.productId} title="ratings-graph" recommend={recommend} characteristics={characteristics} stars={stars}/>
      </div>
      <div className="col-sm">
        <div title="dropdown" className="py-4">
        <Dropdown as={ButtonGroup}>
          <Button variant="success">Sort By</Button>
          <Dropdown.Toggle split variant="success"/>
          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => {
              setSort(() => "newest")
              setCounter(() => 2)}}
              value="newest">
                Newest
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => {
              setSort(() => "relevent")
              setCounter(() => 2)}}
               value="relevent">
                 Relevent
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => {
              setSort(() => "helpful")
              setCounter(() => 2)}}
              value="helpful">
                Helpful
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
        <div title="review-body">
          <Reviews reviews={reviews}/>
        </div>
        <Footer reviewLength={reviews.length} currentItemId={props.productId} getMoreReviews={setMore} hide={hide}/>
      </div>
      </div>
    </div>
  )
}

export default RatingsReviews;