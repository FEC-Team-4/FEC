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
  height: 375px;
  width: 100%;
  margin: 0 15px;
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CarouselTwo = () => {
  return (
    <>
      <h1 style={{ textAlign: "left" }}>Related Items</h1>
      <FlexContainer>
        <Carousel breakPoints={breakPoints} control={false}>
          <Item>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" />
              <Card.Body>
              <Card.Text>
              Category
              </Card.Text>
              <Card.Text>
                Name
              </Card.Text>
              <Card.Text>
                Price
              </Card.Text>
              <StarRatings
                  rating={3}
                  starDimension="15px"
                  starSpacing="0.5px"
                  starRatedColor="black"
                  numberOfStars={5}
                  name='rating'
              />
              </Card.Body>
            </Card>
          </Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </FlexContainer>
    </>
  );
}

export default CarouselTwo;








