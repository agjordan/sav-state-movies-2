import React, { ReactElement } from "react";
import parse from "html-react-parser";
import { CastMember } from "../../services/TVShows/types";
import styles from "./DetailSummary.module.scss";

interface DetailSummaryProps {
  image: string | null;
  name: string;
  premiered: string | null;
  summary: string | null;
  genres: string[];
  status: string | null;
  cast: CastMember[];
}

const DetailSummary = ({
  image,
  name,
  premiered,
  summary,
  genres,
  status,
  cast,
}: DetailSummaryProps): ReactElement => {
  const formatImage = (): ReactElement =>
    image ? (
      <img src={image} alt={name} className={styles.showImg} />
    ) : (
      <p className={styles.imgPlaceholder}>No Image Available</p>
    );

  const formatNameAndDate = (): ReactElement =>
    premiered ? (
      <h1>{`${name} (${new Date(premiered).getFullYear()})`}</h1>
    ) : (
      <h1>{`${name}`}</h1>
    );

  const formatSummary = (): ReactElement => {
    return summary ? (parse(summary) as ReactElement) : <p>No Show Summary</p>;
  };

  const formatCast = (): ReactElement => {
    if (!cast.length) return <p>No cast info available</p>;
    return (
      <p>
        Cast:{" "}
        {cast.slice(0, 10).map((val, key, arr) => {
          if (Object.is(arr.length - 1, key)) {
            return val.person.name;
          }
          return `${val.person.name} | `;
        })}
      </p>
    );
  };

  const formatGenres = () => {
    if (!genres.length) return <p>Genres: No genre specified</p>;
    return (
      <p>
        Genres:{" "}
        {genres.map((val, key, arr) => {
          if (Object.is(arr.length - 1, key)) {
            return val;
          }
          return `${val} | `;
        })}
      </p>
    );
  };

  const formatStatus = () => <p>Status: {status || "status unavailable"}</p>;

  return (
    <section className={styles.detail}>
      {formatImage()}
      <div>
        {formatNameAndDate()}
        {formatSummary()}
        {formatCast()}
        {formatGenres()}
        {formatStatus()}
      </div>
    </section>
  );
};

export default DetailSummary;
