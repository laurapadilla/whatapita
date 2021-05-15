import React, { useState } from "react";
import rankings from "./data";
import styles from "../styles/Home.module.scss";

export default function Rank({ rank, info, stat }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className={styles.rank}>
      <header onClick={() => setShowInfo(!showInfo)}>
        <div className={styles.titleContainer}>
          <div
            className={showInfo ? `${styles.statusFill}` : `${styles.status}`}
          ></div>
          <h3>{rank}</h3>
        </div>
        <p className={styles.stat}>{stat}</p>
      </header>
      {showInfo && <p className={styles.info}>{info}</p>}
    </article>
  );
}
