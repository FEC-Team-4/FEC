import React, { useState, useEffect } from 'react'
import StarRatings from 'react-star-ratings';
import { Row, Col, ProgressBar } from 'react-bootstrap';

const RatingsGraph = (props) => {
  const [stars, setStars] = useState(0);
  const [oneStar, set1] = useState(0);
  const [twoStar, set2] = useState(0);
  const [threeStars, set3] = useState(0);
  const [fourStar, set4] = useState(0);
  const [fiveStar, set5] = useState(0);
  const [recommend, setRecommend] = useState(0);


  useEffect(() => {
    loop(props.stars, setStars)
  },[props.stars])

  useEffect(() => {
    setAllStars()
  }, [stars])

  const loop = (obj, setFunc) => {
    for (const star in obj) {
      setFunc((prev) => prev +=parseInt(obj[star]))
    }
  }
  const setAllStars = () => {
    set1(() => parseInt(props.stars[1]) / stars * 100)
    set2(() => parseInt(props.stars[2]) / stars * 100)
    set3(() => parseInt(props.stars[3]) / stars * 100)
    set4(() => parseInt(props.stars[4]) / stars * 100)
    set5(() => parseInt(props.stars[5]) / stars * 100)
  }
  const progressBar = () => {
    for (var i = 0; i < 5; i++) {
      return (
        <div>
          <div>
            One Star
            <ProgressBar now={oneStar}/>
          </div>
          <div>
            Two Star
            <ProgressBar now={twoStar}/>
          </div>
          <div>
            Three Star
            <ProgressBar now={threeStars}/>
          </div>
          <div>
            Four Star
            <ProgressBar now={fourStar}/>
          </div>
          <div>
            Five Star
            <ProgressBar now={fiveStar}/>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="container">
      <Row>
        <Col sm={7}>
          <StarRatings
              rating={5}
              starRatedColor="#93D2DF"
              numberOfStars={5}
              name='rating'
          />
        </Col>
        <Col sm={2}>
          {/* <h1>{props.avgStars.toFixed(1)}</h1> */}
          <h1>hi</h1>
        </Col>
      </Row>
      <Col sm={7}>
      <div>
        {progressBar()}
      </div>
      <div> <i>{Math.floor(props.recommend.true / stars * 100)}% of buyers recommend this product</i></div>
      </Col>
    </div>
  )
}


export default RatingsGraph