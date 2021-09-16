import React from 'react'
import axios from 'axios'

const apiKey = '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'

const bg = {
  padding: "15px",
  backgroundColor: '#d3d3d3',
  borderRadius: '10px'
}

const bg2 = {
  padding: "15px",
  // backgroundColor: '#d3d3d3',
  borderRadius: '10px'
}



class Review extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      feedback: false,
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
  addColor() {
    if (this.props.bgCount % 2 === 0) {
      return (
        <div style={bg2}>
          {this.oneStars()}
          <h6>User: {this.props.review.reviewer_name} | {this.props.review.date.split('T')[0]}</h6>
          <h4>{this.props.review.summary}</h4>
          <p className="text-justify">{this.props.review.body}</p>
          {this.thanks()}
        </div>
      )
    } else {
      return (
        <div style={bg}>
          {this.oneStars()}
          <h6>User: {this.props.review.reviewer_name} | {this.props.review.date.split('T')[0]}</h6>
          <h4>{this.props.review.summary}</h4>
          <p className="text-justify">{this.props.review.body}</p>
          {this.thanks()}
        </div>
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
        <p><i>Helpful? <a href="#" onClick={this.helpful} >Yes</a> ({this.props.review.helpfulness}) </i> || <a href="#">Report</a></p>
        </div>
      )
    }
  }

  helpful() {
    axios.put('/helpful', {productId: this.props.review.review_id})
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
        {this.addColor()}
      </div>
    )
  }
}

export default Review