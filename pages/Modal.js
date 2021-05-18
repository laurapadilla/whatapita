import React from "react";
import styles from "../styles/Home.module.scss";

export default function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modalWrapper}>
        <button className={styles.closeModal} onClick={onClose}>
          X
        </button>
        <h1 className={styles.modalTitle}>About PITAs</h1>
        <p>
          Much like Peeta in The Hunger Games, a PITA is commonly known as a
          pain in the ass. I first heard the abbreviation through a coworker who
          kept referring to obnoxious requests as "a Major pita." So I thought
          it would be fun to document the different types and levels of PITAs
          using military ranks of which I know nothing about.
        </p>
      </div>
    </>
  );
}
