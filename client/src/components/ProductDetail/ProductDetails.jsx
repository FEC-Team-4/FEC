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
  // const [images, setImages] = useState([]);

  useEffect(() => {
    const loadinfo = async () => {
      const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${props.id}`, {
        headers: {Authorization: token}
      });
      setProductinfo(response.data)
    }
    loadinfo();
  }, [])

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${props.id}/styles`, {
        headers: {Authorization: token}
      })
      .then(results => {
        setStylelist(results.data.results);
        setSelectedstyle(results.data.results[3].style_id);
      })
  }, [selectedStyle])

  const clickSelector = styleId => {
    console.log('before',selectedStyle)
    setSelectedstyle(styleId)
    console.log('after',selectedStyle)
  }

    if (productinfo && styleList) {
      return (
      <>
      <Announcement />
      <section className="pb-5">
          <Row>
            <Col md={8}>
                <ProductGallery styleList = {styleList} styleId = {selectedStyle}/>
            </Col>
            <Col md={4}>
              <Productratings id = {props.id}/>
              <ProductMeta product = {productinfo}/>
              <StyleSelector styles = {styleList} styleId = {selectedStyle} clickSelector = {clickSelector}/>
            </Col>
          </Row>
      </section>
      <AdditionalInfo product = {productinfo}/>
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