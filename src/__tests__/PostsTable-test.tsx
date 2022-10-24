import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppProviders from "../AppProviders";
import PostsTable from "../Components/PostsTable";

test("Table Comp Rendered", () => {
  render(<PostsTable />, {
    wrapper: AppProviders,
  });
  const textElemt = screen.getByRole("table");
  expect(textElemt).toBeInTheDocument();
});
