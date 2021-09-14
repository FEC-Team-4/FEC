import React, { useState } from 'react'

const RatingsGraph = (props) => (
    <div>
      <div>Product has: {props.avgStars} stars</div>
      <div> {props.recs} of buyers recommend this product</div>
    </div>
  )

export default RatingsGraph