import React from 'react'

class Review extends React.Component {
  constructor (props) {
    super(props)
  }

  ifRec() {
    if (this.props.review.recommend) {
      return (
        <p> &#10004; I recommend this product</p>
      )
    }
  }
  oneStars() {
    if (this.props.review.rating === 1) {
      return (
        <span>
        <span className="fa fa-star checked"></span>
        </span>
      )
    }
    if (this.props.review.rating === 2) {
      return (
        <span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        </span>
      )
    }
    if (this.props.review.rating === 3) {
      return (
        <span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        </span>
      )
    }
    if (this.props.review.rating === 4) {
      return (
        <span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        </span>
      )
    }
    if (this.props.review.rating === 5) {
      return (
        <span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        </span>
      )
    }
  }


  render() {
    return (
      <div>
        {this.oneStars()}
        <h6>{this.props.review.date.split('T')[0]}</h6>
        <h4>{this.props.review.summary}</h4>
        <p className="text-justify">{this.props.review.body}</p>
        <p><i>Helpful? <a href="">Yes</a> ({this.props.review.helpfulness}) </i> || Report</p>
      </div>
    )
  }
}

export default Review