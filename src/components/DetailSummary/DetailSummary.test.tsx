import React from "react";
import { render } from "@testing-library/react";
import DetailSummary from ".";
import { shows, cast } from "../../mock/shows";

describe("The Detail Summary component", () => {
  it("should format the title and year together", async () => {
    const show = shows[0];
    const { getByRole } = render(
      <DetailSummary
        image={show.show.image?.original || null}
        name={show.show.name}
        premiered={show.show.premiered}
        summary={show.show.summary || null}
        genres={show.show.genres}
        status={show.show.status}
        cast={[]}
      />
    );

    expect(getByRole("heading", { name: /batman/i })).toHaveTextContent(
      "Batman (1966)"
    );
  });

  it("should use a placeholder if no image is available", async () => {
    const show = shows[0];
    const { getByText } = render(
      <DetailSummary
        image={null}
        name={show.show.name}
        premiered={show.show.premiered}
        summary={show.show.summary || null}
        genres={show.show.genres}
        status={show.show.status}
        cast={[]}
      />
    );

    expect(getByText(/no image available/i)).toBeInTheDocument();
  });

  it("should only display the first 10 cast members formatted with a | between them", async () => {
    const show = shows[0];
    const { getByText } = render(
      <DetailSummary
        image={null}
        name={show.show.name}
        premiered={show.show.premiered}
        summary={show.show.summary || null}
        genres={[]}
        status={show.show.status}
        cast={cast}
      />
    );

    expect(getByText(/cast/i).textContent?.split("|").length).toEqual(10);
  });

  it("should display a placeholder if no summary is provided", async () => {
    const show = shows[0];
    const { getByText } = render(
      <DetailSummary
        image={null}
        name={show.show.name}
        premiered={show.show.premiered}
        summary={null}
        genres={[]}
        status={show.show.status}
        cast={[]}
      />
    );

    expect(getByText(/summary/i)).toHaveTextContent(/No Show Summary/i);
  });

  it("should display a placeholder if no cast is specified", async () => {
    const show = shows[0];
    const { getByText } = render(
      <DetailSummary
        image={null}
        name={show.show.name}
        premiered={show.show.premiered}
        summary={show.show.summary || null}
        genres={[]}
        status={show.show.status}
        cast={[]}
      />
    );

    expect(getByText(/cast/i)).toHaveTextContent(/no cast info available/i);
  });

  it("should display a placeholder if no genres are specified", async () => {
    const show = shows[0];
    const { getByText } = render(
      <DetailSummary
        image={null}
        name={show.show.name}
        premiered={show.show.premiered}
        summary={show.show.summary || null}
        genres={[]}
        status={show.show.status}
        cast={[]}
      />
    );

    expect(getByText(/genre/i)).toHaveTextContent(/no genre specified/i);
  });

  it("should display a placeholder if no status is specified", async () => {
    const show = shows[0];
    const { getByText } = render(
      <DetailSummary
        image={null}
        name={show.show.name}
        premiered={show.show.premiered}
        summary={show.show.summary || null}
        genres={[]}
        status={null}
        cast={[]}
      />
    );

    expect(getByText(/status/i)).toHaveTextContent(/status unavailable/i);
  });
});
