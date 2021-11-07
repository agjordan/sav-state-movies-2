import React from "react";
import { render, waitFor } from "@testing-library/react";
import { episodes } from "../../mock/shows";
import List from ".";

describe("The List", () => {
  it("should display all the show titles", async () => {
    const mockSuccessAPI = jest.fn(() => Promise.resolve(episodes));
    const { getByText, findAllByRole } = render(
      <List getTVShows={mockSuccessAPI} />
    );
    expect(getByText(/display/i)).toBeInTheDocument();
    await waitFor(() => expect(mockSuccessAPI).toHaveBeenCalledTimes(1));
    const headings = await findAllByRole("heading");
    expect(headings.map((heading) => heading.textContent)).toEqual(
      episodes.map((epi) => epi.show.name)
    );
  });

  it("should display an image placeholder if no URL is available", async () => {
    const mockSuccessAPI = jest.fn(() => Promise.resolve([episodes[0]]));
    const { findByText } = render(<List getTVShows={mockSuccessAPI} />);
    const placeholder = await findByText(/no image available/i);
    expect(placeholder).toBeInTheDocument();
  });
});
