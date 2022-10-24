import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import AppProviders from "../AppProviders";
import Header from "../Components/Header";

describe("Header", () => {
  test("renders all elements correctly", () => {
    render(<Header />, {
      wrapper: AppProviders,
    });
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

  test("Button Click", async () => {
    user.setup();
    render(<Header />, {
      wrapper: AppProviders,
    });

    const buttonElement = screen.getByRole("button", { name: /add post/i });
    await user.click(buttonElement);
    const textElement = screen.getByRole("heading");
    expect(textElement).toHaveTextContent("true");
  });

  test("Button Double Click", async () => {
    user.setup();
    render(<Header />, {
      wrapper: AppProviders,
    });

    const buttonElement = screen.getByRole("button", { name: /add post/i });
    const textElement = screen.getByRole("heading");
    await user.dblClick(buttonElement);
    expect(textElement).toHaveTextContent("false");
  });
});
