import React from "react";
import ScoreBoard from "./ScoreBoard";
import Frame from "./Frame";

import { render, screen } from "@testing-library/react";

it("should render ten Frame components", () => {
  render(<ScoreBoard />);
  expect(screen.getAllByRole("Frame").length).toEqual(10);
});
