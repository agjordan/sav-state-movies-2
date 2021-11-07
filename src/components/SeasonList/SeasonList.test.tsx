import React from "react";
import { render } from "@testing-library/react";
import { seasonEpisodes } from "../../mock/shows";
import SeasonList from ".";

describe("The Season List", () => {
  it("should show display all episodes", async () => {
    const mockSuccessAPI = jest.fn(() => Promise.resolve(seasonEpisodes));
    const { findAllByRole } = render(
      <SeasonList getEpisodes={mockSuccessAPI} />
    );
    const episodes = await findAllByRole("heading");
    expect(episodes.length).toEqual(seasonEpisodes.length);
  });

  it("should display an image placeholder if no URL is available", async () => {
    const mockSuccessAPI = jest.fn(() => Promise.resolve([seasonEpisodes[0]]));
    const { findByText } = render(<SeasonList getEpisodes={mockSuccessAPI} />);
    const placeholder = await findByText(/no image available/i);
    expect(placeholder).toBeInTheDocument();
  });
});
