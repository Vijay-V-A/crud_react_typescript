import { render, screen, fireEvent } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import AppProviders from "../AppProviders";
import PostsTable from "../Components/PostsTable";

const Post = [{ id: 1, userId: 1, title: "hi", body: "Welcome" }];

const Post_ = [
  { id: 1, userId: 1, title: "hi", body: "Welcome" },
  { id: 1, userId: 1, title: "hi", body: "Welcome" },
  { id: 1, userId: 1, title: "hi", body: "Welcome" },
  { id: 1, userId: 1, title: "hi", body: "Welcome" },
  { id: 1, userId: 1, title: "hi", body: "Welcome" },
  { id: 1, userId: 1, title: "hi", body: "Welcome" },
  { id: 1, userId: 1, title: "hi", body: "Welcome" },
  { id: 1, userId: 1, title: "hi", body: "Welcome" },
  { id: 1, userId: 1, title: "hi", body: "Welcome" },
  { id: 1, userId: 1, title: "hi", body: "Welcome" },
];

describe("Posts Table", () => {
  test("Table Comp Rendered", () => {
    render(<PostsTable Posts={null} />, {
      wrapper: AppProviders,
    });
    const textElemt = screen.getByRole("table");
    expect(textElemt).toBeInTheDocument();
  });
});

describe("Table Data", () => {
  test("Table Data 1 Rendered", () => {
    render(<PostsTable Posts={Post} />, {
      wrapper: AppProviders,
    });
    const textElemt = screen.getByRole("row", {
      name: /1 hi Welcome edit delete/i,
    });
    expect(textElemt).toBeInTheDocument();
  });

  test("Edit Button Click", async () => {
    render(<PostsTable Posts={Post_} />, {
      wrapper: AppProviders,
    });

    const editButton = await screen.findAllByRole("button", { name: /edit/i });
    fireEvent.click(editButton[2]);
  });

  test("Delete Button Click", async () => {
    render(<PostsTable Posts={Post_} />, {
      wrapper: AppProviders,
    });

    const editButton = await screen.findAllByRole("button", {
      name: /delete/i,
    });

    window.confirm = jest.fn(() => true);

    fireEvent.click(editButton[2]);
  });

  test("Table Data 10 Rendered", () => {
    render(<PostsTable Posts={Post_} />, {
      wrapper: AppProviders,
    });
    const textElemt = screen.getAllByRole("row", {
      name: /1 hi Welcome edit delete/i,
    });
    expect(textElemt).toHaveLength(10);
  });

  test("Table Data Not Found", () => {
    render(<PostsTable Posts={null} />, {
      wrapper: AppProviders,
    });
    const textElemt = screen.getByText(/no data found...!/i);
    expect(textElemt).toBeInTheDocument();
  });
});
