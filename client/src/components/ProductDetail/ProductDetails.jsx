import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Announcement from './Announcement/Announcement.jsx'
import ProductMeta from './ProductMeta/ProductMeta.jsx'
import ProductGallery from './ProductGallery/ProductGallery.jsx'
import StarRatings from './StarRatings/StarRatings.jsx'
import StyleSelector from './StyleSelector/StyleSelector.jsx'

function ProductDetails () {
  return (
    <>
    <Announcement />
    <section className="pt-4 pb-5">
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

}

export default ProductDetails;