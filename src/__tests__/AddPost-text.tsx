import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";

import AppProviders from "../AppProviders";
import AddPost from "../Components/AddPost";

describe("Header", () => {
  test("renders all element correcly", () => {
    render(<AddPost ModalShow={true} />, {
      wrapper: AppProviders,
    });
    const textElemt = screen.getByText(/Add Post/i);
    expect(textElemt).toBeInTheDocument();

    const InputElemtLablel = screen.getByText(/title/i);
    expect(InputElemtLablel).toBeInTheDocument();

    const InputElemt = screen.getByRole("in_1");
    expect(InputElemt).toBeInTheDocument();

    const InputElemtLablel_2 = screen.getByText(/body/i);
    expect(InputElemtLablel_2).toBeInTheDocument();

    const InputElemt_2 = screen.getByRole("in_2");
    expect(InputElemt_2).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    expect(cancelButton).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });
});
