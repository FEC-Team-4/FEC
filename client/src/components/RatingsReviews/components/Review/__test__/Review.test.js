import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './../Reviews.js'

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Reviews></Reviews>, div)
})