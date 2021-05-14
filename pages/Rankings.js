import React, { useState } from "react";
import rankings from "./data";
import styles from "../styles/Home.module.scss";

export default function Rank({ rank, info }) {
  // add state stuff here to show/hide info
  // const [state, setstate] = useState(initialState);
  return (
    <article className={styles.rank}>
      <header>
        <div className={styles.status}></div>
        <h3>{rank}</h3>
      </header>
      <p>{info}</p>
    </article>
  );
}
