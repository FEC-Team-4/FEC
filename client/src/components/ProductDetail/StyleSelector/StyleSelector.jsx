import React, {useState, useEffect} from 'react';
import { Row, Col, Form, Spinner } from 'react-bootstrap';
import './style-selector.css';
import Renderqty from './Renderqty.jsx';
import Socialshare from './Socialshare.jsx';
import Img from "react-cool-img";


function StyleSelector (props) {
  const [currentStyleInfo, setCurrentstyleinfo] = useState({});
  const [skus, setSkus] = useState([]);
  const [size, setSize] = useState('default');
  const [qty, setQty] = useState('-');

  useEffect(() => {
    const currentStyle = props.styles.find(style => {
          return style.style_id === props.styleId
        });
        if (currentStyle) {
          setCurrentstyleinfo(currentStyle);
        }
  },[props.styleId])

  useEffect(() => {
    if (currentStyleInfo) {
      const instockSku = [];
      for (var key in currentStyleInfo.skus) {
        if (currentStyleInfo.skus[key].quantity > 0) {
          instockSku.push({id: key, qty: currentStyleInfo.skus[key].quantity, size: currentStyleInfo.skus[key].size})
        }
      }
      setSkus(instockSku);
    }
  },[currentStyleInfo])

  const clickHandler = (e) => {
    props.clickSelector(parseInt(e.target.value))
  }

  const handleChange = (e) => {
    setSize(parseInt(e.target.value));
  }
  const handleQtyChange = (qty) => {
    console.log(qty)
    setQty(qty);
  }

  if(currentStyleInfo) {
  return (
    <div className="form">
      <Row style={{fontStyle: "italic", fontWeight:500}}>
        {currentStyleInfo.sale_price !== null ? <span className="sale">${currentStyleInfo.sale_price}&nbsp;&nbsp;<s>${currentStyleInfo.original_price}</s></span> :
        <span>${currentStyleInfo.original_price}</span>
        }

      </Row>
      <Row className="pt-5 pb-3">
        <p className="style">STYLE > <span>{currentStyleInfo.name}</span></p>
        <Form className="style-select-main">
          <Row>
        {props.styles.map(style => {
              return style.style_id !== props.styleId ?
              <Col md={3} key = {style.style_id}>
                <label key = {style.style_id}>
                  <input onChange={(e)=> clickHandler(e)} type="radio" name= "styleselector" value = {style.style_id} />
                  <Img src={style.photos[0].thumbnail_url} alt ="style thumbnail"/>
              </label> </Col>:
              <Col md={3} key = {style.style_id}>
              <label key = {style.style_id}>
              <input type="radio" name= "styleselector" value = {style.style_id} defaultChecked/>
              <Img src={style.photos[0].thumbnail_url} alt ="style thumbnail"/>
              <div className="checkouter">
                <span className="checkmark"></span>
              </div>
          </label></Col>
            })}
            </Row>
        </Form>
      </Row>
      <Row className="py-3">
        <Col md={9} className="fec-size">
          {skus.length > 0 ? (
            <select value={size} onChange={handleChange}>
            <option value="default">Select Size</option>
              {skus.map(sku => {
                return <option key ={sku.id} value={sku.id}>{sku.size}</option>
              })}
              </select>
            ) : (
              <fieldset disabled="disabled">
                <select>
                    <option disabled="disabled" defaultValue="selected">OUT OF STOCK</option>
                </select>
              </fieldset>
            )
          }
        </Col>
        <Col md={3} className="fec-qty">
          <Renderqty handleQtyChange = {handleQtyChange} skus = {skus} size = {size} qty = {qty}/>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
        {skus.length > 0 ? (
          <a href="#" className="btn w-100 btn-lg btn-outline-primary">Add to cart</a>
          ) : (
            null
          )
        }
        </Col>
    </Row>
    <Socialshare />
    </div>
  )
  } else {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      )
  }
}

export default StyleSelector;