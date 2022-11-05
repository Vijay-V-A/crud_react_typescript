import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppProviders from "../AppProviders";
import Header from "../Components/Header";

describe("Header", () => {
  test("renders all elements correctly", async () => {
    render(<Header />, {
      wrapper: AppProviders,
    });

    await fireEvent.scroll(window, { target: { scrollY: 300 } });

    const textElement = screen.getByText(/dashboard/i);
    expect(textElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", { name: /add post/i });
    expect(buttonElement).toBeInTheDocument();
  });
});

describe("Header User Interaction", () => {
  test("Check Initial State Value", () => {
    render(<Header />, {
      wrapper: AppProviders,
    });

    const textElement = screen.getByRole("heading");
    expect(textElement).toHaveTextContent("false");
  });

  test("Button Click", () => {
    render(<Header />, {
      wrapper: AppProviders,
    });

    const buttonElement = screen.getByRole("button", { name: /add post/i });
    fireEvent.click(buttonElement);
    const textElement = screen.getByRole("heading");
    expect(textElement).toHaveTextContent("true");
  });
});
