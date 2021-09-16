import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import Announcement from './Announcement/Announcement.jsx'
import ProductMeta from './ProductMeta/ProductMeta.jsx'
import ProductGallery from './ProductGallery/ProductGallery.jsx'
import StarRatings from './StarRatings/StarRatings.jsx'
import StyleSelector from './StyleSelector/StyleSelector.jsx'

function ProductDetails () {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

    if (mounted) {
      return (
      <>
      <Announcement />
      <section className="pb-5">
          <Row>
            <Col md={7}>
              <ProductGallery />
            </Col>
            <Col md={5}>
              <StarRatings />
              <ProductMeta />
              <StyleSelector />
            </Col>
          </Row>
      </section>
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