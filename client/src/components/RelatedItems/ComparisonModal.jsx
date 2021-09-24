import React from "react";
import ReactDOM from "react-dom";
import { Modal, Button, Table } from 'react-bootstrap';

import "./RelatedItems.css";


const ComparisonModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Item Comparison
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Table  bordered  size="sm">
        <thead>
          <tr>
            <th>CURRENT ITEM</th>
            <th>FEATURE COMPARISON</th>
            <th>SELECTED ITEM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>X</td>
            <td>buttons</td>
            <td></td>
          </tr>
          <tr>
            <td>X</td>
            <td>long sizing</td>
            <td>X</td>
          </tr>
          <tr>
            <td>X</td>
            <td>stretch</td>
            <td>X</td>
          </tr>
        </tbody>
      </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ComparisonModal;