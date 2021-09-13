import React, { useState } from 'react'

class RatingsGraph extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <div>Product has: {this.props.avgStars} stars</div>
        <div> {this.props.recs} of buyers recommend this product</div>
      </div>
    )
  }
}

// {Math.floor(percentageCount * 100)}%

export default RatingsGraph