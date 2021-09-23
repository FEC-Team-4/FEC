import React, { useState, useContext, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import './additional-info.css'

function AdditionalInfo (props) {
  const [featureList, setfeatureList] = useState([]);
  return (
    <section className="additional-info py-3">
      <div className="container ">
        <Row>
          <Col md={1}></Col>
          <Col md={7}>
            <p className="slogan">{props.productInfo.slogan}</p>
            <p>{props.productInfo.description}</p>
          </Col>
          <Col md={3} style={{borderLeft: "3px solid #999",  display: "flex", alignItems: "center"}}>
          <ul className="list-features">
              {props.productInfo.features ?
                props.productInfo.features.map((feature, i) => {
                  return <li key = {i}><strong>{feature.feature} : </strong>{feature.value}</li>
                }) : null
              }
          </ul>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
  </section>
  )

}

export default AdditionalInfo;