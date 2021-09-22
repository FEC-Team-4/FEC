import React, { useState } from 'react'
import AddReview from './AddReview/AddReview.jsx'
import { Button, Modal} from 'react-bootstrap';

const style = {
    margin: "10px"
  }

const Footer = (props) => {

  const [addReview, setAddReview] = useState(false);
  const [showModal, setModal] = useState(false);

  const changeModal = () => {
    setModal((prev) => !prev);
  }
  const show = () => {
    if (!props.hide && props.reviewLength !== 0) {
      return (
        <div>
          <Button onClick={props.getMoreReviews} style={style} title="more-review">More Reviews</Button>
          <Button onClick={() => changeModal()} style={style} title="add-review">Add a Review +</Button>
        </div>
      )
    } else {
      return (
        <div>
        <Button onClick={() => changeModal()} style={style} title="add-review">Add a Review +</Button>
        </div>
      )
    }
  }

  const view = () => {
    return (
      <div>
        <Modal show={showModal} size="xl">
          <AddReview cancel={changeModal} productId={props.currentItemId} />
        </Modal>
        {show()}
      </div>
      )
  }

  return (
    <div>{view()}</div>
  )
}

export default Footer

