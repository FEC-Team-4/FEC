import React, { useState, useEffect } from 'react'
import StarRatings from 'react-star-ratings';
import { Row, Col, ProgressBar } from 'react-bootstrap';

const style = {
  paddingTop: '25px',
}

const RatingsGraph = (props) => {
  const [stars, setStars] = useState(0);
  const [oneStar, set1] = useState(0);
  const [twoStar, set2] = useState(0);
  const [threeStars, set3] = useState(0);
  const [fourStar, set4] = useState(0);
  const [fiveStar, set5] = useState(0);
  const [recommend, setRecommend] = useState(0);
  const [avgStars, setAvgStars] = useState(0);


  useEffect(() => {
    loop(props.stars, setStars)
    loopForAvg(props.stars, setAvgStars)
  },[props.stars])

  useEffect(() => {
    setAllStars()
  }, [stars])

  const loop = (obj, setFunc) => {
    for (const star in obj) {
      setFunc((prev) => prev +=parseInt(obj[star]))
    }
  }

  const loopForAvg = (obj, setFunc) => {
    for (const star in obj) {
      setFunc((prev) => prev += parseInt(obj[star] * star))
    }
  }
  const setAllStars = () => {
    set1(() => parseInt(props.stars[1]) / stars * 100)
    set2(() => parseInt(props.stars[2]) / stars * 100)
    set3(() => parseInt(props.stars[3]) / stars * 100)
    set4(() => parseInt(props.stars[4]) / stars * 100)
    set5(() => parseInt(props.stars[5]) / stars * 100)
    setAvgStars((prev) => (stars > 0) ? prev / stars : prev)
  }

  const progressBar = () => {
    for (var i = 0; i < 5; i++) {
      return (
        <div>
          <Row>
            <Col sm={4}>
            <i class="fas fa-star"></i>
            </Col>
            <Col sm={7}>
            <ProgressBar striped variant="success" now={oneStar}/>
            </Col>
            <Col sm={1}>
              {props.stars[1] || 0}
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            </Col>
            <Col sm={7}>
            <ProgressBar striped variant="success" now={twoStar}/>
            </Col>
            <Col sm={1}>
              {props.stars[2]}
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            </Col>
            <Col sm={7}>
            <ProgressBar striped variant="success" now={threeStars}/>
            </Col>
            <Col sm={1}>
              {props.stars[3]}
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            </Col>
            <Col sm={7}>
            <ProgressBar striped variant="success" now={fourStar}/>
            </Col>
            <Col sm={1}>
              {props.stars[4]}
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            </Col>
            <Col sm={7}>
            <ProgressBar striped variant="success" now={fiveStar}/>
            </Col>
            <Col sm={1}>
              {props.stars[5]}
            </Col>
          </Row>
        </div>
      )
    }
  }

  return (
    <div className="container">
      <Row>
        <Col sm={7}>
          <StarRatings
              rating={Math.ceil(avgStars / 0.25) * 0.25}
              starRatedColor="#93D2DF"
              numberOfStars={5}
              name='rating'
          />
        </Col>
        <Col sm={2}>
          <h1>{avgStars.toFixed(1)}</h1>
        </Col>
      </Row>
      <Col sm={7}>
      <div style={{
        paddingTop: '25px',
        textAlign: 'center'
      }}>
        <p>{stars} total reviews</p>
      </div>
      <div style={style}>
        {progressBar()}
      </div>
      <div> <i>{Math.floor(props.recommend.true / stars * 100)}% of buyers recommend this product</i></div>
      </Col>
    </div>
  )
}


export default RatingsGraph