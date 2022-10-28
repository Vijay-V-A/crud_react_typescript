import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";

import AppProviders from "../AppProviders";
import AddPost from "../Components/AddPost";

describe("Header", () => {
  test("renders all element correcly", async () => {
    const onedata = { id: 0, userId: 1, title: "", body: "" };

    render(<AddPost ModalShow={true} OnePost={onedata} />, {
      wrapper: AppProviders,
    });
    const textElemt = await screen.findByRole(
      "heading",
      { name: /add post/i },
      {
        timeout: 5000,
      }
    );

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
