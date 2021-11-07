import React from "react";
import { render } from "@testing-library/react";
import Seasons from ".";
import { seasons } from "../../mock/shows";

describe("The Seasons component", () => {
  it("should display all seasons", async () => {
    const { queryAllByRole } = render(<Seasons seasons={seasons} />);
    expect(queryAllByRole("heading", { name: /season/i }).length).toEqual(
      seasons.length
    );
  });
});
