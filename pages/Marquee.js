import React, { useRef, useEffect } from "react";
import styles from "../styles/Home.module.scss";

export default function Marquee() {
  // target the main marquee container
  // target the span
  // update span with title const

  const marqueeRef = useRef(null);
  const marqueeSpanRef = useRef(null);

  const makeMarquee = () => {
    const title = "Official PITA Rankings — ";

    const marqueeText = new Array(100).fill(title).join("  ");

    marqueeSpanRef.current.dangerouslySetInnerHTML = marqueeText;
  };

  useEffect(() => {
    makeMarquee();
  });

  return (
    <header className={styles.marqueeContainer}>
      <div ref={marqueeRef} className={styles.marquee}>
        <span ref={marqueeSpanRef}>Official PITA Rankings — </span>
      </div>
    </header>
  );
}
