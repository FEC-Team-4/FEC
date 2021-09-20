import React from 'react'
import { Row, Badge } from 'react-bootstrap';
import './product-meta.css'

function ProductMeta (props) {
  return (
    <Row className="pt-4 pb-2">
      <span className ="category">{props.product.category}</span>
      <h2>{props.product.name}</h2>
    </Row>
  )

}

export default ProductMeta;