import React, { useState, useContext, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';

function AdditionalInfo (props) {
  const [featureList, setfeatureList] = useState([]);

  // useEffect(() => {
  //   const featureList = props.product.features.map(item => {
  //     return `<li>${item.feature} : ${item.value}</li>`
  //   });
  //   setfeatureList(featureList);
  // })

  return (
    <section className="additional-info py-3">
      <div className="container ">
        <Row>
          <Col md={1}></Col>
          <Col md={6}>
            <h5>{props.product.slogan}</h5>
            <p>{props.product.description}</p>
          </Col>
          <Col md={4}>
          <ul className="list-features">
            {featureList}
          </ul>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
  </section>
  )

}

export default AdditionalInfo;