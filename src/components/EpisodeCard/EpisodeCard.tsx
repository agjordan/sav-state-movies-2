import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import styles from "./EpisodeCard.module.scss";

interface EpisodeCardProps {
  imgUrl: string | null;
  showId: string;
  name: string | undefined;
}

const EpisodeCard = ({
  imgUrl,
  showId,
  name = undefined,
}: EpisodeCardProps): ReactElement => {
  const history = useHistory();
  const handleClick = (id: string) => {
    history.push(`/show/${id}`);
  };
  return (
    // TODO: fix accessibility issue here
    // eslint-disable-next-line
    <div className={styles.card} onClick={() => handleClick(showId)}>
      {imgUrl ? <img src={imgUrl} alt="name" /> : <p>No Image Available</p>}
      <h1 className={styles.title}>{name}</h1>
    </div>
  );
};

export default EpisodeCard;
