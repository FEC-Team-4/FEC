import React from "react";
import { render } from '@testing-library/react'
import App from "./App.jsx";

test("Application root", () => {
  render(<App/>)
})
