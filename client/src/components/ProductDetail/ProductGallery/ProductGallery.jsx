import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import _ from "lodash"
import Img from "react-cool-img";
import Slider from "react-slick";
import './product-gallery.css'

function ProductGallery (props) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [zoom, setZoom] = useState('main normal');

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = {zoom};
  //   script.async = true;
  //   document.body.appendChild(script);
  // return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);


  useEffect(() => {
    const currentStyle = props.styleList.find(style => {
          return style.style_id === props.styleId
        });
        if (currentStyle) {
          const images = currentStyle.photos.map(photo => {
            return {img: photo.url, thumb: photo.thumbnail_url}
          })
          setImageList(images)
        }
  },[props.styleId])

  const zoomHandler = (e) => {
    if (e.target.classList.contains("normal")) {
      props.zoomIn();
      setZoom('main expanded')
    } else if (e.target.classList.contains("expanded")) {
      setZoom('main zoomed')
    } else if (e.target.classList.contains("zoomed")) {
      setZoom('main normal')
    }
  }


  if (imageList) {
    return (
      <Row>
        <Col md={12} className ="hero">
          <Slider
          asNavFor= {nav2}
          fade= {true}
          ref= {slider1 => setNav1(slider1)}
          arrows= {true}>
            {imageList.map((image, i) => {
              return <div key ="{i}">
                <Img onClick = {(e) => zoomHandler(e)} className = {zoom} src={image.img} alt = "Gallery Image" />
                </div>
            })}
          </Slider>
          <div className ="thumbs">
          <Slider
              asNavFor= {nav1}
              ref= {slider2 => setNav2(slider2)}
              slidesToShow= {imageList.length >= 7 ? 7 : imageList.length}
              swipeToSlide= {true}
              focusOnSelect= {true}
              vertical= {true}
              arrows= {true}
          >
            {imageList.map((image, i) => {
              return <div key ="{i}">
                <Img className="thumb" src={image.thumb} alt="Product Thumbnail"/>
                </div>
            })}
          </Slider>
        </div>
        </Col>
      </Row>
    )
  } else {
    return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    )
  }
}

export default ProductGallery