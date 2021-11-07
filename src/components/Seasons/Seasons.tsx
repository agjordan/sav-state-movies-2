import React, { ReactElement } from "react";
import styles from "./Seasons.module.scss";
import { getSeasonEpisodes } from "../../services/TVShows/tvshows.service";
import { Season } from "../../services/TVShows/types";
import SeasonList from "../SeasonList";

interface SeasonsProps {
  seasons: Season[];
}

const Seasons = ({ seasons }: SeasonsProps): ReactElement => {
  return (
    <>
      {seasons.map((season: Season) => (
        <div key={season.id} className={styles.season}>
          <h2>{`Season ${season.number}`}</h2>
          <SeasonList getEpisodes={() => getSeasonEpisodes(season.id)} />
        </div>
      ))}
    </>
  );
};

export default Seasons;
