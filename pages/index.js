import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import rankings from "../data/data";
import Rank from "./Rank";
import Marquee from "./Marquee";
import Modal from "./Modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Offical PITA Rankings</title>
        <meta name="description" content="Generated by create next app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whatapita.vercel.app/" />
        <meta property="og:title" content="Official PITA Rankings" />
        <meta
          property="og:description"
          content="official pita rankings guide with Next.js. by 1auvpadilla"
        />
        <meta
          property="og:image"
          content="https://whatapita.vercel.app/meta.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://whatapita.vercel.app/" />
        <meta property="twitter:title" content="Official PITA Rankings" />
        <meta
          property="twitter:description"
          content="official pita rankings guide with Next.js. by 1auvpadilla"
        />
        <meta
          property="twitter:image"
          content="https://whatapita.vercel.app/meta.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="//cloud.typenetwork.com/projects/4237/fontface.css/"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>

      <header className={styles.header}>
        <nav>
          <div>
            <button className={styles.btn} onClick={() => setIsOpen(true)}>
              About PITAs
            </button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
          </div>
        </nav>
      </header>

      <Marquee />

      <main className={styles.main}>
        <section className={styles.intro}>
          <h1
            className={`${styles.title} ${styles.poynteroldstyledisplaynarrowregular}`}
          >
            The official rankings guide of the different types of PITAs (pains
            in the ass) you can and will encounter in life.
          </h1>
        </section>

        <section className={styles.rankings}>
          {rankings.map((rank) => {
            return <Rank key={rank.id} {...rank}></Rank>;
          })}
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          made by <a href="https://twitter.com/1aurapadilla">@1aurapadilla</a>
        </p>
      </footer>
    </>
  );
}
