import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  ////Display content on Node as it would have displayed on DOM
  // const element = screen.queryByText("please pass this test");
  // screen.debug(element);

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
