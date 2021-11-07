import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from ".";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("The Header Title", () => {
  it("should display the app name", () => {
    const { getByRole } = render(<Header />);
    expect(getByRole("heading").textContent).toEqual("Sav State");
  });

  it("should send the user home on title click", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    fireEvent.click(getByRole("button", { name: "Sav State" }));
    expect(mockHistoryPush).toHaveBeenCalledWith("/");
  });
});

describe("The Header Search Bar", () => {
  it("should render with placeholder text", () => {
    const { queryByPlaceholderText } = render(<Header />);
    expect(queryByPlaceholderText(/search for tv shows/i)).toBeInTheDocument();
  });

  it("should push to a search page with the right query term", () => {
    const { getByPlaceholderText, getByRole } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    fireEvent.change(getByPlaceholderText(/search for tv shows/i), {
      target: {
        value: "batman",
      },
    });

    fireEvent.click(getByRole("button", { name: /search/i }));
    expect(mockHistoryPush).toHaveBeenCalledWith("/search/batman");
  });
});
