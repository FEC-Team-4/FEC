import React from 'react'
import axios from 'axios'

const apiKey = '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'


class Review extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      feedback: false
    }
    this.helpful = this.helpful.bind(this)
  }

  ifRec() {
    if (this.props.review.recommend) {
      return (
        <p> &#10004; I recommend this product</p>
      )
    }
  }

  thanks() {
    if (this.state.feedback) {
      return (
        <p>
          Thanks for your feedback :)
        </p>
      )
    } else {
      return (
        <div>
        <p><i>Helpful? <a href="#" onClick={this.helpful} >Yes</a> ({this.props.review.helpfulness}) </i> || <a href="">Report</a></p>
        </div>
      )
    }
  }

  helpful() {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/${this.props.review.review_id}/helpful`, {}, {headers: {Authorization: apiKey }})
    .then(() => this.setState({feedback: true}))
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
        <h6>User: {this.props.review.reviewer_name} | {this.props.review.date.split('T')[0]}</h6>
        <h4>{this.props.review.summary}</h4>
        <p className="text-justify">{this.props.review.body}</p>
        {this.thanks()}
      </div>
    )
  }
}

export default Review