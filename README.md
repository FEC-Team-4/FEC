# FEC-ProjectCatwalk
Front End Capstone Project at Hack Reactor.

## Motivation

This project was designed to increase our understanding of building, maintaining, and optimizing a full react application. While the project was completed as a group, each individual was fully responsible for their own component. 

## Component Details
### Main Product Overview
Product Overview displays a primary product with product information:
  - A gallery of product images
  - An assortment of styles to select for each product
  - Product descriptions, slogans, features, and pricing
  - Size and quantity available

### Related Products and Your Outfit

Related Products displays product cards of similar items that may interest the user. This component includes:
  - Scrollable list of product cards
  - Conditionally rendered scroll buttons

### Ratings & Reviews

Ratings and Reviews displays dynamically rendered client reviews and their ratings meta data for the selected product.
  - Server side caching system to reduce number of API requests to two upon page load
  - Star filtration functionality to designed to retrieve reviews of specific star rating
  - Scrollable list of reviews with conditionally rendered subcomponents


### Built With

* [React](https://reactjs.org/)
* [Node](https://nodejs.dev/)
* [Express](https://expressjs.com/)
* [Babel, Webpack]()
* [Jest, Enzyme, Webpack]()
* [React Bootstrap](https://react-bootstrap.github.io/)

## Installation

To get a local copy up and running:

###### Instructions
1. Clone the repo
   ```sh
   git clone https://github.com/FEC-Team-4/FEC.git
   ```
2. Acquire a github personal access token to acquire access to the API. Insert token into example.config.js and rename file to config.js
3. Install NPM packages
   ```sh
   npm install
    ```
3. Compile Webpack
   ```sh
   npm build
    ```
4. Start the server
   ```sh
   npm start
    ```
5. Navigate to localhost:3000

## Team

* Pritam Sarker - Product Overview

* Nicholas Ma - Questions and Answers

* Cassandra Barragan - Related Products
  * https://github.com/cassbarragan
  * https://www.linkedin.com/in/cassandrabarragan/

* Richard - Ratings and Reviews

