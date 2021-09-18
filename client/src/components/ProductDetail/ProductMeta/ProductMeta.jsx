import React from 'react'
import { Row, Badge } from 'react-bootstrap';
import './product-meta.css'

function ProductMeta (props) {
  return (
    <Row className="py-4">
      <span className ="category">{props.product.category}</span>
      <h2>{props.product.name}</h2>
      <span><s>$99.00</s> $49.00</span>
    </Row>
  )

}

export default ProductMeta;