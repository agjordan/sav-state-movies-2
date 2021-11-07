import React, { ReactElement, useEffect, useState } from "react";
import { TVShowEpisodeWithShow } from "../../services/TVShows/types";
import EpisodeCard from "../EpisodeCard";
import styles from "./List.module.scss";

interface ListProps {
  getTVShows: () => Promise<TVShowEpisodeWithShow[]>;
}

const List = ({ getTVShows }: ListProps): ReactElement => {
  const [shows, setShows] = useState<TVShowEpisodeWithShow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getTVShows();
      setShows(data);
      setLoading(false);
    };

    getData();
  }, [getTVShows]);

  if (loading) return <p className={styles.list}>Loading ... </p>;

  if (!shows?.length) return <p className={styles.list}>No shows to display</p>;

  return (
    <main className={styles.list}>
      {shows.map((episode: TVShowEpisodeWithShow) => (
        <EpisodeCard
          key={`${episode.show.id} ${episode.id}`}
          name={episode.show.name}
          imgUrl={episode.show.image?.medium || null}
          showId={episode.show.id.toString()}
        />
      ))}
    </main>
  );
};

export default List;
