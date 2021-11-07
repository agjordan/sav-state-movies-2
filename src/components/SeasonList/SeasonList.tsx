import React, { ReactElement, useEffect, useState } from "react";
import { TVShowEpisode } from "../../services/TVShows/types";
import styles from "./SeasonList.module.scss";

interface SeasonListProps {
  getEpisodes: () => Promise<TVShowEpisode[]>;
}

const SeasonList = ({ getEpisodes }: SeasonListProps): ReactElement => {
  const [episodes, setEpisodes] = useState<TVShowEpisode[]>([]);

  useEffect(() => {
    const getData = async () => {
      const episodesData = await getEpisodes();
      setEpisodes(episodesData);
    };
    getData();
  }, [getEpisodes]);

  if (episodes.length === 0) return <p>No episodes to display</p>;

  return (
    <section className={styles.list}>
      {episodes.map((episode: TVShowEpisode) => {
        return (
          <div key={episode.id} className={styles.listItem}>
            {episode.number ? (
              <h2>{`S${episode.season} - E${episode.number}`}</h2>
            ) : (
              <h2>{`S${episode.season} - Special`}</h2>
            )}
            {episode.image?.medium ? (
              <img src={episode.image.medium} alt="" />
            ) : (
              <p className={styles.imgPlaceholder}>No Image Available</p>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default SeasonList;
