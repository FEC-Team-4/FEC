import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import { Card, Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

import "./RelatedItems.css";

const Item =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  margin: 0 15px;
  background-color: grey;
  color: grey;
  font-size: 10vw;
  text-align: center;
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

const YourOutfit = (props) => {


  // const handleClick = (id) => {
  //   props.relatedProductClick(parseInt(id))
  // };

  return (
    <>
      <h2 style={{ textAlign: "left" }}>Your Outfit</h2>
      <FlexContainer>
        <Carousel breakPoints={breakPoints} control={false}>
              <Item >
                <Card style={{ width: '15rem' }}>
                  <Card.Body>
                    +
                  </Card.Body>
                </Card>
              </Item>
        </Carousel>
      </FlexContainer>
    </>
  );
}

export default YourOutfit;








