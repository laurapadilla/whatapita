import React, { useRef, useEffect } from "react";
import styles from "../styles/Home.module.scss";

export default function Marquee() {
  // target the main marquee container
  // target the span
  // update span with title const

  const title = "Official PITA Rankings — ";

  const marqueeText = new Array(100).fill(title).join("  ");

  return (
    <header className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        <span>{marqueeText}</span>
      </div>
    </header>
  );
}
