import React from "react";
import { render } from "@testing-library/react";
import EpisodeCard from ".";

describe("The Episode Card", () => {
  it("should display the show name", () => {
    const { getByRole } = render(
      <EpisodeCard imgUrl={null} showId="0000" name="Test Show" />
    );
    expect(getByRole("heading").textContent).toEqual("Test Show");
  });

  it("should show an image placeholder if there is no image url", () => {
    const { getByText } = render(
      <EpisodeCard imgUrl={null} showId="0000" name="Test Show" />
    );
    expect(getByText(/no image available/i).textContent).toEqual(
      "No Image Available"
    );
  });

  it("should show an image if one is available", () => {
    const { getByRole } = render(
      <EpisodeCard
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png"
        showId="0000"
        name="Test Show"
      />
    );
    expect(getByRole("img")).toBeInTheDocument();
  });
});
