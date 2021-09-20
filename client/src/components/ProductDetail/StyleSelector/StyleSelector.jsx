import React, {useState, useEffect} from 'react'
import { Row, Col, Form, Spinner } from 'react-bootstrap';
import './style-selector.css'
function StyleSelector (props) {
  // console.log(props.styles)
  const [imageList, setImageList] = useState([]);
  const [currentStyleInfo, setCurrentstyleinfo] = useState(null);
  const [skus, setSkus] = useState(null);

  useEffect(() => {
    const currentStyle = props.styles.find(style => {
          return style.style_id === props.styleId
        });
        if (currentStyle) {
          // const images = currentStyle.photos.map(photo => {
          //   return {img: photo.url, thumb: photo.thumbnail_url}
          // })
          setCurrentstyleinfo(currentStyle)
          setSkus(currentStyle.skus)
        }
  },[props.styleId])

  const clickhandler = (e)=> {
    props.clickSelector(parseInt(e.target.value))
  }

  const processSku = () => {
    console.log(currentStyleInfo)
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
                  <input onChange={(e)=> clickhandler(e)} type="radio" name= "styleelector" value = {style.style_id} />
                  <img src={style.photos[0].thumbnail_url} />
              </label> :
              <label key = {style.style_id}>
              <input type="radio" name= "styleelector" value = {style.style_id} defaultChecked/>
              <img src={style.photos[0].thumbnail_url} />
          </label>
            })}
        </Form>
      </Row>
      <Row className="py-5">
      <Col>
      {props.styles.map(style => {
              return style.style_id !== props.styleId ?
                <label key = {style.style_id}>
                  <input onChange={(e)=> clickhandler(e)} type="radio" name= "styleelector" value = {style.style_id} />
                  <img src={style.photos[0].thumbnail_url} />
              </label> :
              <label key = {style.style_id}>
              <input type="radio" name= "styleelector" value = {style.style_id} defaultChecked/>
              <img src={style.photos[0].thumbnail_url} />
          </label>
            })}
        <option>Select Size</option>
        <option value="1">Small</option>
        <option value="2">Medium</option>
        <option value="3">Large</option>
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