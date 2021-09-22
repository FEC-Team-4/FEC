import React, {useState, useEffect} from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import './style-selector.css'

function Renderqty (props) {
  // console.log(props)
  let qty = null;
    for (let i = 0; i < props.skus.length; i++) {
      if (parseInt(props.skus[i].id) === props.size) {
        qty = props.skus[i].qty;
      }
    }
  qty = qty >= 15 ? 15 : qty;
  const options = [];
  for (let i = 1; i <= qty; i++) {
    options.push(<option value={i}>{i}</option>)
  }
  return props.size === 'default' ? (
    <fieldset disabled="disabled">
      <select defaultValue="-" >
        <option value="-">{props.qty}</option>
      </select>
    </fieldset>
  ) : (
    <select defaultValue={props.qty} > value="1" onChange={(e) => props.handleQtyChange(e.target.value)}>
          {options}
    </select>
  )
}


export default Renderqty;