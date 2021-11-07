import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getTVShowCast,
  getTVShowDetails,
  getTVShowSeasons,
} from "../../services/TVShows/tvshows.service";
import { CastMember, Season, TVShow } from "../../services/TVShows/types";
import styles from "./Detail.module.scss";
import DetailSummary from "../DetailSummary";
import Seasons from "../Seasons";

interface ParamTypes {
  id: string;
}

const Detail = (): ReactElement => {
  const { id } = useParams<ParamTypes>();
  const [showDetails, setShowDetails] = useState<TVShow | undefined>(undefined);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const showData = await getTVShowDetails(id);
      setShowDetails(showData);
      const seasonsData = await getTVShowSeasons(id);
      setSeasons(seasonsData.reverse());
      const castData = await getTVShowCast(id);
      setCast(castData);
      setLoading(false);
    };
    getData();
  }, [id]);

  if (loading) return <p className={styles.noContent}>Loading...</p>;

  if (!showDetails)
    return <p className={styles.noContent}>No details to display</p>;

  return (
    <div className={styles.container}>
      <DetailSummary
        cast={cast}
        image={showDetails.image?.original || null}
        name={showDetails.name}
        premiered={showDetails.premiered}
        summary={showDetails.summary}
        genres={showDetails.genres}
        status={showDetails.status}
      />
      <Seasons seasons={seasons} />
    </div>
  );
};

export default Detail;
