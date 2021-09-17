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

  const view = () => {
    return (
      <div>
        <Modal show={showModal} size="xl">
          <AddReview cancel={changeModal} productId={props.currentItemId} />
        </Modal>
        <Button onClick={props.getMoreReviews} style={style}>More Reviews</Button>
        <Button onClick={() => changeModal()} style={style}>Add a Review +</Button>
      </div>
      )
  }

  return (
    <div>{view()}</div>
  )
}

export default Footer

