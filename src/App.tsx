import React, { ReactElement } from "react";
import styles from "./App.module.scss";
import Routes from "./routes/Routes";

const App = (): ReactElement => {
  return (
    <main className={styles.app}>
      <Routes />
    </main>
  );
};

export default App;
