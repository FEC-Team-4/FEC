import React from 'react'
import { Row, Badge } from 'react-bootstrap';

function ProductMeta () {
  return (
    <Row className="py-4">
      <span>CATEGORY</span>
      <h2>Expanded Product Name</h2>
      <span><s>$99.00</s> $49.00</span>
    </Row>
  )

}

export default ProductMeta;