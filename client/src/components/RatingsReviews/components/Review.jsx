import React from 'react'

class Review extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h6 className="col-md-6 text-right">{this.props.review.rating} Stars</h6>
        <h6>{this.props.review.date.split('T')[0]}</h6>
        <p className="text-justify">{this.props.review.body}</p>
      </div>
    )
  }
}

export default Review