import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppProviders from "../AppProviders";

import Home from "../Components/Home";
describe("Home", () => {
  test("Comp Rendered", () => {
    render(<Home />, {
      wrapper: AppProviders,
    });
    const Text = screen.getByTestId("Main-Sub");
    expect(Text).toBeInTheDocument();
  });
});
