import React, {useState, useEffect} from 'react'
import { Row, Col, Form, Spinner } from 'react-bootstrap';
import './style-selector.css'
function StyleSelector (props) {
  const [currentStyleInfo, setCurrentstyleinfo] = useState(null);
  const [skus, setSkus] = useState([]);
  const [size, setSize] = useState('Select Size');

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
    console.log(skus)
  },[currentStyleInfo])

  const clickHandler = (e) => {
    props.clickSelector(parseInt(e.target.value))
  }

  const handleChange = (e) => {
    setSize(parseInt(e.target.value));
  }

  if(currentStyleInfo) {
  return (
    <div className="form">
      <Row>
        {currentStyleInfo.sale_price !== null ? <span className="sale">${currentStyleInfo.sale_price}&nbsp;&nbsp;<s>${currentStyleInfo.original_price}</s></span> :
        <span>${currentStyleInfo.original_price}</span>
        }

      </Row>
      <Row className="py-5">
        <p className="style">STYLE > <span>{currentStyleInfo.name}</span></p>
        <Form className="style-select-main">
        {props.styles.map(style => {
              return style.style_id !== props.styleId ?
                <label key = {style.style_id}>
                  <input onChange={(e)=> clickHandler(e)} type="radio" name= "styleselector" value = {style.style_id} />
                  <img src={style.photos[0].thumbnail_url} />
              </label> :
              <label key = {style.style_id}>
              <input type="radio" name= "styleselector" value = {style.style_id} defaultChecked/>
              <img src={style.photos[0].thumbnail_url} />
          </label>
            })}
        </Form>
      </Row>
      <Row className="py-5">
      <Col>
      <select value={size} onChange={handleChange}>
      <option value="Select Size">Select Size</option>
        {skus.map(sku => {
          return <option key ={sku.id} value={sku.id}>{sku.size}</option>
        })}
          </select>
      </Col>
      <Col>
        <label htmlFor="quantitySelect">Quantity:</label>
        <input id="quantitySelect" type="number"
        className="form-control quantity  mb-4" name="" value="1" />
      </Col>
      <a href="#" className="btn w-100 btn-lg btn-outline-primary">Add to cart</a>
    </Row>
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