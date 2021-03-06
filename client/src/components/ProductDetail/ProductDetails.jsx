import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios'
import token from './token'
import { Row, Col, Spinner } from 'react-bootstrap';
import Announcement from './Announcement/Announcement.jsx'
import ProductMeta from './ProductMeta/ProductMeta.jsx'
import ProductGallery from './ProductGallery/ProductGallery.jsx'
import Productratings from './StarRatings/StarRatings.jsx'
import StyleSelector from './StyleSelector/StyleSelector.jsx'
import AdditionalInfo from './AdditionalInfo/AdditionalInfo.jsx'



function ProductDetails (props) {
  const [productinfo, setProductinfo] = useState({});
  const [selectedStyle, setSelectedstyle] = useState(null);
  const [styleList, setStylelist] = useState([]);
  const [expandedClass, setExpandedclass] = useState(8);

  useEffect(() => {
    const loadinfo = async () => {
      const response = await axios.post('/products', {productId: props.id});
      setProductinfo(response.data)
    }
    loadinfo();
    axios.post('/products/styles', {id: props.id})
    .then(results => {
      setStylelist(results.data.results);
      setSelectedstyle(results.data.results[0].style_id);
    })
  }, [props.id])

  //this block seems redundant- we tested and everything appears to be working.
  // useEffect(() => {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${props.id}/styles`, {
  //       headers: {Authorization: token}
  //     })
  //     .then(results => {
  //       setStylelist(results.data.results);
  //     })
  // }, [selectedStyle])

  const clickSelector = styleId => {
    setSelectedstyle(styleId)
  }

  const expandedView = (e) => {
    // if (expandedClass === 8) {
    //   setExpandedclass(12)
    // } else {
    //   setExpandedclass(8)
    // }
    setExpandedclass(12)
  }
    if (productinfo && styleList) {
      return (
      <>
      <Announcement />
      <section className="pb-5">
          <Row>
            <Col md={expandedClass}>
                <ProductGallery styleList = {styleList} styleId = {selectedStyle} zoomIn = {expandedView}/>
            </Col>
            <Col md={4} className="product-meta">
              <Productratings id = {props.id}/>
              <ProductMeta product = {productinfo}/>
              <StyleSelector styles = {styleList} styleId = {selectedStyle} clickSelector = {clickSelector}/>
            </Col>
          </Row>
      </section>
      <AdditionalInfo productInfo = {productinfo}/>
      </>
      )
    } else {
      return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      )
    }

}

export default ProductDetails;