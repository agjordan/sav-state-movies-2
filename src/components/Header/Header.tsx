import React, { FormEvent, ReactElement, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = (): ReactElement => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(`/search/${searchTerm}`);
  };

  const sendHome = () => {
    history.push(`/`);
  };

  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <h1>
          <button
            type="button"
            onClick={sendHome}
            className={styles.titleButton}
          >
            Sav State
          </button>
        </h1>
        <form onSubmit={handleSubmit} className={styles.search}>
          <input
            type="text"
            value={searchTerm}
            placeholder="search for tv shows"
            onChange={(event) => setSearchTerm(event?.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
