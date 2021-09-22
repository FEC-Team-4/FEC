import React from 'react'
import { Row, Col} from 'react-bootstrap';
import { Facebook, Twitter, Pinterest } from 'react-social-sharing'
import './style-selector.css';

function Socialshare (props) {


  return (
    <Row className="py-4">
      <Col md ={12} className ="share">
        <Facebook solid big link="https://github.com" />
        <Twitter solid big link="https://github.com" />
        <Pinterest solid big link="https://github.com" />
      </Col>
    </Row>
  )
}


export default Socialshare;