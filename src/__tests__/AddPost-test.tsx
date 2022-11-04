import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppProviders from "../AppProviders";
import AddPost from "../Components/AddPost";
import { act } from "react-dom/test-utils";

const onedata = { id: 0, userId: 1, title: "", body: "" };

describe("Add Post", () => {
  test("renders all element correcly", async () => {
    render(<AddPost ModalShow={true} OnePost={onedata} />, {
      wrapper: AppProviders,
    });
    const textElemt = screen.getByRole("heading", { name: /add post/i });
    expect(textElemt).toBeInTheDocument();

    const InputElemtLablel = screen.getByText(/title/i);
    expect(InputElemtLablel).toBeInTheDocument();

    const InputElemt = screen.getByRole("title");
    expect(InputElemt).toBeInTheDocument();

    const InputElemtLablel_2 = screen.getByText(/body/i);
    expect(InputElemtLablel_2).toBeInTheDocument();

    const InputElemt_2 = screen.getByRole("body");
    expect(InputElemt_2).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    expect(cancelButton).toBeInTheDocument();
  });
});

const mockedEntries = [
  {
    isIntersecting: true,
    boundingClientRect: { x: 10, y: 20, width: 30, height: 40 },
  },
];

const IntersectionObserverStub = function () {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
  };
};

jest.doMock("intersection-observer-mock", () => IntersectionObserverStub, {
  virtual: true,
});

window.IntersectionObserver = jest.requireMock("intersection-observer-mock");

describe("Form Submit ", () => {
  test("form Submit ", async () => {
    render(<AddPost ModalShow={true} OnePost={onedata} />, {
      wrapper: AppProviders,
    });

    const InputElemt = screen.getByRole("title");
    fireEvent.change(InputElemt, { target: { value: "the title value" } });

    const InputElemt_2 = screen.getByRole("body");
    fireEvent.change(InputElemt_2, { target: { value: "the body value" } });

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);
  });
});

describe("Form Submit ", () => {
  test("form Update ", async () => {
    const onedata_ = { id: 1, userId: 1, title: "", body: "" };

    render(<AddPost ModalShow={true} OnePost={onedata_} />, {
      wrapper: AppProviders,
    });

    const InputElemt = screen.getByRole("title");
    fireEvent.change(InputElemt, { target: { value: "the title value" } });

    const InputElemt_2 = screen.getByRole("body");
    fireEvent.change(InputElemt_2, { target: { value: "the body value" } });

    const submitButton = screen.getByRole("button", { name: /update/i });
    fireEvent.click(submitButton);
  });

  test("form calcel ", async () => {
    const onedata_ = { id: 1, userId: 1, title: "", body: "" };

    render(<AddPost ModalShow={true} OnePost={onedata_} />, {
      wrapper: AppProviders,
    });

    const submitButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(submitButton);
  });
});
