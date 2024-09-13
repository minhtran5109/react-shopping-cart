import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="Shopping Cart" />);

    screen.debug();

    // check if App components renders headline
  });
});
