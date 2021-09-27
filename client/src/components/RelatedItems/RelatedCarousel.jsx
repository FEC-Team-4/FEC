import React, {useState, useContext} from "react";
import { dataContext } from '../context/dataContext.js';
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import { Card, Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import ComparisonModal from './ComparisonModal.jsx';

import "./RelatedItems.css";

const Item =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  margin: 0 15px;
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const RelatedCarousel = (props) => {

  const [modalShow, setModalShow] = React.useState(false);
  const { productId, setProductId } = useContext(dataContext);


  // const handleClick = (id) => {
  //   // props.relatedProductClick(parseInt(id))
  //   setProductId(parseInt(id));
  // };

  return (
    <>
      <h2 style={{ textAlign: "left" }}>Related Items</h2>
      <FlexContainer>
        <Carousel breakPoints={breakPoints} control={false}>
          {props.info.map(item => {
            return(
              <Item key={item.product_id}>
                <Card style={{ width: '15rem' }} onClick={() => setProductId(parseInt(item.product_id))}>
                <Button variant="light" onClick={() => setModalShow(true)}>Compare</Button>
                  <ComparisonModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  <Card.Img alt="Product Image" variant="top" src={
                    item.results[0].photos[0].thumbnail_url
                    ? item.results[0].photos[0].thumbnail_url
                    : "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
                  } />
                  <Card.Body>
                  <Card.Text>
                  {item.category}
                  </Card.Text>
                  <Card.Text>
                    {item.results[0].name}
                  </Card.Text>
                  <Card.Text>
                    {`$${item.results[0].original_price}`}
                  </Card.Text>
                  <StarRatings
                      rating={
                        item.rating
                        ? item.rating
                        : 0
                      }
                      starDimension="15px"
                      starSpacing="0.5px"
                      starRatedColor="black"
                      numberOfStars={5}
                      name='rating'
                  />
                  </Card.Body>
                </Card>
              </Item>
            )
          })}
        </Carousel>
      </FlexContainer>
    </>
  );
}

export default RelatedCarousel;








