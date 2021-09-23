import React from "react";
import { render, fireEvent } from '@testing-library/react'
import RelatedItems from "./RelatedItems.jsx";

test("Application root", () => {
  render(<RatingsReviews/>)
})

it('creates an add review button', () => {
  const { queryByTitle } = render(<RatingsReviews />)
  const btn = queryByTitle('add-review')
  expect(btn).toBeTruthy();
})

it('creates a more reviews button', () => {
  const { queryByTitle } = render(<RatingsReviews />)
  const btn = queryByTitle('more-review')
  expect(btn).toBeTruthy()
})

describe('click more reviews', () => {
  it('onClick', () => {
    const { queryByTitle } = render(<RatingsReviews />)
    const btn = queryByTitle('more-review')
    fireEvent.click(btn)
  })
})