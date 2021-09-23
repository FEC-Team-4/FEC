import React from "react";
import { render, fireEvent } from '@testing-library/react'
// import { queryByTestId } from '@testing-library/dom'
import RatingsReviews from "./RatingsReviews.jsx";

test("Application root", () => {
  render(<RatingsReviews/>)
})

it('creates an add review button', () => {
  const { queryByTitle } = render(<RatingsReviews productId={42366}/>)
  const btn = queryByTitle('add-review')
  expect(btn).toBeTruthy();
})

it('creates a more review button', () => {
  const { queryByTitle } = render(<RatingsReviews productId={42366}/>)
  const btn = queryByTitle('more-review')
  expect(btn).toBeTruthy();
})

it('creates a dropdown menue ', () => {
  const { queryByTitle } = render(<RatingsReviews />)
  const dropdown = queryByTitle('dropdown')
  expect(dropdown).toBeTruthy();
})

it('creates a stars progress bar', () => {
  const { queryByTitle } = render(<RatingsReviews />)
  const stars = queryByTitle('stars-status')
  expect(stars).toBeTruthy();
})

it('creates a large avg display ', () => {
  const { queryByTitle } = render(<RatingsReviews />)
  const avg = queryByTitle('avg-rating')
  expect(avg).toBeTruthy();
})

//failing since there's no product number being passed in
it('creates a status bars for breaking down characteristics ', () => {
  const { queryByTitle } = render(<RatingsReviews />)
  const bars = queryByTitle('status-bars')
  expect(bars).toBeTruthy();
})

it('creates a more review body', () => {
  const { queryByTitle } = render(<RatingsReviews productId={42366}/>)
  const section = queryByTitle('review-body')
  expect(section).toBeTruthy();
})

it('creates a ratings graph component', () => {
  const { queryByTitle } = render(<RatingsReviews productId={42366}/>)
  const section = queryByTitle('ratings-graph')
  expect(section).toBeTruthy()

})