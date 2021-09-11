import React from 'react'

class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      addReview: false,
    }
    this.addReview = this.addReview.bind(this)
  }
  addReview() {
    this.setState({addReview: !this.state.addReview})
  }

  view () {
    if (this.state.addReview) {
      return (
        <div>
          <textarea placeholder="write your review here"></textarea>
          <input type="text" placeholder="username"></input>
          <button>Submit</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.props.getMoreReviews}>More Reviews</button>
          <button onClick={this.addReview}>Add a Review +</button>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.view()}
      </div>
    )
  }
}

export default Footer